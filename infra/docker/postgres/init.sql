-- Aluga Fácil - PostgreSQL Init Script
-- Cria databases para cada microsserviço

-- Database para Identity Service
CREATE DATABASE alugafacil_identity;

-- Database para User Profile Service
CREATE DATABASE alugafacil_user_profile;

-- Database para Vehicle Service
CREATE DATABASE alugafacil_vehicle;

-- Database para Rental Service
CREATE DATABASE alugafacil_rental;

-- Database para Subscription Service
CREATE DATABASE alugafacil_subscription;

-- Criar extensões necessárias
\c alugafacil_identity;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

\c alugafacil_user_profile;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "postgis"; -- Para geolocalização

\c alugafacil_vehicle;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

\c alugafacil_rental;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

\c alugafacil_subscription;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Voltar para database padrão
\c alugafacil;
