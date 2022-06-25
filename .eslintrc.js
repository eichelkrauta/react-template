module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            "jsx": true
        },
        ecmaVersion: 12
    },
    plugins: ["react", "@typescript-eslint", "unused-imports"],
    rules: {
        indent: ["error", 4, {
            "SwitchCase": 1
        }],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "never"],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/no-explicit-any": "off",
        // can't describe functions without this error? todo
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_"
        }]
    },
    ignorePatterns: ["**/*.svg", "**/*.css", "**/stories/*"],
    settings: {
        react: {
            version: "detect"
        }
    }
}