import React from "react";
import Teguh from '../assets/img/teguh.png'
import Habbani from '../assets/img/habbani.png'
import Profileicon from '../assets/img/profileicon.png'



function About () {
  const ProfileStyle = {
  width: '100%',
  maxWidth: '150px',
  borderRadius:'100%'
  }
    return (
      <React.Fragment>
	<section class="hero is-medium is-info">
        <div class="hero-body has-text-centered">
          <p class="title is-3">Meet Our Team</p>
          <p class="subtitle">Let's get acquainted with our team</p>
          <div className="columns">
            <div class="column has-text-centered is-6-mobile is-offset-3-mobile is-4-desktop">
              <h1 class="title is-4">M Rabbani</h1>
              <img style={ProfileStyle} src={Habbani} alt="" />
              <h2 class="title is-5">Team Leader</h2>
              <p>Responsible for managing the team in website development</p>
              <br />

              <h2 class="title is-6">Background :</h2>
              <p>S1 Teknik Informatika</p>
              </div>
              <div class="column has-text-centered is-6-mobile is-offset-3-mobile is-4-desktop">
                <h1 class="title is-4">Teguh Sabila</h1>
                <img style={ProfileStyle} src={Teguh} alt="" />
                <h2 class="title is-5">Developer</h2>
                <p>Build website, manage API work make it run well and beautiful</p>
                 <br />

              <h2 class="title is-6">Background :</h2>
              <p>SMK Komputer Indonesia</p>

            </div>

             <div class="column has-text-centered is-6-mobile is-offset-3-mobile is-4-desktop">
                <h1 class="title is-4">Ridho</h1>
                <img style={ProfileStyle} src={Profileicon} alt="" />
                <h2 class="title is-5">Maintenancer</h2>

                <p>Testing the website's work, fixing small errors that occur</p>
               <br />

              <h2 class="title is-6">Background :</h2>
              <p>Lorem itsum dolor sit amet</p>

            </div>


          </div>
        </div>
      </section>
      </React.Fragment>
    )
}

export default About;
