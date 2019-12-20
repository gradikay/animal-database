import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
/* DATABASE */
import { databaseList } from '../Component/datalist.js';
/* CSS */
import styles from '../css/factopedia.module.css';
/* PAGES */ 
import  Aside from '../Component/aside'; 
import Footer from '../Component/pageFooter'; 

const Factopedia = () => {

    let { title } = useParams()

    //console.log(title)
    return (
        <>
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
                    
                </main>
                
            </div>
            <Footer />                        
        </>
    );
}


export default Factopedia;
