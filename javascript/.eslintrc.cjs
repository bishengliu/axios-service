module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  plugins: ['import-order'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import-order/import-order': 2,
  },
};
