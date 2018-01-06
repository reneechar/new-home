import React, { Component } from 'react';
import './styles/projects.scss'

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h1>Projects</h1>
          <ul className="project-list">
            <li>
              <div className="project-description">
                <a href="https://paubox.zendesk.com/hc/en-us"><h2>Paubox Help Center</h2></a>
                <h5>Help Center for all things Paubox - Find guides, participate in the community, and view system statuses</h5>
                <a href="https://paubox.zendesk.com/hc/en-us"><div className="project-img" id="paubox-help"></div></a>
              </div>
            </li>
            <li>
              <div className="project-description">
                <a href="https://github.com/SpaceToastCoastToCoast/spell-casters"><h2>SpellCasters</h2></a>
                <h5>Level up your vocabulary by playing this spelling game, packed with over a hundred of the most misspelled words in the English language</h5>
              </div>
              <a href="https://spellcastersgame.com/#/"><div className="project-img" id="spellcasters"></div></a>
              <a href="https://github.com/SpaceToastCoastToCoast/spell-casters"><div className="githubIcon"></div><p className="githubLink">Visit the github</p></a>
            </li>
            <li>
              <div className="project-description">
                <a href="http://kanban.reneey.com/#/"><h2>Kanban</h2></a>
                <h5>Use this kanban board to organize tasks and plan projects with team members</h5>
              </div>
              <a href="http://kanban.reneey.com/#/"><div className="project-img" id="kanban"></div></a>
              <a href="https://github.com/reneechar/React-Kanban"><div className="githubIcon"></div><p className="githubLink">Visit the github</p></a>
            </li>
            <li>
              <div className="project-description">
                <a href="https://arakawarx7.github.io/disruptarmy/"><h2>Executive Dashboard</h2></a>
                <h5>Custom dashboard designed for the Four Star Army General in Hawaii for the Disrupt Army Hackathon</h5>
              </div>
              <a href="https://arakawarx7.github.io/disruptarmy/"><div className="project" id="disruptArmy"></div></a>
              <a href="https://github.com/arakawarx7/disruptarmy"><div className="githubIcon"></div><p className="githubLink">Visit the github</p></a>
            </li>
            <li>
              <div className="project-description">
                <a href="http://expressgallery.reneey.com/"><h2>Image Gallery</h2></a>
                <h5>View and add images to this public gallery by creating an account</h5>
              </div>
              <a href="http://expressgallery.reneey.com/"><div className="project-img" id="expressGallery"></div></a>
              <a href="https://github.com/jcarreon808/express-gallery"><div className="githubIcon"></div><p className="githubLink">Visit the github</p></a>
            </li>
          </ul>
        </section>
    );
  }
}

export default Projects;