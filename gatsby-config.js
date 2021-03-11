module.exports = {
    siteMetadata: {
        title: "posty",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                postCssPlugins: [
                    require("postcss-import"),
                    require("postcss-preset-env")({
                        stage: 0,
                    }),
                ],
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
};
