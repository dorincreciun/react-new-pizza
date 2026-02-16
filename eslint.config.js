import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginImport from "eslint-plugin-import"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
    {
        ignores: ["dist", "build", "coverage", "node_modules"],
    },

    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },
        plugins: {
            import: eslintPluginImport,
            "react-hooks": reactHooks,
        },
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reactRefresh.configs.vite,
            eslintConfigPrettier,
        ],
        settings: {
            "import/resolver": {
                typescript: {
                    project: ["./tsconfig.app.json", "./tsconfig.node.json"],
                },
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
                },
            },
        },
        rules: {
            // ---- React hooks ----
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // ---- React Refresh ----
            // "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "react-refresh/only-export-components": "off",

            // ---- Imports: sanity ----
            "import/no-unresolved": "error",
            "import/first": "error",
            "import/no-duplicates": "error",

            "import/newline-after-import": ["error", { count: 1 }],

            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
                    pathGroups: [
                        { pattern: "react", group: "external", position: "before" },

                        { pattern: "@app/**", group: "internal", position: "before" },
                        { pattern: "@processes/**", group: "internal", position: "before" },
                        { pattern: "@pages/**", group: "internal", position: "before" },
                        { pattern: "@widgets/**", group: "internal", position: "before" },
                        { pattern: "@features/**", group: "internal", position: "before" },
                        { pattern: "@entities/**", group: "internal", position: "before" },
                        { pattern: "@shared/**", group: "internal", position: "before" },
                    ],
                    pathGroupsExcludedImportTypes: ["react"],
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],

            "import/no-restricted-paths": [
                "error",
                {
                    zones: [
                        {
                            target: "./src/shared",
                            from: [
                                "./src/entities",
                                "./src/features",
                                "./src/widgets",
                                "./src/pages",
                                "./src/processes",
                                "./src/app",
                            ],
                        },
                        {
                            target: "./src/entities",
                            from: [
                                "./src/features",
                                "./src/widgets",
                                "./src/pages",
                                "./src/processes",
                                "./src/app",
                            ],
                        },
                        {
                            target: "./src/features",
                            from: ["./src/widgets", "./src/pages", "./src/processes", "./src/app"],
                        },
                        {
                            target: "./src/widgets",
                            from: ["./src/pages", "./src/processes", "./src/app"],
                        },
                        {
                            target: "./src/pages",
                            from: ["./src/processes", "./src/app"],
                        },
                        {
                            target: "./src/processes",
                            from: ["./src/app"],
                        },
                    ],
                },
            ],
        },
    },
)
