import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 


class Kayamba extends React.Component {
    render() {

        const Fragment = React.Fragment;

        return ( 
                <Fragment>
                    <App/>
                </Fragment>

        );
    }
}

ReactDOM.render(<Kayamba />, document.getElementById('root'));

