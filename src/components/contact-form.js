import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ContactForm extends Component {
    constructor() {
        super();

        this.state = {
            messageSent: false,
            isSending: false,
            height: null
        };
    }

    componentDidMount() {
        if (this.container) {
            this.setState({
                height: this.container.getBoundingClientRect().height
            });
        }
    }

    sendEnquiry(event) {
        event.preventDefault();
        const { nameInput, emailInput, messageInput } = this;

        this.setState({
            isSending: true
        });

        fetch('https://82rhrugey3.execute-api.us-west-2.amazonaws.com/dev/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
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
                });
            })
            .catch((error) => console.error(error));
    }


    // Render
    renderTitle() {
        const { messageSent, isSending } = this.state;
        const text = (messageSent) ? 'Thanks for getting in touch' : 'Get in touch';

        if (isSending) {
            return (
                <p>Sending...</p>
            );
        }

        return (
            <h4 className="contact-title">{text}</h4>
        );
    }

    render() {
        return (
            <div className="contact" ref={(div) => { this.container = div; }} style={{ height: (this.state.height || null) }}>
                <div className="container">
                    {this.props.showTitle && this.renderTitle()}
                    {this.state.messageSent === false &&
                        <form className="contact-form" onSubmit={(event) => this.sendEnquiry(event)}>
                            <input className="contact-input" type="text" name="name" ref={(input) => { this.nameInput = input; }} placeholder="Name" required />
                            <input className="contact-input" type="email" name="email" ref={(input) => { this.emailInput = input; }} placeholder="Email" required />
                            <textarea className="contact-text" type="text" name="message" ref={(input) => { this.messageInput = input; }} placeholder="Message"></textarea>
                            <button className="contact-button">Send</button>
                        </form>
                    }
                </div>
            </div>
        );
    }
}

ContactForm.propTypes = {
    showTitle: PropTypes.bool
};

ContactForm.defaultProps = {
    showTitle: true
};

export default ContactForm;
