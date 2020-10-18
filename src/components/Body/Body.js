import React from 'react'
import "./Body.css"

const Body = () => {
    return (
        <div className="portBody">
            <div className='aboutme'>
                <h1>A bit about me</h1>
                <p>I'm a recent graduate from Thinkfuls Data Engineering Bootcamp.  I'm passionate about programming and love to solve problems.  I'm not afraid of hard work or long hours.  I strive to improve my skills and learn new ones.  When I'm not coding I am reading, meeting with friends, or playing online games.  Being a problem solver has inspired me to take up a new career path I'm more passionate about.  Ultimately my desire is to work on a team of great programmers.</p>
            </div>
            <div className="aboutme">
                <h1>Skills and experience</h1>
                <p>  I'm proficient in HTML5/CSS3/JS/JQuery as well as the PERN stack (React.js/Node.js/PostgreSQL/Express).  For application and server testing I generally use Jest/Supertest/Enzyme.  I create my code from scratch and have a deep knowledge of front end design.  I have currently deployed two full stack applications using Heroku for the server and Vercel for the client.  I've been in leadership positions in my previous career and have customer service and sales skills as well.  I'm always looking for ways to improve and learn more.  I would really love to work on a team of passionate programmers and grow my career among like-minded people.
               </p>
            </div>
        </div>
    )
}

export default Body;