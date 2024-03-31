module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: ['plugin:react/recommended', 'airbnb-base', 'airbnb-typescript', 'plugin:jsx-a11y/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'max-len': ['error', { code: 120 }],
    'react/require-default-props': 0,
    'import/no-absolute-path': 'off',
    'function-paren-newline': 'off',
    'consistent-return': 'off',
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
    'react-hooks/rules-of-hooks': 'error',
    'linebreak-style': 'off',
  },
};
