import * as React from 'react'

interface ContactFormProps {
    showTitle: boolean
}

interface ContactFormState {
    messageSent: boolean
    isSending: boolean
    height: number
}

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
    container: React.RefObject<HTMLDivElement> = React.createRef()
    nameInput: React.RefObject<HTMLInputElement> = React.createRef()
    emailInput: React.RefObject<HTMLInputElement> = React.createRef()
    messageInput: React.RefObject<HTMLTextAreaElement> = React.createRef()

    state = {
        messageSent: false,
        isSending: false,
        height: null
    }

    constructor(props: ContactFormProps) {
        super(props)

        this.sendEnquiry = this.sendEnquiry.bind(this)
    }

    componentDidMount() {
        if (this.container.current) {
            const { height } = this.container.current.getBoundingClientRect()
            this.setState({ height })
        }
    }

    sendEnquiry(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const { nameInput, emailInput, messageInput } = this

        this.setState({
            isSending: true
        })

        fetch('https://82rhrugey3.execute-api.us-west-2.amazonaws.com/dev/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: nameInput.current.value,
                email: emailInput.current.value,
                message: messageInput.current.value
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: 'no-cors',
        })
            .then((response) => response.text())
            .then(() => {
                this.setState({
                    messageSent: true,
                    isSending: false
                })
            })
            .catch((error) => console.error(error))
    }

    // Render
    renderTitle() {
        const { messageSent, isSending } = this.state
        const text = (messageSent) ? 'Thanks for getting in touch' : 'Get in touch'

        if (isSending) {
            return (
                <p>Sending...</p>
            )
        }

        return (
            <h4 className="contact-title">{text}</h4>
        )
    }

    render() {
        return (
            <div
                className="contact"
                ref={this.container}
                style={{ height: (this.state.height || null) }}>
                <div className="container">
                    {this.props.showTitle && this.renderTitle()}
                    {this.state.messageSent === false &&
                        <form className="contact-form" onSubmit={this.sendEnquiry}>
                            <input
                                className="contact-input"
                                type="text" name="name"
                                ref={this.nameInput}
                                placeholder="Name"
                                required={true} />
                            <input
                                className="contact-input"
                                type="email" name="email"
                                ref={this.emailInput}
                                placeholder="Email"
                                required={true} />
                            <textarea
                                className="contact-text"
                                name="message"
                                ref={this.messageInput}
                                placeholder="Message" />
                            <button className="contact-button">Send</button>
                        </form>
                    }
                </div>
            </div>
        )
    }
}

export default ContactForm
