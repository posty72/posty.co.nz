/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'pages'
        });

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                categories
                            }
                        }
                    }
                }
            }
        `
        ).then((result) => {
            const posts = result.data.allMarkdownRemark.edges;

            createCategoryPages(createPage, posts);

            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/blog-post.js'),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    },
                });
            });
            resolve();
        });
    });
};

const createCategoryPages = (createPage, edges) => {
    // Tell it to use our tags template.
    const categoryTemplate = path.resolve('src/templates/categories.js');
    // Create an empty object to store the posts.
    const posts = {};

    // Loop through all nodes (our markdown posts) and add the tags to our post object.
    edges.forEach(({ node }) => {
        if (node.frontmatter.categories) {
            node.frontmatter.categories.forEach((category) => {
                if (!posts[category]) {
                    posts[category] = [];
                }
                posts[category].push(node);
            });
        }
    });

    // Create the tags page with the list of tags from our posts object.
    createPage({
        path: '/categories',
        component: categoryTemplate,
        context: {
            posts,
        },
    });

    // For each of the tags in the post object, create a tag page.
    Object.keys(posts).forEach((categoryName) => {
        const post = posts[categoryName];

        createPage({
            path: `categories/${categoryName}`,
            component: categoryTemplate,
            context: {
                posts,
                post,
                tag: categoryName,
            },
        });
    });
};
