import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.js';


class Kayamba extends React.Component {
    render() {

        const Fragment = React.Fragment;

        return (
                <Fragment>
                    <Root />
                </Fragment>

        );
    }
}

ReactDOM.render(<Kayamba />, document.getElementById('root'));
