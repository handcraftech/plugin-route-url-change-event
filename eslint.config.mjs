export default [
  {
    files: ['**/*.js'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: { ecmaVersion: 2020, sourceType: 'module' },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single']
    },
  },
]


