import React from 'react';
import styles from './index.module.css';


class Header extends React.Component {

    render() {
        return (
            <header className={styles.Header}>
                <section className={styles.header_section}>
                    <div className="overlay">
                        <h1>Anima<span className="color-title">l :: D</span>atabase</h1>
                        <p>Home of the Cutest</p>
                        <button className={styles.header_button} type="button"><span className="tab-arrow-down">&laquo;</span></button>
                    </div>
                </section>
            </header>

        );
    }
}

export default Header;

