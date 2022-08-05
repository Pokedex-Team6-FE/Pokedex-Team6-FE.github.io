import React from "react";
import NotFound from '../assets/img/404.gif'

function Notfound () {
  const GifNot = {
  width:'100%',
  maxWidth:'250px'
  }
	return (
	  <React.Fragment>
	    <section class="hero is-medium is-danger">
        <div class="hero-body has-text-centered">
          <p class="title is-4">404 Not Found</p>
          <img style={GifNot} src={NotFound}  />
          <p class="subtitle">There's nothing you can find here</p>

        </div>
      </section>
	  </React.Fragment>
	)
}

export default Notfound
