import React from 'react';
import configs from 'configs';
import { withTheme } from 'styled-components';
import { Link } from 'react-router';

class PageHome extends React.Component {

    componentDidMount() {
        document.title = `${configs.baseDocumentTitle} | Home`;
    }

    render() {
        return (
            <div id="page-home" style={{ padding: '24px' }}>
              
            </div>
        );
    }
}

PageHome.defaultProps = {

};

PageHome.propTypes = {

};

export default withTheme(PageHome);
