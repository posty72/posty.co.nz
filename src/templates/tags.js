import Feature from '../components/feature';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import TagList from '../components/tag-list';

const Tags = ({ pathContext, location }) => {
    const { posts, post, tag } = pathContext;
    const title = post ? `${post.length} post${post.length === 1 ? '' : 's'} tagged with "${tag}"` : 'Tags';

    return (
        <Layout location={location}>
            <h1 className="page-title">{title}</h1>
            <hr />
            {post &&
                post.map((node) => <Feature key={node.id} data={node} />)
            }
            <TagList tags={Object.keys(posts)} />
        </Layout>
    );
};

Tags.propTypes = {
    pathContext: PropTypes.object,
    location: PropTypes.object,
};

export default Tags;
