import * as React from "react";

interface ContactFormProps {
    showTitle: boolean;
}

export const ContactForm = ({ showTitle }: ContactFormProps) => {
    const container = React.useRef<HTMLDivElement>();
    const nameInput = React.useRef<HTMLInputElement>();
    const emailInput = React.useRef<HTMLInputElement>();
    const messageInput = React.useRef<HTMLTextAreaElement>();
    const [messageSent, setMessageSent] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);
    const [height, setHeight] = React.useState(null);

    React.useEffect(() => {
        const { height } = container.current.getBoundingClientRect();
        setHeight(height);
    }, [container.current]);

    const sendEnquiry = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSending(true);

        try {
            const response = await fetch(
                "https://82rhrugey3.execute-api.us-west-2.amazonaws.com/dev/contact",
                {
                    method: "POST",
                    body: JSON.stringify({
                        name: nameInput.current.value,
                        email: emailInput.current.value,
                        message: messageInput.current.value,
                    }),
                    headers: new Headers({
                        "Content-Type": "application/json",
                    }),
                    mode: "no-cors",
                }
            );
            await response.text();
            setMessageSent(true);
        } catch (error: unknown) {
            console.error(error);
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
            <div className="container">
                {showTitle && <Title />}
                {messageSent === false && (
                    <form className="contact-form" onSubmit={sendEnquiry}>
                        <input
                            className="contact-input"
                            type="text"
                            name="name"
                            ref={nameInput}
                            placeholder="Name"
                            required={true}
                        />
                        <input
                            className="contact-input"
                            type="email"
                            name="email"
                            ref={emailInput}
                            placeholder="Email"
                            required={true}
                        />
                        <textarea
                            className="contact-text"
                            name="message"
                            ref={messageInput}
                            placeholder="Message"
                        />
                        <button className="contact-button">Send</button>
                    </form>
                )}
            </div>
        </div>
    );
};
