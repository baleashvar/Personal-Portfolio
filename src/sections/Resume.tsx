import { experiences, education } from '../data/experience'
import BA_logo from '../assets/BA_logo.png'

const competencies = [
  {
    label: 'Cloud & Infrastructure',
    value: 'AWS (Lambda, ECS, EKS, DynamoDB, S3, IAM, CloudWatch), Docker, Kubernetes, CI/CD, Linux/Bash',
  },
  {
    label: 'Streaming & Data Engineering',
    value: 'Apache Kafka, DynamoDB, PostgreSQL, MySQL',
  },
  {
    label: 'Programming & Frameworks',
    value: 'Python (FastAPI, Boto3), Node.js, Express.js, TypeScript/JavaScript, React.js',
  },
  {
    label: 'AI & Machine Learning',
    value: 'LLM Agents, Prompt Engineering, Semantic Caching, SRGAN, TensorFlow, LangChain, LlamaIndex',
  },
  {
    label: 'Reliability & Operations',
    value: 'Incident Response, RCA, Performance Tuning, Distributed Tracing, Postman, pytest',
  },
]

const technicalProjects = [
  {
    title: 'Semantic Cache for LLMs',
    subtitle: 'Python, sentence-transformers, FAISS',
    link: 'https://github.com/baleashvar/semantic-cache-llm',
    points: [
      'Developed an open-source semantic caching layer for LLMs to detect redundant queries and eliminate unnecessary API round-trips',
      'Implemented local embedding generation (all-MiniLM-L6-v2) and cosine similarity thresholds, reducing API inference latency and token consumption by up to 40%',
    ],
  },
  {
    title: 'JSONLab',
    subtitle: 'React, TypeScript, Cloudflare/Vercel — jsonlab.xyz',
    link: 'https://jsonlab.xyz',
    points: [
      'Designed and deployed a browser-based developer utility platform for rapid formatting, schema validation, and conversion of high-volume JSON payloads',
    ],
  },
]

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

        {/* Summary */}
        <div style={{ padding: '20px 24px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '40px' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>
            Cloud DevOps, Reliability, and Software Engineer with 3+ years of experience engineering scalable cloud infrastructure,
            real-time streaming architectures, and developer tooling across the aviation domain. Proven track record in slashing data
            latency by 99%, optimizing cloud compute costs, and automating mission-critical workflows using AWS, Python, and Kafka.
            Deep practical expertise in LLM agent orchestration, prompt engineering, MCP, and semantic caching layers.
          </p>
        </div>

        {/* Core Competencies */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent)' }}>⚙️</span> Core Competencies
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {competencies.map((c) => (
              <div key={c.label} style={{ display: 'flex', gap: '12px', padding: '12px 16px', borderRadius: '8px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', minWidth: '200px', flexShrink: 0 }}>{c.label}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>{c.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>

          {/* Experience */}
          <div>
            <h3 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>⚡</span> Experience
            </h3>
            {experiences.map((exp, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} />
                </div>
                <div style={{ paddingBottom: '32px', flex: 1 }}>
                  <div style={{ padding: '20px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {exp.client === 'British Airways' && (
                          <img src={BA_logo} alt="British Airways" style={{ height: '24px', objectFit: 'contain' }} />
                        )}
                        <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem' }}>{exp.title}</h4>
                      </div>
                      <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 500, background: 'rgba(99,102,241,0.1)', padding: '2px 10px', borderRadius: '999px' }}>{exp.period}</span>
                    </div>
                    <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '12px' }}>
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

            {/* Technical Projects */}
            <h3 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>🛠️</span> Technical Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {technicalProjects.map((proj) => (
                <div key={proj.title} style={{ padding: '20px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem' }}>{proj.title}</h4>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontSize: '0.75rem', textDecoration: 'none' }}>↗</a>
                    )}
                  </div>
                  <p style={{ color: 'var(--accent)', fontSize: '0.75rem', marginBottom: '10px' }}>{proj.subtitle}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', listStyle: 'none', padding: 0 }}>
                    {proj.points.map((point, i) => (
                      <li key={i} style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6, display: 'flex', gap: '8px' }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0 }}>›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Education */}
            <div>
              <h3 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent)' }}>🎓</span> Education
              </h3>
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

            {/* Certifications */}
            <div>
              <h3 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent)' }}>☁️</span> Certifications
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', id: '5699481c96934d21870503ff80bac4aa', expiry: 'Issued Aug 2025 · Expires Aug 2028' },
                  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', id: 'd2b8ecd3ad44469e8a467d625e986494', expiry: 'Issued Apr 2026 · Expires Apr 2028' },
                ].map((cert) => (
                  <a key={cert.id} href={`https://cp.certmetrics.com/amazon/en/public/verify/credential/${cert.id}`} target="_blank" rel="noreferrer"
                    style={{ padding: '16px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none', display: 'block' }}>
                    <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '4px' }}>{cert.name}</h4>
                    <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{cert.issuer}</p>
                    <p style={{ color: 'var(--accent)', fontSize: '0.75rem', marginTop: '4px' }}>{cert.expiry}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Publication */}
            <div>
              <h3 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent)' }}>📄</span> Publication
              </h3>
              <div style={{ padding: '20px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '6px' }}>
                  Planetary Image Improvisation Using SRGAN
                </h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                  TensorFlow-based image enhancement for deep-space astronomy imagery using Super-Resolution Generative Adversarial Networks (2020).
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
