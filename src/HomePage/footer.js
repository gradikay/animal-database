import React from 'react';
// CSS - Styling
import styles from './index.module.css';


class Footer extends React.Component {
    render() {

        let date = new Date();
        let copyRYear = date.getFullYear();
       
        return (

            <footer className={styles.Footer}>
                <section><p>Copyright &copy; <span>{copyRYear}</span> Gradi KAYAMBA. All rights reserved.</p></section>
            </footer>

        );
    }
}

export default Footer;

