import type { Experience, Education } from '../types'

export const experiences: Experience[] = [
  {
    title: 'DevOps Engineer - 1',
    company: 'Tata Consultancy Services',
    client: 'British Airways',
    period: 'Sept 2023 – Present',
    points: [
      'Vibe coded using Amazon Q to streamline daily engineering tasks and accelerate development workflows',
      'Monitored CloudWatch logs, ECS logs, EventBridge logs, Datadog logs and incidents in SNOW on a day-to-day basis',
      'Optimized cloud costs by redesigning Python data transformation scripts to run on AWS Lambda, reducing infrastructure costs by 20%',
      'Implemented CloudWatch log monitoring and alerting to proactively detect ingestion failures and latency spikes',
      'Automated AWS provisioning with Terraform reusable modules, ensuring compliance and scalability',
      'Implemented GitHub Actions for containerized deployments to dev/tst/uat/stg/prd environments, vulnerability remediation and secret key rotation',
      'Built and deployed Docker images to ECS Fargate, enabling serverless compute scalability',
      'Part of migrating 3 critical British Airways applications from on-prem to cloud after 30 years of operation',
      'Integrated IBM MQ queues with airline applications to guarantee secure, ordered message delivery (CAML Queue → Kafka topics through Fargate)',
      'Created and optimized Kafka topics on MSK for high-throughput event streams with partitioning and consumer group strategies',
      'Worked on CAML integration layer to standardize communication between legacy mainframe systems and modern cloud services',
      'Configured AWS API Gateway endpoints to expose microservices securely with throttling, authentication, and monitoring policies',
      'Automated customer notifications using AWS SES and implemented SQS queues for decoupled microservice communication',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering — Electronics & Communication Engineering',
    school: 'Meenakshi Sundararajan Engineering College, Chennai',
    period: '2018 – 2022',
    gpa: '8.26 CGPA',
  },
]
