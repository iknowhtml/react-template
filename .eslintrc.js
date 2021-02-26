module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'jsx-a11y','react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'prettier/prettier': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
};
