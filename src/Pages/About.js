import React from 'react';
import Footer from '../Component/pageFooter'

const upperDiv = {
    height: '50px',
    //backgroundColor: 'black',
    //backgroundImage: `url(${sky3})`,
    //backgroundPosition: 'center bottom'
}
const middleDiv = {
    width: '70%',
    margin: 'auto',
    height: '90vh',
    paddingTop: '20vh',
    fontSize: '1.5vw',
    padding:'auto 30px 30px 30px'
}
const coloredDiv = {
    backgroundColor: '#190934',
    color: 'white',
    margin: 'auto',
    height: '90vh',

}


class About extends React.Component {
    render() {

        return (
            <>
                <section itemScope itemtype="http://schema.org/CreativeWork">
                <div style={upperDiv}>                
                </div>
                <div style={middleDiv}>
                        <h1>Who We Are</h1>
                        <p itemProp="abstract">
                        We are a platform dedicated to collect the vast diversity of animals and expose it in one place. More like a encyclopedia or
                                a repository, we provide basic facts about animals. Our collections are diveded into Breeds, Extict animals, Endangered species, and general species.
                    </p>
                    </div>
                    <div style={coloredDiv}>
                    <div style={middleDiv}>
                    <h1>Our Mission</h1>
                    <p>
                       We are focusing on being the world #1 reference when it comes to animals. We want to be the ultimate animal encyclopedia with Factopedia.
                    </p>
                    </div>
                    </div>
                    <div style={middleDiv}>
                   
                        <h1>Why are we Here</h1>
                        <p>
                          We are here to teach kids and people in general about earth animals which could help us appreciate, and hopefully respect them. As a kid, Gradi K., the founder spent a lot of his time reading tones of encyclopedia about animals, but his biggest problem was that he had no ways to see what the animal looked like. That is why he built Factopedia with a lot of thumbnails, so that you can see what you are reading.
                        </p>
                    
                </div>
                    <div style={coloredDiv}>
                <div style={middleDiv}>
                            <h1>Why did we start</h1>
                            <p itemProp="backstory">
                                We started in <span itemProp="contentLocation">Tucker, GA</span> in <span itemProp="dateCreated">August 2014</span>. Our founding father, Gradi Kayamba started Factopedia as the name of the website before changing it to <span itemProp="alternateName">Zonimo</span>. When Gradi K. was on the web he had always a hard time finding anything about animal in a single website. So, he said 'enough is enough. I am creating my own website'. After, realizing that a lot of people could benefit from it Gradi K. decided to jump on this journey of changing Factopedia to Zonimo.
                    </p>
                </div>
                </div>
                <div style={middleDiv}>
                    <h1>Founder</h1>
                        <p>
                            <span itemProp="author">Gradi M. Kayamba</span>. Born in Kinshasa, D.R.Congo in 1993. Move to the USA in March, 2011. Learn his first line of program when he was 20. Being a fan of Wall Street Gradi M.K. started trading the stock market as an amateur before moving to Forex Trading. He owned his first computer when he turned 21 and started immediately learn about computer programming. He is a self-thought programmer and trader. Zonimo is his dream come true, because animals has always been part of his childhood. From raising cats and dogs, Turtles and birds, to lizard and ants. He successfully trained his dog when he was 12 years old. Zonimo is his first project among multiples. 'ZONIMO HOME OF THE CUTEST.'
                    </p>
                </div>
            </section>
            <Footer />
            </>


        );
    }
}

export default About;

