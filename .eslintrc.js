module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
};
