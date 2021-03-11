import * as React from "react";

interface ContactFormProps {
    showTitle: boolean;
}

export const ContactForm = ({ showTitle }: ContactFormProps) => {
    const container = React.useRef<HTMLDivElement>();
    const form = React.useRef<HTMLFormElement>();
    const [messageSent, setMessageSent] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);
    const [height, setHeight] = React.useState(null);

    React.useEffect(() => {
        if(container.current){
        const { height } = container.current.getBoundingClientRect();

            setHeight(height);
        }
    }, [container.current]);

    const sendEnquiry = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSending(true);

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
                    Accept: "application/json"
                },
                body: json
            });
            await response.json();
            setMessageSent(true);
        } catch (error) {
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
