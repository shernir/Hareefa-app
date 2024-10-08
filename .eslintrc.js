module.exports = {
  "root": true,
  env: {
      es2021: true,
  },
  extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          tsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
  },
  plugins: [
      'react',
      '@typescript-eslint',
      'prettier',
      'react-native',
      'react-hooks',

  ],
  settings: {
      react: {
          version: 'detect',
      },
  },
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
      'react-native/split-platform-components': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      "@typescript-eslint/ban-ts-comment": "warn",
  },
};