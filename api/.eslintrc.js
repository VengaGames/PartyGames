module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'max-len': ['error', { code: 120 }],
    'import/no-absolute-path': 'off',
    'function-paren-newline': 'off',
    'consistent-return': 'off',
    'no-console': 'warn',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // Forbid @ts-ignore statements
    '@typescript-eslint/ban-ts-comment': 'error',
    // Forbid any usage
    '@typescript-eslint/no-explicit-any': 2,
    // Allow defining using functions before their declaration
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    // Force explicit type definition
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: true,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: true,
      },
    ],
    'linebreak-style': 'off',
  },
};
