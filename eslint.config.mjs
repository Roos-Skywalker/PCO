import jsdoc from "eslint-plugin-jsdoc";
import tseslint from '@typescript-eslint/parser';
import ncoc from "eslint-plugin-no-commented-code";
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    ignores: ["**/.eslintrc.js"],
  },
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      jsdoc: jsdoc,
      'no-commented-code': ncoc,
    },

    // parser: "@typescript-eslint/parser",
    // parserOptions: {
    //   ecmaVersion: 2019,
    //   sourceType: "module"
    // },
    languageOptions: {
      parser: tseslint,
      globals: {},
      ecmaVersion: 2019,
      sourceType: "script",
    },

    rules: {
      // Naming things
      "id-length": ["warn", {
        min: 3,
        exceptions: [
          "t", // For time
          "x", "y", "z", // Spatial coordinates
          "i", "j", "n", "m", // Commonly used in loops
          "PI", "Pi", "pi" // Math constants
        ],
      }],
      "camelcase": ["warn", { properties: "always" }],
      "no-underscore-dangle": ["warn"],

      // Declaring things
      "no-var": "warn",
      "prefer-const": "warn",
      "func-style": ["warn", "declaration", { "allowArrowFunctions": true }],
      
      // Use of semicolons
      "@stylistic/js/semi": ["warn", "always"],
      "@stylistic/js/semi-style": ["warn", "last"],
      "@stylistic/js/semi-spacing": ["warn", {
        "before": false,
        "after": true,
      }],

      // Use of curly braces
      "curly": "warn",
      "@stylistic/js/brace-style": "warn",
      
      // Indentation
      "@stylistic/js/indent": ["warn", 2],

      // Horizontal spacing
      "@stylistic/js/space-infix-ops": ["warn", {
        "int32Hint": false,
      }],
      "@stylistic/js/keyword-spacing": ["warn", { "before": true }],
      "@stylistic/js/no-multi-spaces": "warn",
      "@stylistic/js/space-before-blocks": "warn",
      "@stylistic/js/comma-spacing": ["warn", {
        "before": false,
        "after": true
      }],
      "@stylistic/js/space-in-parens": ["warn", "never"],
      "no-trailing-spaces": ["warn", {
        "skipBlankLines": true,
        "ignoreComments": true,
      }],

      // Vertical spacing (blank lines)
      "@stylistic/js/padding-line-between-statements": ["warn", {
        "blankLine": "always", "prev": "*", "next": "function"
      }],
      "@stylistic/js/padded-blocks": ["warn", "never"],
      "@stylistic/js/no-multiple-empty-lines": ["warn", {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0,
      }],

      // Comments
      "jsdoc/require-jsdoc": "warn",
      "jsdoc/no-blank-blocks": "warn",
      "jsdoc/informative-docs": "warn",
      "jsdoc/check-alignment": "warn",
      "jsdoc/multiline-blocks": "warn",
      "no-warning-comments": "warn",
      "no-commented-code/no-commented-code": "warn",
    },
  }
];