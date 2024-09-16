"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";

export const ContactForm = () => {
  const container = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (container.current) {
      setHeight(container.current.getBoundingClientRect().height);
    }
  }, []);

  const sendEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setError(false);

    if (!form.current) {
      setError(true);
      return;
    }

    try {
      const formData = new FormData(form.current);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      await response.json();
      setMessageSent(true);
    } catch (e: unknown) {
      console.error(e);
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  // Render
  return (
    <div
      className="form"
      ref={container}
      style={{ height: height || undefined }}
    >
      <h1 className="form-title">
        {messageSent ? "Thanks for getting in touch" : "Get in touch"}
      </h1>
      {error && (
        <p>There was an error trying to send your message. Please try again.</p>
      )}
      {!messageSent && (
        <form className="form-form" ref={form} onSubmit={sendEnquiry}>
          <input
            type="hidden"
            name="apikey"
            value={"92509c25-14bb-4c90-8231-97b04e865390"}
            readOnly={isSending}
          />

          <input
            type="hidden"
            name="subject"
            value="New Submission from Web3Forms"
            readOnly={isSending}
          />

          <input
            type="checkbox"
            name="botcheck"
            id=""
            readOnly={isSending}
            style={{ display: "none" }}
          />
          <label htmlFor="name">
            <span className="form-label">Your name</span>
            <input
              className="form-input"
              type="text"
              name="name"
              required={true}
              readOnly={isSending}
            />
          </label>
          <label htmlFor="email">
            <span className="form-label">Your email address</span>
            <input
              className="form-input"
              type="email"
              name="email"
              required={true}
              readOnly={isSending}
            />
          </label>
          <label htmlFor="message">
            <span className="form-label">Write your message</span>
            <textarea
              className="form-text"
              name="message"
              required={true}
              readOnly={isSending}
            />
          </label>
          <button className="button secondary" disabled={isSending}>
            Send
          </button>
        </form>
      )}
    </div>
  );
};
