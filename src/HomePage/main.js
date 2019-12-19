import React from 'react';
import { Link } from 'react-router-dom'
// Images
import animHeight from './img/animalheight.png';
import extinct from './img/extinct.png';
import endangered from './img/endangered.png';
import microbe from './img/microbes.png';
import mammal from './img/mammals.png';
import insect from './img/insect.png';
import { total } from '../component/datalist'
// CSS - Styling
import styles from './index.module.css';
// Classes
import Footer from '../FactopediaPage/pagefooter';

class Header extends React.Component {

    render() {
        return (
            <header className={styles.Header}>
                <section className={styles.Container}>
                    <div className={styles.overlay}>
                        <div className={[styles.Box, styles.box_expend_width].join(' ')}>
                            <h1 className={styles.heading_title} >ANIMALDATABASE</h1>
                        </div>
                        <div className={[styles.Box, styles.Description, styles.box_expend_width].join(' ')} >
                            <p>Home of the Cutest</p>
                        </div>
                        <div className={[styles.Box, styles.box_expend_width].join(' ')}>
                            <Link to="/factopedia"><button className={styles.Button} type="button">FACTOPEDIA</button></Link>
                        </div>
                    </div>
                </section>
            </header>

        );
    }
}
class Main extends React.Component {

    render() {
        const Fragment = React.Fragment;
        
        return (
            <Fragment>
                <Header />
                <main className={styles.Main}>
                    <section className={styles.Container}>                       
                            <div className={[styles.Box, styles.box_expend_width].join(' ')}>
                                <h2 className={styles.heading_title}>ANIMALDATABASE</h2>                        
                            </div>  
                            <div className={[styles.Box, styles.Description].join(' ')}>
                            <p>
                                With over {total} unique animal names, our database is on the way to become the largest collection of animals in the planet.
                                    We are earth's animal encyclopedia.
                                    This is the right place for children and adults alike to learn about, buy and sell animals.
                                </p>
                            </div>  
                            <div className={styles.Box}>
                                <p className={[styles.right__align, styles.description_word].join(' ')} >Number of Animals in the Database</p>
                            </div>
                        <div className={styles.Box}>
                            <p className={[styles.left__align, styles.description_word, styles.word_total].join(' ')}> {total} </p>
                            </div>                   
                    </section>
                    <section className={styles.Container}>
                        <div className={[styles.Box, styles.box_expend_width].join(' ')}>
                            <h2 className={styles.heading_title}>FACTOPEDIA</h2>
                        </div>
                        <div className={[styles.Box, styles.picture_box].join(' ')}>
                            <h3>Basic facts</h3>
                            <img src={animHeight} alt={"A Dinosaur "} />
                        </div>
                        <div className={[styles.Box, styles.picture_box].join(' ')}>
                            <h3>Pre-historic Animals</h3>
                            <img src={extinct} alt={"A Dinosaur's Skull"} />
                        </div>
                        <div className={[styles.Box, styles.picture_box].join(' ')}>
                            <h3>Endagered Species</h3>
                            <img src={endangered} alt={"A Spider Monkey"} />                    
                        </div>                        
                        <div className={[styles.Box, styles.picture_box].join(' ')}>
                            <h3>Microbial Life</h3>
                            <img src={microbe} alt={"An unknown Microbe"} />
                        </div>
                        <div className={[styles.Box, styles.picture_box].join(' ')}><h3>Mammals</h3>
                            <img src={mammal} alt={"An Elephant"} />
                        </div>
                        <div className={[styles.Box, styles.picture_box].join(' ')}><h3>Insects</h3>
                            <img src={insect} alt={"An Insect"} />
                        </div>
                    </section>
                   
                </main>
            <Footer />
            </Fragment>

        );
    }
}

export default Main;

