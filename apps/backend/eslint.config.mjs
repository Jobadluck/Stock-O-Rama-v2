// @ts-check
import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      semi: ["error", "never"],
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-multiple-empty-lines": ["error", {
        max: 1,           // Maximum of 1 consecutive empty line
        maxEOF: 0,        // No empty lines at end of file
        maxBOF: 0         // No empty lines at beginning of file
      }],
      "no-trailing-spaces": "error",  // Remove trailing whitespace including empty lines with spaces
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
);