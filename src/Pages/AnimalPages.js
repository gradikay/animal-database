import React from 'react';
/* DATABASE */
import { list } from '../Component/datalist.js';
/* CSS */
import styles from '../css/factopedia.module.css';
/* PAGES */
import Aside from '../Component/aside.js'; 
import Footer from '../Component/pageFooter'; 
import NotFoundPage from '../Pages/NotFoundPage';

// the match helps the browser match the animal name with the parameter
const AnimalPages = ({ match }) => {
    
    // the |match| above let us bind our parameters the name in our database with the link or user input!
    //<Route path="/animal-database/fact/:name" component={AnimalPages} />
    const name = match.params.name;
    // if the name in the link matches with any in this specific database return our data
    const animal = list.find(animal => animal.name === name);
    // if the link does not match return the NotFoundPage
    if (!animal) return <NotFoundPage />

    return (
        <>
            <div className={[styles.Container, styles.row_float_right].join(' ')}>
                <Aside />
                <main className={[styles.Main, styles.row_inner].join(' ')}>
                    <section className={[styles.Box, styles.box_expand].join(' ')} >
                        <h1>Name: {animal.name}</h1>
                        <h2>Other Name(s): {animal.other_name}</h2>
                        <h3>Male Weigth: {animal.weight_1}</h3>
                        <h3>Female Weight: {animal.weight_2}</h3>
                        <h3>Male Height: {animal.height_1}</h3>
                        <h3>Female Height{animal.height_2}</h3>
                        <h3>Coat: {animal.coat}</h3>
                        <h3>Color: {animal.color}</h3>
                        <h3>Location: {animal.location}</h3>
                        <h3>Grouping: {animal.animal_group}</h3>
                        <h3>Offsprings: {animal.offsprings}</h3>
                        <h3>Editated date: {animal.edited_date}</h3>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default AnimalPages;