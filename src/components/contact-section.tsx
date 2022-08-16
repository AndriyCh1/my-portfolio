import React, { useRef, useState } from 'react';
import Input from './input';
import Section from './section';
import Button from './button';
import emailjs from 'emailjs-com';
import env from '../utils/env';

const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, TO_EMAIL } = env;

const ContactSection = () => {
  const [nameInput, setNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const [emailResponse, setEmailResponse] = useState({ status: -1, message: '' });

  const form = useRef<HTMLFormElement>(null);

  const showResponse = (res: typeof emailResponse) => {
    setEmailResponse(res);

    setTimeout(() => {
      setEmailResponse({ status: -1, message: '' });
    }, 3000);
  };

  const templateParams = {
    name: `${nameInput} ${lastNameInput}`,
    message: messageInput,
    from_email: emailInput,
    to_email: TO_EMAIL || '',
    phone: phoneInput,
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && TO_EMAIL) {
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
          (result) => {
            showResponse({ status: result.status, message: 'The message successfully sent!' });
          },
          (error) => {
            showResponse({
              status: error.status,
              message: 'Some error occurred =( Try to contact with me through the contacts above',
            });
          },
        );
      } else {
        showResponse({
          status: 500,
          message:
            'This service run into a problem... Try to contact with me through the contacts above',
        });
      }
    }
  };

  return (
    <Section title="Get in touch" className="contact">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <Input
          name="name"
          label="Name"
          value={nameInput}
          onChange={(e) => setNameInput(e?.value || '')}
          className="contact-form__input"
        />

        <Input
          name="last_name"
          label="Last name"
          value={lastNameInput}
          onChange={(e) => setLastNameInput(e?.value || '')}
          className="contact-form__input"
        />

        <Input
          name="from_email"
          label="Email"
          value={emailInput}
          required={true}
          type="email"
          onChange={(e) => setEmailInput(e?.value || '')}
          className="contact-form__input"
        />

        <Input
          name="phone_number"
          label="Phone number"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e?.value || '')}
          className="contact-form__input"
        />

        <textarea
          required={true}
          name="message"
          className="contact-form__textarea"
          placeholder="Message"
          rows={10}
          defaultValue={messageInput}
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
            setMessageInput(e.currentTarget.value)
          }
        />

        <div className="contact-form__btn-wrapper">
          <Button className="contact-form__btn" type="submit">
            Submit now
          </Button>
          {emailResponse.status !== -1 && (
            <span
              className={`contact-form__response ${
                emailResponse.status === 200 ? 'success' : 'error'
              }`}
            >
              {emailResponse.message}
            </span>
          )}
        </div>
      </form>
    </Section>
  );
};

export default ContactSection;
