/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    env: {
        browser: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
    },
    plugins: ["react", "import", "jsx-a11y", "@typescript-eslint"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/strict",
        "prettier",
    ],
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
    rules: {
        /**
         * Typescript
         */
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "variable",
                types: ["function"],
                format: ["PascalCase", "camelCase"],
            },
        ],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/class-literal-property-style": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-magic-numbers": [
            "warn",
            {
                ignore: [0, 1, -1, 2],
                ignoreEnums: true,
            },
        ],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/default-param-last": "warn",
        "@typescript-eslint/consistent-indexed-object-style": [
            "warn",
            "index-signature",
        ],
        "@typescript-eslint/no-invalid-this": ["error"],
        "@typescript-eslint/no-loop-func": ["error"],
        "@typescript-eslint/consistent-type-assertions": [
            "warn",
            {
                assertionStyle: "as",
                objectLiteralTypeAssertions: "allow-as-parameter",
            },
        ],
        "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            { prefer: "type-imports" },
        ],
        "@typescript-eslint/array-type": ["warn", { default: "array" }],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/no-type-alias": [
            "warn",
            {
                allowAliases: "always",
                allowCallbacks: "always",
                allowConstructors: "always",
                allowConditionalTypes: "always",
                allowLiterals: "always",
                allowMappedTypes: "always",
                allowTupleTypes: "always",
            },
        ],
        "@typescript-eslint/no-this-alias": "warn",
        "@typescript-eslint/no-implicit-any-catch": "warn",
        "@typescript-eslint/explicit-module-boundary-types": [
            "off",
            {
                allowArgumentsExplicitlyTypedAsAny: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowHigherOrderFunctions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        "@typescript-eslint/no-unused-expressions": "error",

        /**
         * Import
         */
        "import/no-named-as-default": "error",
        "import/no-named-default": "error",
        "import/no-default-export": "off",
        "import/default": "error",
        "import/named": "error",
        "import/first": "error",
        "import/export": "error",
        "import/no-self-import": "error",
        "import/no-useless-path-segments": "error",
        "import/no-cycle": "error",
        "import/no-unresolved": [0, { commonjs: true, amd: true }],
        "import/order": "error",

        /**
         * React
         */
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-this-in-sfc": "error",
        "react/boolean-prop-naming": [
            "error",
            { rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+" },
        ],
        "react/jsx-fragments": ["error", "syntax"],
        "react/jsx-max-depth": ["error", { max: 6 }],
        "react/jsx-key": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/prefer-stateless-function": "warn",
        "react/display-name": "off",

        /**
         * a11y
         */
        "jsx-a11y/accessible-emoji": "off",

        /**
         * Basic
         */
        "prefer-arrow-callback": "warn",
        "brace-style": ["off", "1tbs"],
        "default-case": "error",
        "no-loop-func": "off",
        "no-return-await": "off",
        eqeqeq: ["error", "smart"],
        "guard-for-in": "error",
        "no-invalid-this": "off",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined",
        ],
        "id-match": "error",
        "max-len": [
            "error",
            {
                code: 400,
            },
        ],
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": [
            "warn",
            {
                allow: [
                    "warn",
                    "dir",
                    "time",
                    "timeEnd",
                    "timeLog",
                    "trace",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "debug",
                    "info",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context",
                ],
            },
        ],
        "no-debugger": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "no-underscore-dangle": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: "*",
                next: "return",
            },
        ],
        "prefer-const": "error",
        "prefer-template": "error",
        radix: "error",
        "spaced-comment": [
            "error",
            "always",
            {
                markers: ["/"],
            },
        ],
        "max-lines": ["warn", 200],
    },
};
