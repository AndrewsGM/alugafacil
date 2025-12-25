# Aluga Fácil - Plataforma de Mobilidade como Serviço

[![CI/CD](https://github.com/aluga-facil/aluga-facil/workflows/CI/badge.svg)](https://github.com/aluga-facil/aluga-facil/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Plataforma de locação peer-to-peer de veículos com diferencial em compliance e confiabilidade.

## 🚀 Quick Start

### Pré-requisitos

- Node.js 20+ LTS
- Docker & Docker Compose
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/aluga-facil/aluga-facil.git
cd aluga-facil

# Instale as dependências
npm install

# Suba o ambiente local com Docker
docker-compose up -d

# Execute as migrations
npm run db:migrate

# Popule com dados de teste
npm run db:seed

# Inicie o desenvolvimento
npm run dev
```

Acesse:
- **Frontend Web**: http://localhost:3000
- **API Gateway**: http://localhost:8080
- **Storybook**: http://localhost:6006

## 📁 Estrutura do Projeto

```
aluga-facil/
├── apps/
│   ├── web/                    # Frontend Web (Next.js)
│   ├── mobile/                 # Mobile App (React Native)
│   └── admin/                  # Admin Panel (Next.js)
│
├── services/                   # Microsserviços Backend
│   ├── identity/               # Autenticação e Autorização
│   ├── user-profile/           # Perfis de Usuário
│   ├── vehicle/                # Gestão de Veículos
│   ├── compliance/             # Validação Veicular
│   ├── search/                 # Busca Geoespacial
│   ├── rental/                 # Sistema de Locação
│   ├── media/                  # Upload de Mídias
│   ├── notification/           # Notificações
│   ├── subscription/           # Planos e Assinaturas
│   └── audit/                  # Logs e Auditoria
│
├── packages/                   # Código Compartilhado
│   ├── ui/                     # Design System
│   ├── types/                  # TypeScript Types
│   ├── utils/                  # Utilitários
│   ├── validators/             # Validações (Zod schemas)
│   └── config/                 # Configurações compartilhadas
│
├── infra/                      # Infraestrutura
│   ├── docker/                 # Dockerfiles
│   ├── k8s/                    # Kubernetes manifests
│   ├── terraform/              # Infra as Code
│   └── helm/                   # Helm charts
│
├── docs/                       # Documentação
│   ├── architecture/           # Diagramas C4, ADRs
│   ├── api/                    # OpenAPI specs
│   └── guides/                 # Guias de desenvolvimento
│
├── .github/                    # GitHub workflows
├── docker-compose.yml          # Ambiente local
├── package.json                # Root package
├── turbo.json                  # Turborepo config
└── README.md                   # Este arquivo
```

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **UI**: Tailwind CSS, Radix UI, ShadCN/UI
- **Animações**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Maps**: Mapbox GL JS
- **State**: Zustand + React Query

### Backend
- **Framework**: NestJS
- **Linguagem**: TypeScript
- **Comunicação**: REST + gRPC + WebSockets
- **Event Bus**: NATS

### Bancos de Dados
- **Relacional**: PostgreSQL
- **NoSQL**: MongoDB
- **Cache**: Redis
- **Search**: OpenSearch
- **Storage**: MinIO (S3-compatible)

### DevOps
- **Containers**: Docker
- **Orquestração**: Kubernetes
- **CI/CD**: GitHub Actions
- **IaC**: Terraform
- **Charts**: Helm

## 🏗️ Arquitetura

Seguimos uma arquitetura de **Microservices + Event-Driven**, com:

- **Domain-Driven Design (DDD)**
- **API-First**
- **Database per Service**
- **Cloud-Native**

Veja mais detalhes em [`BLUEPRINT_ALUGA_FACIL.md`](./BLUEPRINT_ALUGA_FACIL.md)

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia todos os serviços em modo dev
npm run dev:web          # Apenas frontend web
npm run dev:api          # Apenas serviços de backend

# Build
npm run build            # Build de todos os projetos
npm run build:web        # Build do frontend web
npm run build:services   # Build dos microsserviços

# Testes
npm run test             # Testes unitários
npm run test:e2e         # Testes end-to-end
npm run test:coverage    # Coverage report

# Linting
npm run lint             # Lint de todos os projetos
npm run lint:fix         # Lint + auto-fix
npm run format           # Format com Prettier

# Database
npm run db:migrate       # Roda migrations
npm run db:seed          # Popula com dados de teste
npm run db:reset         # Reset completo

# Docker
npm run docker:up        # Sobe containers
npm run docker:down      # Para containers
npm run docker:logs      # Logs dos containers

# Storybook
npm run storybook        # Inicia Storybook
npm run build:storybook  # Build do Storybook
```

## 🔐 Variáveis de Ambiente

Copie o `.env.example` para `.env` e configure:

```bash
cp .env.example .env
```

As principais variáveis:
- `DATABASE_URL`: Conexão com PostgreSQL
- `MONGODB_URI`: Conexão com MongoDB
- `REDIS_URL`: Conexão com Redis
- `JWT_SECRET`: Secret para tokens JWT
- `MAPBOX_TOKEN`: Token do Mapbox
- `AWS_ACCESS_KEY_ID`: Credenciais S3/MinIO

## 🧪 Testes

```bash
# Unitários
npm run test

# E2E
npm run test:e2e

# Específico
npm run test:web
npm run test:identity-service
```

## 📚 Documentação

- [Blueprint Arquitetural](./BLUEPRINT_ALUGA_FACIL.md)
- [Product Backlog](./PRODUCT_BACKLOG.md)
- [API Documentation](./docs/api/openapi.yaml)
- [Guia de Contribuição](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para mais detalhes.

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](./LICENSE) para mais informações.

## 👥 Time

- **Product Owner**: [Nome]
- **Tech Lead**: [Nome]
- **Developers**: [Time]

## 🙏 Agradecimentos

- Comunidade Next.js
- Comunidade NestJS
- Todos os contribuidores

---

**Made with ❤️ by Aluga Fácil Team**
# alugafacil
# alugafacil
