import React, { Component } from 'react';

class ContactForm extends Component {
    constructor() {
        super();

        this.state = {
            messageSent: false,
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
        const { name, email, message } = this;

        fetch('https://82rhrugey3.execute-api.us-west-2.amazonaws.com/dev/contact', {
            method: 'POST',
            body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: 'no-cors',
        })
            .then((response) => {
                return response.text();
            })
            .then((response) => {
                console.log(response);
                this.setState({ messageSent: true });
            })
            .catch((error) => console.error(error));
    }


    // Render
    renderTitle() {
        const text = (this.state.messageSent) ? 'Thanks for getting in touch' : 'Get in touch';

        return (
            <h4 className="contact-title">{text}</h4>
        );
    }

    render() {
        return (
            <div className="contact" ref={(div) => { this.container = div; }} style={{ height: (this.state.height || null) }}>
                <div className="container">
                    {this.renderTitle()}
                    {this.state.messageSent === false &&
                        <form className="contact-form" onSubmit={(event) => this.sendEnquiry(event)}>
                            <input className="contact-input" type="text" name="name" ref={(input) => { this.name = input; }} placeholder="Name" required />
                            <input className="contact-input" type="email" name="email" ref={(input) => { this.email = input; }} placeholder="Email" required />
                            <textarea className="contact-text" type="text" name="message" ref={(input) => { this.message = input; }} placeholder="Message"></textarea>
                            <button className="contact-button">Send</button>
                        </form>
                    }
                </div>
            </div>
        );
    }
}

export default ContactForm;
