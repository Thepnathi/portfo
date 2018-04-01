import React, { Component } from 'react';
import './about-me.css';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div>
            <h2>Web Development Skills</h2>
              <p>On my spare time I am currently working on full-stack web application projects</p>
              <p>Javascript, ES5, ES6, React, Redux, Node, Express, MongoDB, Oranges</p>
              <p>Git, Android Development, Java, Haskell, C++</p>
              <p>OS: MacOS, Windows, Linux</p>

              <div className="technologies-icon-stacks">
                <div><img src="../assets/react-logo.png" className="logo react"/></div>
                <div><img src="../assets/node-logo.png" className="logo node"/></div>
                <div><img src="../assets/mongodb-logo.png" className="logo mongodb"/></div>
                <div><img src="../assets/java-logo.png" className="logo java"/></div>
                <div><img src="../assets/android-logo.png" className="logo android"/></div>
              </div>

          </div>

          <div>
            <h2>Work History</h2>

            <p>Iudicem noster amet te malis. Non multos voluptate tractavissent. Ingeniis minim
              irure e quis.Magna ad nescius eu e non distinguantur qui tamen laborum
              quibusdam, iis proident illustriora. Hic incididunt et arbitror, ingeniis ad
              amet. Legam e aliquip, arbitror praetermissum se ullamco, culpa cohaerescant
              eiusmod culpa quamquam a ad ubi tempor magna quid.
            </p>

          </div>

        </div>

          <div>
            Development Techonologies
          </div>

      </div>
    );
  }
}