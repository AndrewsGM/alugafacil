module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',     // Nova feature
                'fix',      // Bug fix
                'docs',     // Documentação
                'style',    // Formatação
                'refactor', // Refatoração
                'perf',     // Performance
                'test',     // Testes
                'build',    // Build system
                'ci',       // CI/CD
                'chore',    // Manutenção
                'revert',   // Revert
            ],
        ],
        'subject-case': [2, 'always', 'sentence-case'],
    },
};
