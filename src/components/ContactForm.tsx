import { useState } from 'react';

const INPUT_STYLE: React.CSSProperties = {
  padding: '12px 14px',
  border: '1px solid rgba(241,227,203,.6)',
  background: '#15122F',
  fontFamily: "'Public Sans', sans-serif",
  fontSize: 16,
  color: '#F1E3CB',
  width: '100%',
};

const LABEL_STYLE: React.CSSProperties = {
  display: 'grid',
  gap: 6,
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 12,
  letterSpacing: '.16em',
  textTransform: 'uppercase' as const,
  color: '#5FD3CF',
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" style={{
        display: 'grid', gap: 16,
        background: '#0B0A1E', color: '#F1E3CB',
        border: '1px solid #19A6A3',
        boxShadow: '0 0 40px rgba(25,166,163,.25)',
        padding: 'clamp(32px,4vw,56px)',
      }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: '#5FD3CF' }}>
          Transmission received
        </div>
        <h3 style={{ margin: 0, fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900, fontSize: 56, lineHeight: .9, textTransform: 'uppercase' }}>
          Message in orbit.
        </h3>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
          Thanks. I read everything that comes in and will reply within a couple of business days.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          style={{
            justifySelf: 'start', cursor: 'pointer',
            background: 'transparent', color: '#F1E3CB',
            border: '1px solid #F1E3CB',
            padding: '10px 18px',
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 800, fontSize: 18, letterSpacing: '.08em', textTransform: 'uppercase',
          }}
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
      style={{
        display: 'grid', gap: 18,
        background: '#0B0A1E', color: '#F1E3CB',
        border: '1px solid #19A6A3',
        boxShadow: '0 0 40px rgba(25,166,163,.25)',
        padding: 'clamp(24px,3vw,40px)',
      }}
    >
      <p style={{ display: 'none' }}>
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 18 }}>
        <label style={LABEL_STYLE}>
          Name
          <input name="name" required style={INPUT_STYLE} />
        </label>
        <label style={LABEL_STYLE}>
          Email
          <input name="email" type="email" required style={INPUT_STYLE} />
        </label>
      </div>

      <label style={LABEL_STYLE}>
        Company
        <input name="company" style={INPUT_STYLE} />
      </label>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 18 }}>
        <label style={LABEL_STYLE}>
          What are you looking to build?
          <select name="type" style={INPUT_STYLE}>
            <option>New website</option>
            <option>Website rebuild</option>
            <option>Drupal / CMS work</option>
            <option>Performance or consulting</option>
            <option>Something else</option>
          </select>
        </label>
        <label style={LABEL_STYLE}>
          Approximate budget
          <select name="budget" style={INPUT_STYLE}>
            <option>Under $5k</option>
            <option>$5k–$10k</option>
            <option>$10k–$25k</option>
            <option>$25k+</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label style={LABEL_STYLE}>
        Message
        <textarea name="message" rows={5} required style={{ ...INPUT_STYLE, resize: 'vertical' }} />
      </label>

      <button
        type="submit"
        style={{
          justifySelf: 'start', cursor: 'pointer',
          background: '#EB3323', color: '#F1E3CB',
          border: 0,
          boxShadow: '0 0 26px rgba(235,51,35,.55)',
          padding: '14px 28px',
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 800, fontSize: 22, letterSpacing: '.08em', textTransform: 'uppercase',
          transition: 'transform .15s, box-shadow .15s',
        }}
        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(235,51,35,.9)'; }}
        onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 26px rgba(235,51,35,.55)'; }}
      >Launch Message</button>
    </form>
  );
}
