module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "no-cond-assign": ["error", "always"],
        "default-case": "error",
        eqeqeq: "error",
        "no-case-declarations": "error",
        "no-else-return": "error",
        "no-fallthrough": "error",
        "no-redeclare": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "react/jsx-key": "error",
        "react/prop-types": "error",
        "react-hooks/rules-of-hooks": "error",
        "@typescript-eslint/no-empty-function": [
            "error",
            { allow: ["arrowFunctions"] },
        ],
        "@typescript-eslint/no-unused-vars": "error",
        "react-hooks/exhaustive-deps": "warn",

        // disabled rules
        "no-unused-vars": "off",
        "no-undef": "off",
        "no-extra-boolean-cast": "off",
        "no-warning-comments": "off",
        "react/display-name": "off",
        "no-undefined": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            { accessibility: "no-public" },
        ],
    },
    env: {
        es6: true,
        node: true,
        browser: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    plugins: [
        "babel",
        "jest",
        "import",
        "react",
        "react-hooks",
        "testing-library",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
};