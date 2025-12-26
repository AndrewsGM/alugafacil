# 📋 Product Backlog - Aluga Fácil
## Plataforma de Mobilidade como Serviço

> **Product Owner**: Sistema Aluga Fácil  
> **Última Atualização**: 25/12/2024  
> **Metodologia**: Scrum / Agile  
> **Duração do Sprint**: 2 semanas

---

## 📊 Visão Geral do Produto

**Visão**: Ser a plataforma mais confiável de locação peer-to-peer de veículos no Brasil, com diferencial em compliance e segurança.

**Objetivo do MVP**: Permitir que usuários cadastrem veículos e realizem locações com validação de conformidade veicular.

**Métricas de Sucesso (OKRs)**:
- 1.000 usuários registrados em 3 meses
- 500 veículos cadastrados
- 100 locações completadas
- NPS > 50
- Uptime > 99.5%

---

## 🎯 Épicos e User Stories

### ÉPICO 1: Fundação Técnica e DevOps
**Prioridade**: CRÍTICA  
**Estimativa**: 2 Sprints (4 semanas)

#### 📌 US-001: Estrutura de Monorepo
**Como** desenvolvedor  
**Quero** ter um monorepo configurado com todos os serviços  
**Para que** possamos desenvolver de forma organizada e escalável

**Critérios de Aceitação**:
- [ ] Monorepo criado com estrutura clara de pastas
- [ ] Package.json configurado para workspaces
- [ ] Scripts de desenvolvimento funcionando
- [ ] README com instruções de setup

**Tasks Técnicas**:
- [ ] Criar estrutura de pastas raiz
- [ ] Configurar workspaces (npm/yarn/pnpm)
- [ ] Criar scripts de build e dev
- [ ] Documentar estrutura no README.md

**Estimativa**: 3 pontos  
**Sprint**: 1

---

#### 📌 US-002: Ambiente Docker Local
**Como** desenvolvedor  
**Quero** subir todo o ambiente com um único comando  
**Para que** possa começar a desenvolver rapidamente

**Critérios de Aceitação**:
- [ ] Docker Compose configurado com todos os serviços
- [ ] Bancos de dados (PostgreSQL, MongoDB, Redis) rodando
- [ ] Health checks funcionando
- [ ] Volumes para persistência de dados
- [ ] Setup completo em < 10 minutos

**Tasks Técnicas**:
- [ ] Criar docker-compose.yml na raiz
- [ ] Configurar PostgreSQL com init scripts
- [ ] Configurar MongoDB
- [ ] Configurar Redis
- [ ] Configurar MinIO (S3 local)
- [ ] Criar scripts de seed de dados
- [ ] Adicionar health checks

**Estimativa**: 5 pontos  
**Sprint**: 1

---

#### 📌 US-003: CI/CD Pipeline
**Como** desenvolvedor  
**Quero** ter CI/CD automatizado  
**Para que** meu código seja testado e deployado automaticamente

**Critérios de Aceitação**:
- [ ] GitHub Actions configurado
- [ ] Pipeline de lint funcionando
- [ ] Pipeline de testes funcionando
- [ ] Build de Docker images
- [ ] Deploy automático em dev

**Tasks Técnicas**:
- [ ] Criar .github/workflows/ci.yml
- [ ] Configurar ESLint + Prettier
- [ ] Configurar testes unitários
- [ ] Configurar build de images
- [ ] Setup de secrets no GitHub

**Estimativa**: 5 pontos  
**Sprint**: 1

---

### ÉPICO 2: Design System e Frontend Base
**Prioridade**: ALTA  
**Estimativa**: 2 Sprints

#### 📌 US-004: Design System
**Como** designer/desenvolvedor  
**Quero** ter um design system completo  
**Para que** mantenhamos consistência visual em toda aplicação

**Critérios de Aceitação**:
- [ ] Tokens de design definidos (cores, tipografia, espaçamentos)
- [ ] Componentes atômicos criados (Button, Input, Badge, etc)
- [ ] Componentes moleculares criados (FormField, Card, etc)
- [ ] Storybook funcionando com todos componentes
- [ ] Tema claro/escuro implementado
- [ ] Responsividade mobile-first

**Tasks Técnicas**:
- [ ] Configurar Next.js com App Router
- [ ] Instalar Tailwind CSS + configurar tema
- [ ] Instalar Radix UI + ShadCN/UI
- [ ] Criar design tokens (tailwind.config.js)
- [ ] Criar componentes atômicos
- [ ] Criar componentes moleculares
- [ ] Configurar Storybook
- [ ] Criar documentação de componentes

**Estimativa**: 8 pontos  
**Sprint**: 1-2

---

#### 📌 US-005: Layout e Navegação
**Como** usuário  
**Quero** navegar facilmente pela plataforma  
**Para que** possa encontrar o que preciso rapidamente

**Critérios de Aceitação**:
- [ ] Header com logo e menu de navegação
- [ ] Footer com links importantes
- [ ] Menu responsivo (mobile hamburger)
- [ ] Navegação entre páginas funcionando
- [ ] Loading states em transições

**Tasks Técnicas**:
- [ ] Criar componente Header
- [ ] Criar componente Footer
- [ ] Criar componente Navigation
- [ ] Implementar menu mobile
- [ ] Configurar rotas do Next.js
- [ ] Adicionar animações de transição (Framer Motion)

**Estimativa**: 5 pontos  
**Sprint**: 2

---

### ÉPICO 3: Autenticação e Autorização
**Prioridade**: CRÍTICA  
**Estimativa**: 2 Sprints

#### 📌 US-006: Cadastro de Usuário
**Como** novo usuário  
**Quero** me cadastrar na plataforma  
**Para que** possa acessar os serviços

**Critérios de Aceitação**:
- [ ] Formulário de cadastro com validação
- [ ] Campos: nome completo, email, senha, CPF, telefone
- [ ] Validação de CPF
- [ ] Validação de email único
- [ ] Senha forte (mínimo 8 caracteres, maiúscula, minúscula, número)
- [ ] Confirmação de senha
- [ ] Termos de uso e política de privacidade (checkbox)
- [ ] Feedback de erros claros
- [ ] Sucesso redireciona para completar perfil

**Tasks Técnicas - Frontend**:
- [ ] Criar página /register
- [ ] Criar formulário com React Hook Form
- [ ] Adicionar validação com Zod
- [ ] Validador de CPF customizado
- [ ] UI de feedback (toast/alert)
- [ ] Integração com API de registro

**Tasks Técnicas - Backend**:
- [ ] Criar Identity Service (NestJS)
- [ ] Configurar PostgreSQL para users
- [ ] Implementar POST /auth/register
- [ ] Hash de senha com bcrypt/argon2
- [ ] Validação de email único
- [ ] Validação de CPF
- [ ] Geração de JWT
- [ ] Testes unitários

**Estimativa**: 8 pontos  
**Sprint**: 2

---

#### 📌 US-007: Login de Usuário
**Como** usuário cadastrado  
**Quero** fazer login na plataforma  
**Para que** possa acessar minha conta

**Critérios de Aceitação**:
- [ ] Formulário de login (email + senha)
- [ ] Validação de campos
- [ ] Feedback de erro claro
- [ ] "Esqueci minha senha" (link)
- [ ] "Lembrar-me" (checkbox)
- [ ] Redirecionar para dashboard após login
- [ ] Token armazenado de forma segura

**Tasks Técnicas - Frontend**:
- [ ] Criar página /login
- [ ] Criar formulário de login
- [ ] Implementar autenticação
- [ ] Armazenar token (httpOnly cookie ou localStorage)
- [ ] Criar contexto de autenticação
- [ ] Protected routes

**Tasks Técnicas - Backend**:
- [ ] Implementar POST /auth/login
- [ ] Validar credenciais
- [ ] Gerar access token (15min)
- [ ] Gerar refresh token (7 dias)
- [ ] Armazenar refresh token no Redis
- [ ] Testes unitários

**Estimativa**: 5 pontos  
**Sprint**: 2

---

#### 📌 US-008: Perfil de Usuário
**Como** usuário logado  
**Quero** completar meu perfil  
**Para que** possa usar todos os recursos da plataforma

**Critérios de Aceitação**:
- [ ] Upload de foto de perfil
- [ ] Preview da foto antes de salvar
- [ ] Campos: data de nascimento, endereço completo
- [ ] Busca automática de endereço por CEP
- [ ] Campo de complemento (até 500 caracteres)
- [ ] Checkbox "Sou motorista"
- [ ] Se motorista: upload de CNH obrigatório
- [ ] Validação de todos os campos
- [ ] Salvar e mostrar sucesso

**Tasks Técnicas - Frontend**:
- [ ] Criar página /profile/complete
- [ ] Componente de upload de foto
- [ ] Integração com ViaCEP
- [ ] Formulário de endereço
- [ ] Upload de CNH (se motorista)
- [ ] Validações

**Tasks Técnicas - Backend**:
- [ ] Criar User Profile Service
- [ ] Implementar POST/PUT /profiles
- [ ] Implementar POST /profiles/documents/cnh
- [ ] Integração com ViaCEP
- [ ] Validação de CNH (formato)
- [ ] Media Service para upload de fotos
- [ ] Armazenamento no S3/MinIO
- [ ] Testes

**Estimativa**: 13 pontos  
**Sprint**: 3

---

### ÉPICO 4: Gestão de Veículos
**Prioridade**: CRÍTICA  
**Estimativa**: 3 Sprints

#### 📌 US-009: Cadastro de Veículo
**Como** proprietário  
**Quero** cadastrar meu veículo  
**Para que** outros usuários possam alugá-lo

**Critérios de Aceitação**:
- [ ] Formulário multi-step
- [ ] Step 1: Dados básicos (marca, modelo, ano, portas)
- [ ] Step 2: Placa (validação Mercosul) e Chassi
- [ ] Step 3: Tipo de combustível
- [ ] Step 4: Upload de fotos (ilimitado)
- [ ] Preview das fotos
- [ ] Reordenação de fotos (drag & drop)
- [ ] Valor da diária
- [ ] Validação automática de placa/chassi
- [ ] Feedback se veículo aprovado ou bloqueado
- [ ] Plano gratuito: máximo 3 veículos

**Tasks Técnicas - Frontend**:
- [ ] Criar página /vehicles/new
- [ ] Formulário multi-step
- [ ] Validação de placa Mercosul (AAA0A00)
- [ ] Upload múltiplo de fotos
- [ ] Preview e reordenação
- [ ] Integração com API de cadastro
- [ ] Feedback de compliance

**Tasks Técnicas - Backend**:
- [ ] Criar Vehicle Management Service
- [ ] Implementar POST /vehicles
- [ ] Validação de placa (regex Mercosul)
- [ ] Validação de chassi (17 caracteres)
- [ ] Verificar limite de veículos por plano
- [ ] Implementar POST /vehicles/:id/images
- [ ] Processamento de imagens (resize, compress)
- [ ] Integração com Compliance Service
- [ ] Testes

**Estimativa**: 13 pontos  
**Sprint**: 3-4

---

#### 📌 US-010: Validação de Conformidade Veicular
**Como** plataforma  
**Quero** validar automaticamente os veículos cadastrados  
**Para que** garantamos confiabilidade aos locatários

**Critérios de Aceitação**:
- [ ] Consulta automática ao cadastrar veículo
- [ ] Validação de placa (mock Detran)
- [ ] Validação de chassi
- [ ] Verificação de roubo/furto (mock Sinesp)
- [ ] Cálculo de compliance score
- [ ] Score >= 70: veículo aprovado
- [ ] Score < 70: veículo bloqueado
- [ ] Histórico de validações visível ao proprietário
- [ ] Re-validação a cada 30 dias

**Tasks Técnicas - Backend**:
- [ ] Criar Vehicle Compliance Service
- [ ] Implementar POST /compliance/verify-plate
- [ ] Implementar POST /compliance/verify-chassis
- [ ] Mock de API do Detran
- [ ] Mock de API do Sinesp
- [ ] Adapter pattern para integrações
- [ ] Algoritmo de compliance score
- [ ] Armazenar histórico no MongoDB
- [ ] Cache no Redis (24h)
- [ ] Event: vehicle.compliance.checked
- [ ] Testes

**Estimativa**: 13 pontos  
**Sprint**: 4

---

#### 📌 US-011: Listagem de Meus Veículos
**Como** proprietário  
**Quero** ver todos os meus veículos cadastrados  
**Para que** possa gerenciá-los

**Critérios de Aceitação**:
- [ ] Lista de veículos do proprietário
- [ ] Card com foto, modelo, placa
- [ ] Status: disponível, locado, em manutenção, bloqueado
- [ ] Ações: editar, desativar, ver detalhes
- [ ] Filtros: status, ordenação
- [ ] Loading states
- [ ] Empty state (nenhum veículo)

**Tasks Técnicas - Frontend**:
- [ ] Criar página /dashboard/vehicles
- [ ] Componente VehicleCard
- [ ] Lista com filtros
- [ ] Integração com API

**Tasks Técnicas - Backend**:
- [ ] Implementar GET /vehicles/owner/:userId
- [ ] Filtros e ordenação
- [ ] Paginação
- [ ] Testes

**Estimativa**: 5 pontos  
**Sprint**: 4

---

### ÉPICO 5: Busca e Geolocalização
**Prioridade**: ALTA  
**Estimativa**: 2 Sprints

#### 📌 US-012: Busca de Veículos por Proximidade
**Como** usuário  
**Quero** buscar veículos próximos à minha localização  
**Para que** possa alugar facilmente

**Critérios de Aceitação**:
- [ ] Solicitar permissão de geolocalização
- [ ] Fallback para CEP se geolocalização negada
- [ ] Busca em tempo real
- [ ] Filtros: raio (5, 10, 20, 50 km)
- [ ] Filtros: preço (min-max)
- [ ] Filtros: marca, modelo, combustível, portas
- [ ] Ordenação: distância, preço, avaliação
- [ ] Resultados em grid/lista
- [ ] Mapa com pins dos veículos
- [ ] Loading skeleton

**Tasks Técnicas - Frontend**:
- [ ] Criar página / (home com busca)
- [ ] Implementar geolocalização (Mapbox)
- [ ] Formulário de busca com filtros
- [ ] Grid de resultados (VehicleCard)
- [ ] Mapa interativo
- [ ] Integração com Search API

**Tasks Técnicas - Backend**:
- [ ] Criar Location & Geo Search Service
- [ ] Configurar OpenSearch/Elasticsearch
- [ ] Indexação de veículos (geo_point)
- [ ] Implementar POST /search/vehicles
- [ ] Query geoespacial (within radius)
- [ ] Aplicar filtros
- [ ] Algoritmo de scoring (distância + preço + rating)
- [ ] Cache no Redis
- [ ] Testes

**Estimativa**: 13 pontos  
**Sprint**: 5-6

---

#### 📌 US-013: Detalhes do Veículo
**Como** usuário  
**Quero** ver detalhes completos do veículo  
**Para que** possa decidir se quero alugá-lo

**Critérios de Aceitação**:
- [ ] Carrossel de fotos (auto-rotate a cada 2s)
- [ ] Controles manuais do carrossel
- [ ] Informações: marca, modelo, ano, placa
- [ ] Especificações: portas, combustível, km
- [ ] Valor da diária
- [ ] Localização (mapa)
- [ ] Distância do usuário
- [ ] Avaliações (futuro)
- [ ] Perfil do proprietário (nome, foto, avaliação)
- [ ] Botão "Alugar" (se disponível)
- [ ] Calendário de disponibilidade

**Tasks Técnicas - Frontend**:
- [ ] Criar página /vehicles/:id
- [ ] Carrossel de imagens (Embla Carousel)
- [ ] Layout de detalhes
- [ ] Mapa com pin do veículo
- [ ] Calendário de disponibilidade
- [ ] Botão de ação
- [ ] Integração com API

**Tasks Técnicas - Backend**:
- [ ] Implementar GET /vehicles/:id
- [ ] Enrich data (owner, location, availability)
- [ ] Testes

**Estimativa**: 8 pontos  
**Sprint**: 6

---

### ÉPICO 6: Sistema de Locação
**Prioridade**: CRÍTICA  
**Estimativa**: 3 Sprints

#### 📌 US-014: Verificar Disponibilidade
**Como** usuário  
**Quero** verificar se um veículo está disponível nas datas desejadas  
**Para que** possa planejar minha locação

**Critérios de Aceitação**:
- [ ] Calendário interativo
- [ ] Datas bloqueadas visíveis
- [ ] Seleção de data inicial e final
- [ ] Cálculo automático de dias e valor total
- [ ] Feedback em tempo real
- [ ] Mínimo 1 dia de locação

**Tasks Técnicas - Frontend**:
- [ ] Date picker range
- [ ] Integração com API de disponibilidade
- [ ] Cálculo de preço
- [ ] Validações de datas

**Tasks Técnicas - Backend**:
- [ ] Criar Rental & Availability Service
- [ ] Implementar POST /rentals/check-availability
- [ ] Verificar conflitos de datas
- [ ] Calcular preço (considerar descontos por período)
- [ ] Testes

**Estimativa**: 8 pontos  
**Sprint**: 7

---

#### 📌 US-015: Criar Locação
**Como** usuário  
**Quero** criar uma locação  
**Para que** possa alugar o veículo

**Critérios de Aceitação**:
- [ ] Verificação de CNH válida
- [ ] Verificação de idade >= 21 anos
- [ ] Resumo da locação (veículo, datas, preço)
- [ ] Termos de locação (checkbox)
- [ ] Criar locação com status "pendente"
- [ ] Enviar notificação ao proprietário
- [ ] Enviar confirmação ao locatário
- [ ] Redirecionar para pagamento (futuro - mock por enquanto)

**Tasks Técnicas - Frontend**:
- [ ] Criar página /rentals/checkout
- [ ] Resumo da locação
- [ ] Termos e condições
- [ ] Botão de confirmação
- [ ] Integração com API

**Tasks Técnicas - Backend**:
- [ ] Implementar POST /rentals/create
- [ ] Validações (CNH, idade, disponibilidade)
- [ ] Criar rental (status: pending)
- [ ] Bloquear datas no calendário
- [ ] Emitir evento: rental.created
- [ ] Integração com Notification Service
- [ ] Testes

**Estimativa**: 13 pontos  
**Sprint**: 7-8

---

#### 📌 US-016: Gerenciar Minhas Locações
**Como** usuário  
**Quero** ver minhas locações (como locatário e locador)  
**Para que** possa gerenciá-las

**Critérios de Aceitação**:
- [ ] Abas: "Minhas Locações" e "Meus Veículos Locados"
- [ ] Lista de locações com status
- [ ] Status: pendente, confirmado, em andamento, concluído, cancelado
- [ ] Detalhes da locação
- [ ] Ações: confirmar (proprietário), cancelar, ver detalhes
- [ ] Filtros por status

**Tasks Técnicas - Frontend**:
- [ ] Criar página /dashboard/rentals
- [ ] Tabs para locatário/locador
- [ ] Lista de locações
- [ ] Card de locação
- [ ] Ações contextuais
- [ ] Integração com API

**Tasks Técnicas - Backend**:
- [ ] Implementar GET /rentals/user/:userId
- [ ] Implementar GET /rentals/owner/:userId
- [ ] Implementar PUT /rentals/:id/status
- [ ] Validações de transição de status
- [ ] Eventos de mudança de status
- [ ] Testes

**Estimativa**: 8 pontos  
**Sprint**: 8

---

### ÉPICO 7: Sistema de Notificações
**Prioridade**: MÉDIA  
**Estimativa**: 1 Sprint

#### 📌 US-017: Notificações por Email
**Como** usuário  
**Quero** receber emails sobre eventos importantes  
**Para que** fique informado

**Critérios de Aceitação**:
- [ ] Email de boas-vindas ao cadastrar
- [ ] Email de confirmação de locação
- [ ] Email ao receber solicitação de locação
- [ ] Email de lembrete (1 dia antes da locação)
- [ ] Emails bem formatados (HTML)
- [ ] Links funcionais nos emails

**Tasks Técnicas - Backend**:
- [ ] Criar Notification Service
- [ ] Configurar SendGrid/AWS SES (mock inicial)
- [ ] Templates de email (HTML)
- [ ] Event listeners (rental.created, user.registered, etc)
- [ ] Queue com Redis
- [ ] Retry em caso de falha
- [ ] Testes

**Estimativa**: 8 pontos  
**Sprint**: 9

---

### ÉPICO 8: Sistema de Assinaturas
**Prioridade**: MÉDIA  
**Estimativa**: 2 Sprints

#### 📌 US-018: Planos de Assinatura
**Como** usuário  
**Quero** ver os planos disponíveis e fazer upgrade  
**Para que** possa acessar mais recursos

**Critérios de Aceitação**:
- [ ] Página de planos
- [ ] 3 planos: Gratuito, Premium, Elite
- [ ] Comparação de features
- [ ] Plano atual destacado
- [ ] Botão de upgrade
- [ ] Processo de upgrade (mock de pagamento)
- [ ] Liberação imediata de recursos

**Tasks Técnicas - Frontend**:
- [ ] Criar página /pricing
- [ ] Cards de planos
- [ ] Comparação de features
- [ ] Modal de confirmação
- [ ] Integração com API

**Tasks Técnicas - Backend**:
- [ ] Criar Subscription & Entitlements Service
- [ ] Implementar GET /plans
- [ ] Implementar POST /subscriptions/upgrade
- [ ] Feature flags por plano
- [ ] Validação de entitlements
- [ ] Middleware de autorização por plano
- [ ] Testes

**Estimativa**: 8 pontos  
**Sprint**: 9-10

---

### ÉPICO 9: Admin Panel
**Prioridade**: BAIXA  
**Estimativa**: 2 Sprints

#### 📌 US-019: Dashboard Administrativo
**Como** administrador  
**Quero** ter visão geral da plataforma  
**Para que** possa monitorar a saúde do negócio

**Critérios de Aceitação**:
- [ ] Métricas principais (usuários, veículos, locações, receita)
- [ ] Gráficos de crescimento
- [ ] Lista de usuários
- [ ] Lista de veículos pendentes de aprovação
- [ ] Ações administrativas

**Tasks Técnicas**:
- [ ] Criar app /admin separado
- [ ] Dashboard com métricas
- [ ] Gráficos (Recharts)
- [ ] Tabelas de dados
- [ ] APIs administrativas
- [ ] Autorização (role: admin)

**Estimativa**: 13 pontos  
**Sprint**: 11-12

---

## 📅 Roadmap de Sprints (MVP - 6 Sprints)

### Sprint 1 (Semanas 1-2): Fundação
- [ ] US-001: Estrutura de Monorepo
- [ ] US-002: Ambiente Docker Local
- [ ] US-003: CI/CD Pipeline
- [ ] US-004: Design System (início)

**Meta do Sprint**: Ambiente de desenvolvimento pronto

---

### Sprint 2 (Semanas 3-4): Autenticação
- [ ] US-004: Design System (conclusão)
- [ ] US-005: Layout e Navegação
- [ ] US-006: Cadastro de Usuário
- [ ] US-007: Login de Usuário

**Meta do Sprint**: Usuários podem se cadastrar e fazer login

---

### Sprint 3 (Semanas 5-6): Perfil e Veículos
- [ ] US-008: Perfil de Usuário
- [ ] US-009: Cadastro de Veículo (início)

**Meta do Sprint**: Perfil completo e cadastro de veículos

---

### Sprint 4 (Semanas 7-8): Compliance e Gestão
- [ ] US-009: Cadastro de Veículo (conclusão)
- [ ] US-010: Validação de Conformidade Veicular
- [ ] US-011: Listagem de Meus Veículos

**Meta do Sprint**: Veículos validados e gerenciáveis

---

### Sprint 5 (Semanas 9-10): Busca
- [ ] US-012: Busca de Veículos por Proximidade
- [ ] US-013: Detalhes do Veículo

**Meta do Sprint**: Usuários podem buscar e ver veículos

---

### Sprint 6 (Semanas 11-12): Locação
- [ ] US-014: Verificar Disponibilidade
- [ ] US-015: Criar Locação
- [ ] US-016: Gerenciar Minhas Locações
- [ ] US-017: Notificações por Email

**Meta do Sprint**: Fluxo completo de locação funcionando

---

## 🔄 Definition of Ready (DoR)

Uma User Story está pronta para desenvolvimento quando:
- [ ] Critérios de aceitação claramente definidos
- [ ] Dependências identificadas e resolvidas
- [ ] Estimativa realizada pelo time
- [ ] Design/mockups disponíveis (quando aplicável)
- [ ] Tasks técnicas decompostas

## ✅ Definition of Done (DoD)

Uma User Story está concluída quando:
- [ ] Código desenvolvido e revisado (code review)
- [ ] Testes unitários escritos (coverage > 80%)
- [ ] Testes de integração (quando aplicável)
- [ ] Documentação atualizada
- [ ] CI/CD passando
- [ ] Funcionalidade testada em ambiente de dev
- [ ] Aprovada pelo PO (critérios de aceitação)

---

## 📊 Priorização (MoSCoW)

### Must Have (MVP)
- ✅ Autenticação e Autorização
- ✅ Cadastro de Veículos
- ✅ Validação de Conformidade
- ✅ Busca Geolocalizada
- ✅ Sistema de Locação

### Should Have (Pós-MVP)
- Pagamentos reais
- Avaliações e Reviews
- Chat entre usuários
- Mobile App

### Could Have (Futuro)
- Compra/Venda de veículos
- Serviços profissionais
- Transporte aéreo

### Won't Have (Fora do escopo atual)
- Integração com seguradoras
- Marketplace de acessórios

---

## 🎯 Métricas do Time

**Velocity**: A definir após Sprint 1  
**Capacity**: 40 pontos por sprint (estimativa inicial)  
**Team**: 1 desenvolvedor full-stack (você + AI)

---

## 📝 Notas do PO

> Este backlog é um documento vivo. Será refinado continuamente com base em feedbacks, métricas e mudanças de prioridade.

**Próximos Refinamentos**:
- Após Sprint 2: Adicionar User Stories de pagamento
- Após Sprint 4: Adicionar User Stories de avaliações
- Após Sprint 6: Planejar Fase 2 (serviços premium)
