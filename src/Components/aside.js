import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink, Link, 
    useParams,
    useRouteMatch
} from "react-router-dom"
/* DATABASE */
import { databaseList, total } from '../Components/datalist.js'
/* CSS */
import styles from '../css/factopedia.module.css'
import NotFoundPage from '../Pages/NotFoundPage'
import Footer from '../Components/pageFooter'

//import SpeciesPages from '../Pages/SpeciesPages.js';

// *** ASIDE
// Arrow function use props to have access to pass props
// Define props inside AsideProps and pass it here

const Aside = () => {

   // console.log(props.title); // FOR TESTING 
    let { path, url } = useRouteMatch();
    return (
        <>
        <Router>
            <aside className={styles.Aside}> 
                    <div>
                        <NavLink to={path}>
                            <h2>Factopedia <br /> <small>{total} animals</small></h2>
                        </NavLink>
                    </div>
                    <h3>Breeds</h3>
                    {
                        databaseList.map(animal => (
                            <NavLink key={animal.title + 1} to={`${url}/${animal.title}`} activeClassName={styles.selected}>
                        <h4>
                            {animal.title} <small style={{"float" : "right"}}>{animal.list.length}</small>
                        </h4>
                    </NavLink>
                ))
                }
            </aside>
                     
            <Switch>
                <Route exact path={path}>
                    {/* if no animal is choosen */}
                    <Home />
                    </Route>
                    {/* remove ' exact ' only one exact */}
                <Route exact path={`${path}/:name`}>
                    {/* Link to each animal */}
                    <Topic /> 
                </Route>
                <Route component={NotFoundPage} />
            </Switch>
            </Router>
            </>
    );
}
const Topic = () => {
 
    let { name } = useParams();
    const animal = databaseList.find(animal => animal.title === name);

    if (!animal) return <NotFoundPage />
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

    return (
        <main className={[styles.Main, styles.row_inner].join(' ')}>
            <section className={[styles.Box, styles.box_expand, styles.headerSpecies].join(' ')} >
                <h2>{animal.list.length.toLocaleString()} {animal.title.toLocaleUpperCase()}</h2>
                <p>{animal.type.toUpperCase()}</p>
                <ul className={styles.description}>
                    {
                        animal.description.map(item => (
                            <li key={item + 1}>{item}</li>
                        ))
                    }
                </ul>
                <div className={styles.header_pic}>
                    <img src={`/images/${animal.img}.png`} alt={animal.img} />
                </div>
            </section>
            <ul>
                {

                    mapping.map((el) => (

                        <span key={el.index}>
                            <span className={styles.animal_list}> {el.value} </span>
                        </span>
                    ))
                }
            </ul>
        </main>
    );

}
const Home = () => {
 

    return (
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
                    databaseList.map((animal, i) => (
                        <Link to={`/factopedia/${animal.title}`}><div className={styles.Page_box} key={i}>
                            <img src={`/images/${animal.img}.png`} alt={animal.img} />
                            <div className={styles.overlay}>
                                <h3>{animal.title}</h3>
                                <h4>{animal.list.length.toLocaleString()} <small>{animal.type.toUpperCase()}</small></h4>
                            </div>
                        </div></Link>
                    ))
                }
            </section>
        </main>
    );
}

const Main = () => {
    return (
        <div className={[styles.Container, styles.row_float_right].join(' ')}>
            <Aside />  
            <Footer />
        </div>
    );
}

export default Main;