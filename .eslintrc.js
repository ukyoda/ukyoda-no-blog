module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'no-nested-ternary': 'off',
    'no-console': 'warn', // console.logがあったらwarningを出す
    'arrow-body-style': 'off', // 矢印のbodyを許可
    'import/prefer-default-export': 'off', // 名前付きexportを許可
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error'],
    'import/extensions': 'off', // WANTFIX: そのうち有効にしたい
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
      },
    ],
    'react/react-in-jsx-scope': 'off', // jsxで使うreactを許可
    'react/jsx-filename-extension': ['off'], // jsxファイル名の拡張子を許可
    'react/function-component-definition': 'off', // functionalコンポーネントOK（むしろ歓迎）
    'react/jsx-props-no-spreading': 'off', // propsのspreadを許可
    'react/require-default-props': 'off', // default propsを許可
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/display-name': 'off', // displayNameを許可
    'react/no-array-index-key': 'off', // arrayのindexをkeyにすることを許可
    'jsx-a11y/label-has-associated-control': [
      // a11y関連設定 (https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md)
      'error',
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
  },
}
