import React from 'react';
import { Link } from 'react-router-dom'
import NotFoundPage from '../HomePage/NotFoundPage';
import styles from '../FactopediaPage/factopedia.module.css';
import { databaseList } from '../component/datalist.js';
import Aside from './aside.js'; 
import Footer from './pagefooter'; 

// the match helps the browser |match| the animal |title| with the parameter |title| entered in the browser
// match comes from the react-router-dom
//<Route path="/animal-database/species/:title" component={SpeciesPages} />
const AnimalPages = ({ match }) => {

    // We are setting up a variable |title| which is going to match all title 
    // ... in the database and matching it with the parameter
    // match.params.title = :title in the router [root.js]
    const title = match.params.title;
    // We are setting a varible animal to equal the parameter from the user input to our database and return
    const animal = databaseList.find(animal => animal.title === title);
    // In case the system does not match anything we return the NotFoundPage

    // retriving the name in the databaseList and assign an index: and a value:
    let mapping = animal.list.map(function (el, i) { return { index: i, value: el.name }; })
    // debugging console.log(mapping)
    // sorting the names in the databaseList!
    mapping.sort(function (a, b) {

        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;

    });

    // if the name does not match the one in the database return NotFoundPage component
    if (!animal) return <NotFoundPage />

    return (
        <>
            <div className={[styles.Container, styles.row_float_right].join(' ')}>
                <Aside />
                <main className={[styles.Main, styles.row_inner].join(' ')}>
                    <section className={[styles.Box, styles.box_expand, styles.headerSpecies].join(' ')} >
                        <h2>{animal.list.length.toLocaleString()} {animal.title.toLocaleUpperCase()}</h2>
                        <p>{animal.type.toUpperCase()}</p>
                        <p className={styles.description}>{animal.description}</p>
                        <div className={styles.header_pic}>
                            <img src={`/images/${animal.img}.png`} alt={animal.img} />
                        </div>
                    </section>
                    <section className={[styles.Box, styles.box_expand].join(' ')} >
                        <div><h3>Exhaustive List</h3></div>
                        {

                            mapping.map((el) => (

                                <Link key={el.index} to={`/animal-database/fact/${el.value}`}><span className={styles.animal_list}> {el.value} </span></Link>
                                ))
                        }
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default AnimalPages;