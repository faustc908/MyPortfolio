import React from 'react'
import logo from "./GoodEats.png"
import "./Projects.css"
import logoTwo from "./GoodEats.jpg"
import logoThree from "./ExpenseApp.png"


const Projects = () => {
    return (
        <div>
            <div className='projects'>
                <h1 className="header">Some of my projects</h1>
                <h2>First Fullstack Application - GoodEats Recipe Finder</h2>
                <img className="goodEats" src={logo} alt="logo ExpenseApp expense keeper" />
                <p>A fullstack application using the PERN (React.js, Node.js, PostgreSQL, Express) stack to create an app that lets you search for recipes by ingredient and also has the ability to record user recipes.  Tested with Jest, Supertest, and Enzyme.  This is an upgraded application from my Jquery one for the biggest foodies and uses a different recipe database then my previous one to make third party calls.</p>
                <div>
                    <a className="link" href='https://good-eats-recipe-client.vercel.app/' target="_blank">Link to live app</a>
                    <a className="link" href='https://github.com/faustc908/GoodEats-Recipe-Client' target="_blank">Client repo for app</a>
                    <a className="link" href='https://github.com/faustc908/GoodEats-Recipe-Server' target="_blank">Server repo for app</a>
                </div>
            </div>

            <div className='projects'>
                <h2>Second Fullstack Application - ExpenseApp</h2>
                <img className="goodEats" src={logoThree} alt="logo GoodEats recipe finer React.js/Node.js" />
                <p>A fullstack application using the PERN (React.js, Node.js, PostgreSQL, Express) stack to create an app that lets you caculate your expenses as well as leave notes on different deals and nuances in expenditures.  Tested with Jest, Supertest, and Enzyme.  This app was developed with the financial hardship covid-19 has placed on people and should be a useful tool.</p>
                <div>
                    <a className="link" href='https://expense-app-client.vercel.app/' target="_blank">Link to live app</a>
                    <a className="link" href='https://github.com/faustc908/ExpenseApp-Client' target="_blank">Client repo for app</a>
                    <a className="link" href='https://github.com/faustc908/ExpenseApp-Server' target="_blank">Server repo for app</a>
                </div>
            </div>

            <div className='projects'>
                <h2>API project - GoodEats</h2>
                <img className="goodEats" src={logoTwo} alt="logo GoodEats recipe finder jQuery" />
                <p>An application using HTML5/CSS3/Javascript/Jquery to find new recipes based on an ingredient parameter.  Makes multiple API calls to the forkify API.</p>
                <a className='link' href='https://recipe-api-project-goodeats.cfaust.repl.co/' target="_blank">Live link</a>
                <a className='link' href='https://github.com/faustc908/GoodEats-Recipe-Finder' target='_blank'>Code for app</a>
            </div>
        </div>
    )
}

export default Projects;