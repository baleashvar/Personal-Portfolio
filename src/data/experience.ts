import type { Experience, Education } from '../types'

export const experiences: Experience[] = [
  {
    title: 'Cloud DevOps & Reliability Engineer — AI-Driven Operations',
    company: 'Tata Consultancy Services',
    client: 'British Airways',
    period: 'Sep 2023 – Present',
    points: [
      'Mission-Critical Incident Management: Owned L3 operational support, ticket lifecycle management, and incident triage for core aviation services, maintaining >99.95% availability across enterprise SLAs',
      'Incident Bridge Leadership & MTTR Reduction: Served as technical incident bridge responder during high-severity P1/P2 outages; leveraged Datadog APM and CloudWatch logs to rapidly locate bottlenecks and reduce MTTR',
      'Proactive APM & Anomaly Detection: Configured Datadog ML anomaly detection and metric threshold monitors across microservices and message queues, identifying latent resource contention and memory leaks prior to end-user degradation',
      'Cloud Security & Vulnerability Remediation: Handled security patch management and vulnerability remediation across cloud compute and container environments; hardened IAM roles under formal Change Management controls',
      'Runbook & Operational Automation: Engineered custom Python (Boto3) and Bash utilities to automate operational procedures, diagnostic log dumps, and health checks, cutting manual intervention overhead',
      'Infrastructure as Code & CI/CD: Implemented cloud configuration updates and vulnerability fixes across AWS environments using modular Terraform and GitHub Actions pipelines in compliance with CAB protocols',
      'ITIL Problem Management & RCA: Spearheaded post-incident reviews, root cause analysis, and operational risk assessments',
      'AI-Assisted Development: Used Amazon Q, Claude, and Gemini to streamline daily engineering tasks and accelerate development workflows',
      'Built AI-assisted workflows using LangChain, LlamaIndex, and pgvector for vector search and RAG pipelines',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering — Electronics & Communication Engineering',
    school: 'Meenakshi Sundararajan Engineering College, Anna University, Chennai',
    period: '2018 – 2022',
    gpa: 'CGPA: 8.26 / 10.0',
  },
]
