import React from 'react';
import spider from '../img/spider.png';
import video from '../img/videoa.mp4';
import dino from '../img/dino.png';

const div = {
    height: 'calc(100vh - 59px)',
    backgroundColor: '#4a29db',
    color: 'white',
    textAlign: 'center',
    paddingTop: '30vh',
    backgroundImage: `url(${spider}), url(${dino}) `,
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundPositionX: '70vw, 9vw',
    backgroundSize: '13vw, 28vw',
    backgroundPositionY: '0, 50vh'
}

const NotFoundPage = () => (
    <div style={div}>
        <h1>404 PAGE NOT FOUND</h1>
        <p>GRADI@Webmaster :: You have wonder too far!</p>
       
    </div>
    );

export default NotFoundPage;