import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  fontSize: '0.875rem',
  outline: 'none',
  fontFamily: 'inherit',
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    emailjs
      .sendForm(
        'service_07i3smi',
        'template_oy0r3sk',
        formRef.current,
        'IU-PgqoHqYuYvSuLn'
      )
      .then(() => { setStatus('success'); formRef.current?.reset() })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Get in touch</span>
          <h2 style={{ color: 'var(--text)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginTop: '8px' }}>Contact Me</h2>
          <div style={{ width: '48px', height: '3px', background: 'var(--accent)', marginTop: '12px', borderRadius: '2px' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Open to freelance projects, full-time opportunities, and interesting collaborations.
              Feel free to reach out!
            </p>

            {[
              { label: 'Email', value: 'baleashvar@gmail.com', href: 'mailto:baleashvar@gmail.com' },
              { label: 'Location', value: 'Chennai, India', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700 }}>{label[0]}</span>
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginBottom: '2px' }}>{label}</div>
                  {href ? (
                    <a href={href} style={{ color: 'var(--text)', fontSize: '0.875rem', textDecoration: 'none' }}>{value}</a>
                  ) : (
                    <span style={{ color: 'var(--text)', fontSize: '0.875rem' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              {[
                { icon: GithubIcon, url: 'https://github.com/baleashvar', label: 'GitHub' },
                { icon: LinkedinIcon, url: 'https://linkedin.com/in/baleashvar', label: 'LinkedIn' },
              ].map(({ icon: Icon, url, label }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}
                  style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', textDecoration: 'none' }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input name="from_name" placeholder="Your Name" required style={inputStyle} />
              <input name="from_email" type="email" placeholder="Your Email" required style={inputStyle} />
            </div>
            <input name="subject" placeholder="Subject" required style={inputStyle} />
            <textarea name="message" placeholder="Your Message" required rows={6}
              style={{ ...inputStyle, resize: 'vertical' }} />

            <button type="submit" disabled={status === 'sending'}
              style={{ padding: '12px 24px', borderRadius: '8px', background: 'var(--accent)', color: 'white', fontSize: '0.875rem', fontWeight: 600, border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p style={{ color: '#4ade80', fontSize: '0.875rem' }}>Message sent successfully!</p>}
            {status === 'error' && <p style={{ color: '#f87171', fontSize: '0.875rem' }}>Something went wrong. Please try again.</p>}
          </form>

        </div>
      </div>
    </section>
  )
}
