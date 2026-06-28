import { useEffect, useRef, useState } from 'react'
import { Download, Mail, ExternalLink } from 'lucide-react'
import heroImg from '../assets/DP.jpeg'

const ROLES = [
  'DevOps Engineer',
  'AWS Cloud Engineer',
  'Python Developer',
  'AWS Certified Practitioner',
]

function useTypewriter(words: string[], speed = 80, pause = 1500) {
  const [text, setText] = useState('')
  const index = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const current = words[index.current % words.length]
      if (!deleting.current) {
        setText((prev) => {
          const next = current.slice(0, prev.length + 1)
          if (next === current) {
            setTimeout(() => { deleting.current = true; timer = setTimeout(tick, speed) }, pause)
            return next
          }
          timer = setTimeout(tick, speed)
          return next
        })
      } else {
        setText((prev) => {
          const next = current.slice(0, prev.length - 1)
          if (next === '') { deleting.current = false; index.current += 1 }
          timer = setTimeout(tick, speed / 2)
          return next
        })
      }
    }
    timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [])

  return text
}

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

export default function Hero() {
  const role = useTypewriter(ROLES, 100, 2500)

  const socialLinks = [
    { icon: GithubIcon, url: 'https://github.com/baleashvar', label: 'GitHub' },
    { icon: LinkedinIcon, url: 'https://linkedin.com/in/baleashvar', label: 'LinkedIn' },
    { icon: ExternalLink, url: 'https://baleashvar.netlify.app', label: 'Old Portfolio' },
  ]

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px', paddingTop: '64px' }}>
      <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
            Hello, I'm
          </span>
          <h1 style={{ color: 'var(--text)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
            Baleashvar<br />Kasiviswanathan
          </h1>
          <div style={{ fontSize: '1.25rem', fontWeight: 500, height: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--muted)' }}>I'm a </span>
            <span style={{ color: 'var(--accent)' }}>{role}<span style={{ opacity: 1 }}>|</span></span>
          </div>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.7 }}>
            Proactive AWS Cloud DevOps Engineer with 2.8+ years of experience building scalable
            cloud enterprise applications and data pipelines in the aviation sector at British Airways.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', background: 'var(--accent)', color: 'white', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}
            >
              <Mail size={16} /> Hire Me
            </a>
            <a
              href="/Baleashvar_Resume.docx"
              download="Baleashvar_Resume.docx"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}
            >
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}
                style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Image */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '280px', height: '280px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--accent)', boxShadow: '0 0 40px rgba(99,102,241,0.3)' }}>
              <img src={heroImg} alt="Baleashvar Kasiviswanathan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', padding: '8px 12px', borderRadius: '8px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 600 }}>
              AWS Certified ☁️
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
