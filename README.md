# Stock-O-Rama v2

A modern stock management application built with a monorepo architecture.

## Architecture

This project is structured as a monorepo containing:

- **Frontend** (`apps/frontend`): React + TypeScript + Vite
- **Backend** (`apps/backend`): NestJS + TypeScript + Node.js

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

This will install dependencies for all packages in the monorepo.

### 2. Development

To run both frontend and backend in development mode:

```bash
npm run dev
```

Or run them individually:

```bash
# Backend only (runs on http://localhost:3000)
npm run dev:backend

# Frontend only (runs on http://localhost:5173)
npm run dev:frontend
```

### 3. Building

Build all packages:

```bash
npm run build
```

Or build individually:

```bash
npm run build:backend
npm run build:frontend
```

### 4. Testing

Run tests for all packages:

```bash
npm run test
```

Or test individually:

```bash
npm run test:backend
npm run test:frontend
```

## Project Structure

```
stockorama2/
├── apps/
│   ├── backend/          # NestJS API
│   │   ├── src/
│   │   ├── test/
│   │   └── package.json
│   └── frontend/         # React + Vite app
│       ├── src/
│       ├── public/
│       └── package.json
├── package.json          # Root package.json with workspace config
└── README.md
```

## Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build all packages
- `npm run test` - Run tests for all packages
- `npm run lint` - Lint all packages

### Backend (`apps/backend`)
- `npm run start:dev` - Start backend in development mode
- `npm run start:prod` - Start backend in production mode
- `npm run build` - Build backend
- `npm run test` - Run backend tests
- `npm run lint` - Lint backend code

### Frontend (`apps/frontend`)
- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint frontend code

## Technology Stack

### Backend
- NestJS - Progressive Node.js framework
- TypeScript - Typed JavaScript
- Express - Web framework
- Jest - Testing framework

### Frontend
- React 19 - User interface library
- TypeScript - Typed JavaScript
- Vite - Build tool and development server
- ESLint - Code linting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
