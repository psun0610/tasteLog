// eslint.config.js
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            'unused-imports': unusedImports,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        rules: {
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
]
