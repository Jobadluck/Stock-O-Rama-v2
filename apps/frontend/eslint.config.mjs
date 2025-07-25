import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
       semi: ["error", "never"],
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-multiple-empty-lines": ["error", {
        max: 1,           // Maximum of 1 consecutive empty line
        maxEOF: 0,        // No empty lines at end of file
        maxBOF: 0         // No empty lines at beginning of file
      }],
      "no-trailing-spaces": "error"  // Remove trailing whitespace including empty lines with spaces
    },
  },
)
