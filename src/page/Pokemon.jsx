import React from "react";
import PokemonList from '../containers/pokemon-list';
import PokemonDetails from '../containers/pokemon-detail';

function Pokemon () {
    return (
        <React.Fragment>
	  <div className="columns has-text-centered is-mobile">
	    <div style={{overflowY:'scroll',height:'400px'}} className="column is-5 ">
								<PokemonList />
							</div>
							<div className="column card is-5 is-offset-1">
								<PokemonDetails />
							 </div>
					</div>
        </React.Fragment>
    )
}

export default Pokemon;
