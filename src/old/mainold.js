import React from 'react';
// Images
import animHeight from './img/animalheight.png'
import endangered from './img/endangered.png'
import extinct from './img/extinct.png'
import microbe from './img/microbes.png'
import insect from './img/insect.png'
import mammal from './img/mammals.png'
// Css - Styling 
import './index.css';
// Class calls
import Header from './header.js';
import Footer from './footer.js';


class Main extends React.Component {

    //colorChangeIn = (e) => {
    //    const cChangedIn = e.target || e.currentTarget;
    //    cChangedIn.style.backgroundColor = '#ffb416';
    //}
    //colorChangeOut = (e) => {
    //    const cChangedOut = e.target || e.currentTarget;
    //    cChangedOut.style.backgroundColor = '#36486b'; 
    //<div
    //    onMouseEnter={(e) => this.colorChangeIn(e)}
    //    onMouseOut={(e) => this.colorChangeOut(e)}
    //   >

    render() {
        const Fragment = React.Fragment;

        return (
            <Fragment>
                <Header />
                <main>
                    <section>
                    <h1>Anima<span className="color-title">l :: D</span>atabase</h1>
                        <p>With over 10,000 unique animal names, our database is the largest collection of animals in the planet. 
                            We are earth's animal encyclopedia.
                            This is the right place for children and adults alike to learn about, buy and sell animals. </p>
                        <section>
                            <div>
                                <p>Number of Animals in the Database</p>
                            </div>
                            <div>
                                <p>0K</p>
                            </div>
                        </section>
                    </section>
                    <section>
                    <h2>Fact<span className="color-title">o :: P</span>edia</h2>
                    <div>
                        <h3>Basic facts</h3>
                        <img src={animHeight} alt={"A Dinosaur "} />
                    </div>
                    <div>
                        <h3>Pre-historic Animals</h3>
                        <img src={extinct} alt={"A Dinosaur's Skull"} />
                    </div>
                    <div>
                        <h3>Endagered Species</h3>
                        <img src={endangered} alt={"A Spider Monkey"} />                    
                    </div>                        
                    <div>
                        <h3>Microbial Life</h3>
                        <img src={microbe} alt={"An unknown Microbe"} />
                    </div>
                    <div><h3>Mammals</h3>
                        <img src={mammal} alt={"An Elephant"} />
                    </div>
                    <div><h3>Insects</h3>
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

