import * as React from "react";

interface ContactFormProps {
    showTitle: boolean;
}

export const ContactForm = ({ showTitle }: ContactFormProps) => {
    const container = React.useRef<HTMLDivElement>();
    const form = React.useRef<HTMLFormElement>();
    const [messageSent, setMessageSent] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);
    const [height, setHeight] = React.useState<number>(null);

    React.useEffect(() => {
        if (container.current) {
            setHeight(container.current.getBoundingClientRect().height);
        }
    }, [container.current]);

    const sendEnquiry = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSending(true);
        setError(false);

        try {
            const formData = new FormData(form.current);
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            const json = JSON.stringify(object);
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
    const Title = () => {
        const text = messageSent
            ? "Thanks for getting in touch"
            : "Get in touch";

        return <h4 className="contact-title">{text}</h4>;
    };

    if (isSending) {
        return <p>Sending...</p>;
    }

    return (
        <div
            className="contact"
            ref={container}
            style={{ height: height || null }}
        >
            <div className="constrain-width">
                {showTitle && <Title />}
                {error && (
                    <p>
                        There was an error trying to send your message. Please
                        try again.
                    </p>
                )}
                {!messageSent && (
                    <form
                        className="contact-form"
                        ref={form}
                        onSubmit={sendEnquiry}
                    >
                        <input
                            type="hidden"
                            name="apikey"
                            value={process.env.WEB3FORMS_API_KEY}
                        />
                        <input
                            type="hidden"
                            name="subject"
                            value="New Submission from Web3Forms"
                        />
                        <input
                            type="checkbox"
                            name="botcheck"
                            id=""
                            style={{ display: "none" }}
                        />
                        <input
                            className="contact-input"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required={true}
                        />
                        <input
                            className="contact-input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required={true}
                        />
                        <textarea
                            className="contact-text"
                            name="message"
                            placeholder="Message"
                        />
                        <button className="contact-button">Send</button>
                    </form>
                )}
            </div>
        </div>
    );
};
