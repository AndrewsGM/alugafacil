// Aluga Fácil - MongoDB Init Script
// Cria databases e collections para serviços que usam MongoDB

// Database para Compliance Service
db = db.getSiblingDB('alugafacil_compliance');
db.createCollection('vehicle_checks');
db.createCollection('compliance_history');

// Índices para performance
db.vehicle_checks.createIndex({ vehicle_id: 1 });
db.vehicle_checks.createIndex({ plate: 1 });
db.vehicle_checks.createIndex({ last_verified: -1 });
db.compliance_history.createIndex({ vehicle_id: 1, timestamp: -1 });

// Database para Audit Service
db = db.getSiblingDB('alugafacil_audit');
db.createCollection('audit_logs');

// Índices para auditoria
db.audit_logs.createIndex({ user_id: 1, timestamp: -1 });
db.audit_logs.createIndex({ action: 1 });
db.audit_logs.createIndex({ resource: 1 });
db.audit_logs.createIndex({ timestamp: -1 });

print('MongoDB initialized successfully!');
