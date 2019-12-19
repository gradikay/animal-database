import React from 'react';
import { Link } from 'react-router-dom'
import styles from './FactopediaPage/factopedia.module.css';
import Aside from './FactopediaPage/aside'; 
import Footer from './FactopediaPage/pagefooter';
import { databaseList } from './component/datalist.js';
import dog from './datafile/rabbits'

class Factopedia extends React.Component {

    render() {
        
        const Fragment = React.Fragment;
        return (
            <Fragment>
                <div className={[styles.Container, styles.row_float_right].join(' ')}>
                    < Aside />                    
                    <main className={[styles.Main, styles.row_inner].join(' ')}>
                        <section className={[styles.Box, styles.box_expand, styles.header].join(' ')} >
                            <h2>Factopedia</h2>
                            <p>Whatever needs to be known.</p>
                            <button className={[styles.Button, styles.disabled].join(' ')}>Breeds</button>
                            <button className={[styles.Button, styles.disabled].join(' ')}>Extinct</button>
                            <button className={[styles.Button, styles.disabled].join(' ')}>Endangered</button>
                            <button className={[styles.Button, styles.disabled].join(' ')}>Dinosaur</button>
                        </section>
                        <section className={[styles.Box, styles.box_expand].join(' ')} >
                            {
                                databaseList.map((item, i) => (
                                    <Link to={`/species/${item.title}`}><div className={styles.Page_box} key={i}>
                                        <img src={`/images/${item.img}.png`} alt={item.img} />
                                        <div className={styles.overlay}>                                        
                                            <h3>{item.title}</h3>
                                            <h4>{item.list.length.toLocaleString()} <small>{item.type.toUpperCase()}</small></h4>
                                        </div>
                                    </div></Link>
                                ))
                            }
                        </section>
                        Animal count: {dog.length}
                    </main>
                
                </div>
                <Footer />                        
            </Fragment>
        );
    }
}

export default Factopedia;
