import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import Header from '../components/header'
import '../layouts/index.scss'

interface LayoutProps {
    location: Location
}

interface LayoutState {
    navOpen: boolean
}

class Layout extends React.Component<LayoutProps, LayoutState> {
    state = {
        navOpen: false
    }

    componentDidUpdate(prevProps: LayoutProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                navOpen: false
            })
        }
    }

    toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    render() {
        const { children } = this.props
        const navClass = (this.state.navOpen) ? 'nav-open' : ''

        return (
            <StaticQuery
                query={graphql`
                    query HeaderQuery {
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                `
                }
                render={(data) =>
                    <div className={`base ${navClass}`}>
                        <Helmet
                            titleTemplate={`%s - ${data.site.siteMetadata.title}`}
                            meta={[
                                { name: 'theme-color', content: '#2fbc42' },
                                { name: 'description', content: 'Josh Post - Software developer' },
                                { name: 'keywords', content: 'I create awesome digital products. I\'ve been working professionally as a developer since 2013.' },
                                { name: 'google-site-verification', content: '7RxMn2JUwrO_NOuUXeoWSl90NElOenZ4Ky5WnFxd_q4' },
                            ]} />
                        <html lang="en" />
                        <Header data={data} toggleNav={this.toggleNav.bind(this)} />
                        <main className="main || container">
                            {children}
                        </main>
                        <Footer />
                    </div>
                } />
        )
    }
}

export default Layout
