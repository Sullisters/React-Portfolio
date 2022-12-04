import React from 'react';
import '../../styles/About.css'

function About() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <img src={require('file:///C:/Users/music/Downloads/80B7DE0A-E3A0-454D-9E08-64827AA0489E.jpeg')} alt='' className='profile'></img>
                </div>
            
                <div className='col-7'>
                    <h1>
                        About
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna porta, lobortis ex a, ornare diam. Sed malesuada mi id pretium bibendum. Morbi finibus tortor ac felis aliquam fermentum. Morbi gravida tempus elit. Etiam velit tellus, dignissim id quam vitae, egestas tempus turpis. Aenean a interdum tortor. Vivamus vulputate commodo leo, eget commodo eros pulvinar id. Cras scelerisque porta scelerisque.

                    Donec consectetur nunc sit amet laoreet consectetur. Pellentesque volutpat efficitur felis. Curabitur dapibus at tortor sed iaculis. Fusce tellus velit, vulputate et dui quis, suscipit luctus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet mi nisi. Aenean egestas est at justo consequat, ac vulputate nulla bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vitae ante vitae justo fringilla dignissim. 
                    </p>
                </div>
            </div>    
        </div>
    )
}

export default About;