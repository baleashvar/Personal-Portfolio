import { experiences, education } from '../data/experience'
import BA_logo from '../assets/BA_logo.png'

export default function Resume() {
  return (
    <section id="resume" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>My Journey</span>
          <h2 style={{ color: 'var(--text)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginTop: '8px' }}>Resume</h2>
          <div style={{ width: '48px', height: '3px', background: 'var(--accent)', marginTop: '12px', borderRadius: '2px' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>

          {/* Experience */}
          <div>
            <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--accent)' }}>⚡</span> Experience
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {experiences.map((exp, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  {/* Timeline */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} />
                    {i < experiences.length - 1 && (
                      <div style={{ width: '2px', flex: 1, background: 'var(--border)', minHeight: '24px' }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ paddingBottom: '32px', flex: 1 }}>
                    <div style={{ padding: '20px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          {exp.client === 'British Airways' && (
                            <img src={BA_logo} alt="British Airways" style={{ height: '24px', objectFit: 'contain' }} />
                          )}
                          <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem' }}>{exp.title}</h4>
                        </div>
                        <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 500, background: 'rgba(99,102,241,0.1)', padding: '2px 10px', borderRadius: '999px' }}>{exp.period}</span>
                      </div>
                      <p style={{ color: 'var(--accent)', fontSize: '0.875rem', marginBottom: '12px' }}>
                        {exp.company}{exp.client ? ` — ${exp.client}` : ''}
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '0', listStyle: 'none' }}>
                        {exp.points.map((point, j) => (
                          <li key={j} style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6, display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>›</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certifications + Publication */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Education */}
            <div>
              <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent)' }}>🎓</span> Education
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {education.map((edu, i) => (
                  <div key={i} style={{ padding: '20px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                      <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem' }}>{edu.degree}</h4>
                      <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 500, background: 'rgba(99,102,241,0.1)', padding: '2px 10px', borderRadius: '999px' }}>{edu.period}</span>
                    </div>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>{edu.school}</p>
                    <p style={{ color: 'var(--accent)', fontSize: '0.8rem', marginTop: '6px' }}>{edu.gpa}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent)' }}>☁️</span> Certifications
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', id: '5699481c96934d21870503ff80bac4aa', expiry: 'Issued Aug 2025 · Expires Aug 2028' },
                  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', id: 'd2b8ecd3ad44469e8a467d625e986494', expiry: 'Issued Apr 2026 · Expires Apr 2028' },
                ].map((cert) => (
                  <div key={cert.id} style={{ padding: '20px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>{cert.name}</h4>
                    <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{cert.issuer}</p>
                    {cert.expiry && <p style={{ color: 'var(--accent)', fontSize: '0.75rem', marginTop: '4px' }}>{cert.expiry}</p>}
                    <p style={{ color: 'var(--border)', fontSize: '0.7rem', marginTop: '4px', wordBreak: 'break-all' }}>ID: {cert.id}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication */}
            <div>
              <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent)' }}>📄</span> Publication
              </h3>
              <div style={{ padding: '20px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '6px' }}>Gen AI Research — SRGAN</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                  Authored a paper on the use of Super Resolution Generative Adversarial Networks (SRGAN)
                  for planetary image improvisation (2020).
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
