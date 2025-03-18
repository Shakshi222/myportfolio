import React from "react";
//import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://thrift-track.vercel.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://thrift-track.vercel.app/" target="_blank" rel="noreferrer"><h2>Thift-Tracker</h2></a>
                <p>Developed thift-tracker a website to track the lowest posible price from different ecommerce sites with semantic search  using amazon api, React, flask in team collaboration.</p>
            </div>
            <div className="project">
                <a href="http://localhost:3000/book" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://localhost:3000/book" target="_blank" rel="noreferrer"><h2>BookHub</h2></a>
                <p>Designed, developed, and deployed a Book Search & Library Website using React and Docker containers, enabling readers to search for books and maintain a personal library. Integrated a CI/CD pipeline for seamless updates and deployment.</p>
            </div>
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
              <h2>Sudoku</h2>
                <p>Designed, developed, a Sudoku game in C++, featuring an interactive console-based gameplay experience. Implemented data structures and algorithms for puzzle generation.</p>
            </div>
            <div className="project">
               <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
              <h2>CRUD Operation Using Postman</h2>
                <p>Designed, developed, and implemented CRUD operations using Postman, enabling seamless Create, Read, Update, and Delete functionality for API testing and validation. Ensured efficient backend communication and data management.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;