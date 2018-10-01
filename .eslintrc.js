module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "react-native",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "no-console": 0,
        "react/jsx-filename-extension": [ 1, { "extensions": [ ".js", ".jsx" ] } ],
        "react/prop-types": ["error", { "ignore": ["navigation"] }],
    },
};
