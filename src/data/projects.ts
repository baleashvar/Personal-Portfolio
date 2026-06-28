import type { Project } from '../types'

export interface ProjectGroup {
  category: string
  projects: Project[]
}

export const projectGroups: ProjectGroup[] = [
  {
    category: 'Professional — TCS / British Airways',
    projects: [
      {
        title: 'On-Prem to Cloud Migration',
        description:
          'Part of migrating 3 critical British Airways operational applications from on-prem to AWS cloud after 30 years of operation. Built data pipelines using ECS Fargate, Confluent Kafka, and IBM MQ.',
        tags: ['AWS', 'ECS Fargate', 'Kafka', 'IBM MQ', 'Python', 'Docker'],
      },
      {
        title: 'AWS Lambda Cost Optimization',
        description:
          'Redesigned Python data transformation scripts to run on AWS Lambda, reducing infrastructure costs by 20% through efficient memory management and execution time reduction.',
        tags: ['AWS Lambda', 'Python', 'CloudWatch', 'Cost Optimization'],
      },
      {
        title: 'CI/CD Pipeline with GitHub Actions',
        description:
          'Implemented GitHub Actions for containerized deployments across dev/tst/uat/stg/prd environments with vulnerability remediation on Amazon Linux AMIs and secret key rotation.',
        tags: ['GitHub Actions', 'Docker', 'Terraform', 'AWS', 'CI/CD'],
      },
    ],
  },
  {
    category: 'Web Development',
    projects: [
      {
        title: 'JSONLab — JSON Tools Suite',
        description:
          'A full-featured JSON tools suite for developers. Format, validate, diff, and transform JSON data with a clean modern interface.',
        tags: ['React', 'TypeScript', 'JSON', 'Developer Tools'],
        live: 'https://jsonlab.xyz/',
      },
      {
        title: 'Sollarity — Solana Memecoin Analysis',
        description:
          'A Solana memecoin analysis platform providing real-time insights, token analytics, and market data for the Solana ecosystem.',
        tags: ['React', 'Solana', 'Web3', 'Blockchain'],
        github: 'https://github.com/baleashvar/sollarity',
      },
      {
        title: 'Yummy Restaurant App',
        description:
          'A modern restaurant web app with menu browsing, ordering, and a clean UI experience.',
        tags: ['React', 'JavaScript', 'CSS', 'Netlify'],
        live: 'https://projectyummy.netlify.app/',
      },
    ],
  },
  {
    category: 'Node.js Projects',
    projects: [
      {
        title: 'Login Page',
        description:
          'A secure authentication login page built with Node.js featuring user registration, login, and session management.',
        tags: ['Node.js', 'Express', 'Authentication', 'JavaScript'],
        github: 'https://github.com/baleashvar/Login-Page',
      },
      {
        title: 'Payment Gateway — Stripe',
        description:
          'A fully functional payment gateway integration using Stripe API for processing secure online payments.',
        tags: ['Node.js', 'Stripe', 'Express', 'Payments'],
        github: 'https://github.com/baleashvar/Payment_gateway_stripe',
      },
    ],
  },
  {
    category: 'College Projects',
    projects: [
      {
        title: 'Super Resolution — SRGAN',
        description:
          'Research project on Super Resolution Generative Adversarial Networks (SRGAN) for planetary image improvisation. Published as a research paper (2020).',
        tags: ['Python', 'Deep Learning', 'GAN', 'Computer Vision', 'Research'],
      },
      {
        title: 'Social Distancing Sensor',
        description:
          'An IoT-based social distancing detection system using sensors to monitor and alert when safe distancing thresholds are breached.',
        tags: ['IoT', 'Python', 'Sensors', 'Hardware'],
      },
    ],
  },
  {
    category: 'Freelancing',
    projects: [
      {
        title: 'PROAEGIS — Client Website',
        description:
          'Freelance web development project for PROAEGIS. Built a professional business website for the client.',
        tags: ['Web Development', 'Freelance', 'HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
]
