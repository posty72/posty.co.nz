import * as React from "react";

interface ContactFormProps {
    showTitle: boolean;
}

export const ContactForm = ({ showTitle }: ContactFormProps) => {
    const container = React.useRef<HTMLDivElement>(null);
    const form = React.useRef<HTMLFormElement>(null);
    const [messageSent, setMessageSent] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);
    const [height, setHeight] = React.useState<number>(0);

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
            const formData = new FormData(form.current ?? undefined);
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

        return <h4 className="form-title">{text}</h4>;
    };

    if (isSending) {
        return <p>Sending...</p>;
    }

    return (
        <div
            className="form"
            ref={container}
            style={{ height: height || undefined }}
        >
            {showTitle && <Title />}
            {error && (
                <p>
                    There was an error trying to send your message. Please try
                    again.
                </p>
            )}
            {!messageSent && (
                <form className="form-form" ref={form} onSubmit={sendEnquiry}>
                    <input
                        type="hidden"
                        name="apikey"
                        value={"92509c25-14bb-4c90-8231-97b04e865390"}
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
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required={true}
                    />
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required={true}
                    />
                    <textarea
                        className="form-text"
                        name="message"
                        placeholder="Message"
                        required={true}
                    />
                    <button className="form-button">Send</button>
                </form>
            )}
        </div>
    );
};
