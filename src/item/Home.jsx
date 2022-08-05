import React from "react";
import logo from '../assets/img/poke1.gif'
import Pikachu from '../assets/img/Pikachu.gif'
import KE from '../assets/img/KE.png'
function Home () {
  const Columstyle = {
  alignItems:'center'
  }
  const Imgstyle = {
  maxWidth:'200px',
  width:'100%'
  }
    return (
        <React.Fragment>
	  <section class="hero is-medium is-warning">
        <div class="hero-body">
          <div class="container">
            <div class="columns" style={Columstyle}>
              <div class="column is-6-mobile is-offset-3-mobile is-4-desktop is-offset-1-desktop">
                <img style={Imgstyle} src={logo} />
              </div>
              <div class="column has-text-centered is-10-mobile is-offset-1-mobile is-5-desktop is-offset-1-desktop">
                <h1 class="title is-3">Welcome to Pikapedia</h1>
                <p>Discover Pokemon world, explore and find Pokemon wherever you are!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

	  <section class="hero is-medium">
        <div class="hero-body has-text-centered">
            <h1 class="title is-3">What is Pikapedia?</h1>
            <div class="columns" style={Columstyle}>
              <div class="column is-12-mobile is-6-desktop is-offset-3-desktop">
                <img src={Pikachu} alt="" style={{width:'70%', maxWidth:'200px'}} />
                <p>Pikapedia is an encyclopedia about Pokemon to see the details of each character in Pokemon. Pikapedia is easy to use, light and fast. You can see various characters in Pokemon along with the statistics of each character.</p>
              </div>
            </div>
          </div>
      </section>

	  <section class="hero is-medium is-success">
        <div class="hero-body has-text-centered">
            <h1 class="title is-3">Sponsor</h1>
            <div class="columns" style={Columstyle}>
              <div class="column is-12-mobile is-8-desktop is-offset-2-desktop">
              <img src={KE} alt="" />
              </div>
            </div>
            <h1 class="title is-3">Build with</h1>

           <div class="columns" style={Columstyle}>
              <div class="column is-10-mobile is-offset-1-mobile is-2-desktop is-offset-4-desktop">
                <img style={{width: '70%', maxWidth:'100px'}} src="https://bulma.io/images/bulma-logo.png" alt="" />
              </div>

              <div class="column is-10-mobile is-offset-1-mobile is-2-desktop is-offset-4-desktop">
                <img style={{width: '70%', maxWidth:'100px'}} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
              </div>

             <div class="column is-10-mobile is-offset-1-mobile is-2-desktop is-offset-4-desktop">
                <img style={{width: '70%', maxWidth:'100px'}} src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" />
              </div>

              <div class="column is-10-mobile is-offset-1-mobile is-2-desktop is-offset-4-desktop">
                <img style={{width: '70%', maxWidth:'100px'}} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
              </div>




            </div>


          </div>
      </section>
        </React.Fragment>
    )
}

export default Home;
