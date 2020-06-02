import React from 'react'
import logo from "../images/thering.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCogs, faUser } from '@fortawesome/free-solid-svg-icons'
import { DashboardList } from './Dashboard'
import { WidgetList } from './Widget'
import Account from './Account'

function Navigation({ setApp })
{
  return (
    <nav className="navigation">
      <section className="home">
        <a className="title" href="#">OARTA</a>
        <a href="#"><img className="logo" alt="OARTA Logo" src={logo} /></a>
      </section>
      <ul>
        <li>
          <button onClick={() => setApp(<DashboardList />)}>Dashboard</button>
          <span className="nav-icon"><FontAwesomeIcon icon={faChartLine} /></span>
        </li>
        <li>
          <button onClick={() => setApp(<WidgetList />)}>Widgets</button>
          <span className="nav-icon"><FontAwesomeIcon icon={faCogs} /></span>
        </li>
        <li>
          <button onClick={() => setApp(<Account />)}>Settings</button>
          <span className="nav-icon"><FontAwesomeIcon icon={faUser} /></span>
        </li>
      </ul>
    </nav>)
}

export default Navigation

