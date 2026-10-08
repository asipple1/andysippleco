import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="contact-panel grid gap-4">
        <div className="font-mono text-[12px] tracking-[.18em] uppercase text-teal-text">
          Transmission received
        </div>
        <h3 className="m-0 font-heading font-black text-[56px] leading-[.9] uppercase">
          Message in orbit.
        </h3>
        <p className="m-0 text-[17px] leading-relaxed">
          Thanks. I read everything that comes in and will reply within a couple of business days.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn btn-ghost btn-sm justify-self-start"
        >Send another</button>
      </div>
    );
  }

  return (
    <form
      data-reveal=""
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="contact-panel grid gap-4.5"
    >
      <p className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid gap-4.5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))' }}>
        <label className="form-label">
          Name
          <input name="name" required className="form-input" />
        </label>
        <label className="form-label">
          Email
          <input name="email" type="email" required className="form-input" />
        </label>
      </div>

      <label className="form-label">
        Company
        <input name="company" className="form-input" />
      </label>

      <div className="grid gap-4.5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))' }}>
        <label className="form-label">
          What are you looking to build?
          <select name="type" className="form-input">
            <option>New website</option>
            <option>Website rebuild</option>
            <option>Drupal / CMS work</option>
            <option>Performance or consulting</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="form-label">
          Approximate budget
          <select name="budget" className="form-input">
            <option>Under $5k</option>
            <option>$5k–$10k</option>
            <option>$10k–$25k</option>
            <option>$25k+</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="form-label">
        Message
        <textarea name="message" rows={5} required className="form-input resize-y" />
      </label>

      <button type="submit" className="btn-submit">Launch Message</button>
    </form>
  );
}
