import Footer from '../components/footer';
import Header from '../components/header';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.scss';

class TemplateWrapper extends Component {
    constructor() {
        super();

        this.state = {
            navOpen: false
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                navOpen: false
            });
        }
    }

    toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen
        });
    }

    render() {
        const { children, data } = this.props;
        const navClass = (this.state.navOpen) ? 'nav-open' : '';

        return (
            <div className={`base ${navClass}`}>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                        { name: 'google-site-verification', content: '7RxMn2JUwrO_NOuUXeoWSl90NElOenZ4Ky5WnFxd_q4' },
                    ]} />
                <Header data={data} toggleNav={this.toggleNav.bind(this)} />
                <main className="main || container">
                    {children()}
                </main>
                <Footer />
            </div>
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func,
    data: PropTypes.object,
    location: PropTypes.object,
};


export const query = graphql`
  query HeaderQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export default TemplateWrapper;
