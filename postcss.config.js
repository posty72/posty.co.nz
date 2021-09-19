const BROWSER_SUPPORT = [
    "Chrome >= 60",
    "ChromeAndroid >= 60",
    "Safari >= 9",
    "iOS >= 10",
    "Firefox >= 48",
    "Explorer >= 11",
    "Opera >= 40",
];

const CSS_NANO_OPTIONS = {
    autoprefixer: false,
    calc: false,
    colormin: true,
    convertValues: true,
    core: true,
    discardComments: { removeAll: true },
    discardDuplicates: true,
    discardEmpty: true,
    filterOptimiser: true,
    filterPlugins: false,
    functionOptimiser: true,
    mergeLonghand: true,
    reduceIdents: false,
};

module.exports = (context) => ({
    parser: "postcss-scss",
    plugins: {
        "postcss-import": {},
        "postcss-simple-vars": {},
        "postcss-color-function": {},
        "postcss-strip-inline-comments": {},
        "postcss-css-variables": {},
        "postcss-remify": {},
        "postcss-calc": {},
        precss: { browsers: BROWSER_SUPPORT },
        "postcss-preset-env": {
            browsers: BROWSER_SUPPORT,
            autoprefixer: {
                remove: false,
            },
        },
        cssnano: context.env === "production" ? CSS_NANO_OPTIONS : false,
    },
});
