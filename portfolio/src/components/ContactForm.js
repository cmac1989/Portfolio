import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import '../styles/contactForm.css';
import FormModal from './FormModal';

const SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const EMPTY_FORM = { name: '', email: '', message: '' };

export default function ContactForm() {
    const [formData, setFormData]   = useState(EMPTY_FORM);
    const [errors, setErrors]       = useState({});
    const [sending, setSending]     = useState(false);
    const [sendError, setSendError] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name || formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters.';
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'A valid email address is required.';
        }
        if (!formData.message || formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSendError('');
        if (!validate()) return;

        setSending(true);
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name:  formData.name,
                    from_email: formData.email,
                    message:    formData.message,
                },
                PUBLIC_KEY,
            );
            setFormData(EMPTY_FORM);
            setModalShow(true);
        } catch {
            setSendError('Something went wrong. Please try again or email me directly.');
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="contactForm" id="contact">
            <h1>Contact Me</h1>
            <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="you@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="What's on your mind?"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                    />
                    {errors.message && <span className="error-text">{errors.message}</span>}
                </Form.Group>

                {sendError && <p className="error-text send-error">{sendError}</p>}

                <Button
                    className="custom-button"
                    variant="primary"
                    type="submit"
                    disabled={sending}
                >
                    {sending ? 'Sending…' : 'Send Message'}
                </Button>
            </Form>

            <FormModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
}
