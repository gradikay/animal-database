import React from 'react';
import styles from '../css/factopedia.module.css';


class Footer extends React.Component {

    render() {        
        let date = new Date();
        let copyRightYear = date.getFullYear();
        return (
                <footer className={[styles.Footer, styles.row_inner].join(' ')}>
                    <section className={[styles.Box, styles.box_3].join(' ')} >
                        <h4>Overview</h4>
                        <p>AnimalDatabase is a platform which provides breeders a place to sell their breeds. It also offers a platform for people to learn about animals with more than 10,000 animals in our database and growing. We are build to be the largest collection of animals in the world and the ultimate encyclopedia.</p>
                    </section>
                    <section className={[styles.Box, styles.box_3].join(' ')}>
                        <h4>Information</h4>
                        <ul>
                            <li>About</li>
                            <li>Donation</li>
                            <li>Future</li>
                            <li>Mission</li>
                        </ul>
                    </section>
                    <section className={[styles.Box, styles.box_3].join(' ')} >
                        <h4>Navigation</h4>
                        <ul>
                            <li>Breeds</li>
                            <li>Extinct</li>
                            <li>Endangered</li>
                            <li>New Discoveries</li>
                        </ul>
                    </section>
                    <section className={[styles.Box, styles.box_expand].join(' ')} >
                        <p>Copyright &copy; <span>{copyRightYear}</span> Gradi KAYAMBA. All rights reserved.</p>
                    </section>
                </footer>
        );
    }
}

export default Footer;

