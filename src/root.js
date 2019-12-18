import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { databaseList } from './component/datalist'
import './HomePage/navbar.css';
import Main from './HomePage/main.js';
import About from './MainPages/about';
import Factopedia from './factopedia.js';
import AnimalPages from './FactopediaPage/animalPages';
import SpeciesPages from './FactopediaPage/speciesPages';
import NotFoundPage from './HomePage/NotFoundPage';

class Root extends React.Component {

    render() {

        return ( 
           <Router>
                    <nav>
                        <section>
                            <h1> AnimalDatabase </h1>
                        </section>
                        <section>
                            <Link to="/">
                                <span className="phone-arrow-down">&laquo;</span> Home <span className="phone-arrow-down">&laquo;</span>
                            </Link>
                            <div className="dropDown">
                                <Link to="/factopedia">
                                <span className="phone-arrow-up">&laquo;</span> Factopedia
                                <span className="phone-arrow-down">&laquo;</span></Link>
                                <div className="dropDown_box">
                                    <ul>
                                    {
                                        databaseList.map((item, i) => (
                                            <Link key={i} to={`/species/${item.title}`}><li >                       {item.title}</li></Link>
                                        ))
                                    }
                                    </ul>
                                </div>
                            </div>
                            
                        <Link to="#" className="disabled"><span className="phone-arrow-up">&laquo;</span> Endangered <span className="phone-arrow-down">&laquo;</span></Link>
                        <a href="#1" className="disabled"><span className="phone-arrow-up">&laquo;</span> Extict <span className="phone-arrow-down">&laquo;</span></a>
                        <a href="#1" className="disabled"><span className="phone-arrow-up">&laquo;</span> More <span className="phone-arrow-down">&laquo;</span></a>
                            <Link to="/animal-database/about">
                                <span className="phone-arrow-up">&laquo;</span> About <span className="phone-arrow-up">&laquo;</span>
                            </Link>
                        </section>
                    </nav>
                <Switch>
                    <Route path="/" exact component={Main} activeClassName="selected" />
                    <Route path="/factopedia" component={Factopedia} />
                    <Route path="/fact/:name" component={AnimalPages} />
                    <Route path="/species/:title" component={SpeciesPages} />
                    <Route path="/about" component={About} />
                    <Route component={NotFoundPage} />
                </Switch>     
           </Router>     

        );
    }
}

export default Root;

