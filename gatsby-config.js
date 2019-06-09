const cssNanoOptions = (process.env.NODE_ENV === 'development') ? false : {
    autoprefixer: false,
    calc: true,
    colormin: true,
    convertValues: true,
    core: true,
    discardComments: { removeAll: true },
    discardDuplicates: true,
    discardEmpty: true,
    filterOptimiser: true,
    filterPlugins: false,
    functionOptimiser: true,
    mergeLonghand: true
};

module.exports = {
    siteMetadata: {
        title: 'Josh Post',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: [
                    require('postcss-import'),
                    require('postcss-simple-vars'),
                    require('postcss-strip-inline-comments'),
                    require('postcss-color-function'),
                    require('postcss-remify'),
                    require('postcss-preset-env')({
                        stage: 1,
                        browsers: 'last 2 versions',
                    }),
                    require('cssnano')(cssNanoOptions)
                ]
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-plugin-sharp',
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (eg <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (eg for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: 'language-',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 800,
                            // Remove the default behavior of adding a link to each
                            // image.
                            linkImagesToOriginal: true,
                            // Analyze images' pixel density to make decisions about
                            // target image size. This is what GitHub is doing when
                            // embedding images in tickets. This is a useful setting
                            // for documentation pages with a lot of screenshots.
                            // It can have unintended side effects on high pixel
                            // density artworks.
                            //
                            // Example: A screenshot made on a retina screen with a
                            // resolution of 144 (e.g. Macbook) and a width of 100px,
                            // will be rendered at 50px.
                            //
                            // Defaults to false.
                            sizeByPixelDensity: false,
                        },
                    },
                ],
            },
        }
    ],
};
