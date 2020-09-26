import React from 'react'
import developerImage from '../../Images/Developer.jpg'
import './Developer.css'

//UI Component
const Developer = () => {
    return(
        <div className="container Developer" id = "Developer">
            <h3 className="center">Developer</h3>
            <hr className="line"></hr>
            <div className="row row-div">
                <div className="s12 small-div">
                    <div className="card">
                        <div className="card-image">
                            <img src = {developerImage} alt = "Developer Profile"/>
                            <span className = "card-title">Danish Mehmood</span>
                        </div>
                        <div className="card-content">
                            <span className = "card-title">About me<button class="btn waves-effect waves-light">View Resume</button></span>
                            <p style = {{width: '75%'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at, commodi consectetur quis voluptatibus quibusdam aspernatur, facilis, architecto blanditiis iusto deleniti natus quia. Culpa animi nam iusto, saepe minima dolorum.</p>
                            <p style = {{width: '75%'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at, commodi consectetur quis voluptatibus quibusdam aspernatur, facilis, architecto blanditiis iusto deleniti natus quia. Culpa animi nam iusto, saepe minima dolorum.</p>
                            <br></br>
                            <p>Github: </p>
                            <p>Linkedln: </p>
                            <p>Email: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer;