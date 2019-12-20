import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink, Link
} from 'react-router-dom';
/* DATABASE */
import { databaseList } from './Component/datalist'
/* CSS */
import './css/navbar.css';
/* PAGES */
import Main from './Pages/Home.js'; 
import About from './Pages/About.js';
import Factopedia from './Component/aside.js';
import NotFoundPage from './Pages/NotFoundPage.js';
import AnimalPages from './Pages/AnimalPages.js';
import SpeciesPages from './Pages/SpeciesPages.js';

class Root extends React.Component {

    render() {

        return ( 
            /* ROUTER */
            <Router>
                {/* NAV BAR */}
                <nav>
                    {/* SECTION SITE NAME */}
                    <section>
                        {/* LINK */}
                        <Link to="/">
                            {/* TITLE */}
                            <h1> AnimalDatabase </h1>
                        </Link>
                    </section>
                    {/* SECTION NAV LINKS [.selected] activeClassName*/}
                    <section className='links-section'>
                        {/* LINK - HOME */}
                        <Link to="/">
                            {/* TITLE */}
                            <span className="phone-arrow-down">&laquo;</span> Home <span className="phone-arrow-down">&laquo;</span>
                        </Link>
                        {/* DROPDOWN */}
                        <div className="dropDown">
                            {/* LINK - FACTOPEDIA */}
                            <NavLink to="/factopedia">
                                {/* TITLE */}
                                <span className="phone-arrow-up">&laquo;</span> Factopedia
                                <span className="phone-arrow-down">&laquo;</span>
                            </NavLink>
                            {/* DROPDOWN ITEMS */}
                            <div className="dropDown_box" style={{ display: "none" }}>
                                {/* MAPPING ITEMS */}
                                <ul>
                                    {databaseList.map((item, i) => (
                                        /* LING ITEMS */
                                        <NavLink key={i} to={`/species/${item.title}`}>
                                            {/* ITEMS */}
                                            <li>{item.title}</li>
                                        </NavLink>
                                    ))}
                                </ul>
                            </div>
                        </div> 
                        {/* LINK - ENDAGERED SPECIES - DISABLED */}
                        <Link to="#1" className="disabled">
                            {/* TITLE */}
                            <span className="phone-arrow-up">&laquo;</span> Endangered <span className="phone-arrow-down">&laquo;</span>
                        </Link>
                        {/* LINK - ENDAGERED SPECIES - DISABLED */}
                        <Link to="#2" className="disabled">
                            {/* TITLE */}
                            <span className="phone-arrow-up">&laquo;</span> Extict <span className="phone-arrow-down">&laquo;</span>
                        </Link>
                        {/* LINK - ENDAGERED SPECIES - DISABLED */}
                        <Link to="#" className="disabled">
                            {/* TITLE */}
                            <span className="phone-arrow-up">&laquo;</span> More <span className="phone-arrow-down">&laquo;</span>
                        </Link>
                        {/* LINK - ABOUT */}
                        <NavLink to="/about">
                            {/* TITLE */}
                            <span className="phone-arrow-up">&laquo;</span> About <span className="phone-arrow-up">&laquo;</span>
                        </NavLink>
                    </section>
                </nav>
                {/* SWITCH */}
                <Switch>
                    {/* ROUTES Home - Main Page */}
                    <Route path="/" exact component={Main} />
                    {/* Factopedia Page */}
                    <Route path="/factopedia" component={Factopedia} />
                    {/* Single Animal Page */}
                    <Route path="/fact/:name" component={AnimalPages} />
                    {/* Animal Page */}
                    <Route path="/factopedia/:title" children={SpeciesPages} />
                    {/* About Page */}
                    <Route path="/about" component={About} />
                    {/* NotFound Page */}
                    <Route component={NotFoundPage} />
                </Switch>     
           </Router>     

        );
    }
}

export default Root;

