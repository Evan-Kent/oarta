import React from 'react'
import logo from "../images/thering.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCogs, faUser } from '@fortawesome/free-solid-svg-icons'


function Navigation()
{
  return (
    <nav className="navigation">
      <section className="home">
        <a className="title" href="#">OARTA</a>
        <a href="#"><img className="logo" alt="OARTA Logo" src={logo} /></a>
      </section>
      <ul>
        <li>
          <a href="#">Dashboard</a>
          <span className="nav-icon"><FontAwesomeIcon icon={faChartLine} /></span>
        </li>
        <li>
          <a href="#">Widgets</a>
          <span className="nav-icon"><FontAwesomeIcon icon={faCogs} /></span>
        </li>
        <li>
          <a href="#">Settings</a>
          <span className="nav-icon"><FontAwesomeIcon icon={faUser} /></span>
        </li>
      </ul>
    </nav>)
}

export default Navigation

