module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'no-unused-vars': 1,
        indent: [2, 4],
        'react/require-default-props': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 1,
        'react/function-component-definition': 0,
        'no-shadow': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 1,
        'max-len': [2, {
            ignoreComments: true,
            code: 120,
        }],
        'arrow-body-style': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2,
        'no-underscore-dangle': 0,
        'no-param-reassign': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'linebreak-style': 0,
    },
    globals: {
        __IS_DEV__: true,
    },
};
