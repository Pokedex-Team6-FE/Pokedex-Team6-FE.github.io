import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/img/pikachu.png'
function Navbar () {
	const Logostyle = {
		alignItems:'center'
	}
	return (
	  <React.Fragment>
	    <nav style={{position:'sticky',top:'0'}} class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link to="/"><span class="navbar-item">
          <img src={Logo} />
        </span></Link>
        <Link to="/Pokemon"><span class="navbar-item" href="https://bulma.io">
          Pokemon
        </span></Link>
        <Link to="/About"><span class="navbar-item">
          About Team
        </span></Link>

      </div>
    </nav>
	  </React.Fragment>
	)
}

export default Navbar
