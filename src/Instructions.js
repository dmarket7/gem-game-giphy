import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="row">

				<div className="col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title text-center">Instructions</h3>
						</div>
						<div className="panel-body">
							<p><small>{"You will be given a random number at the start of the game. There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to random number, you lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time when the game starts, the game will change the values of each crystal"}</small></p>
						</div>
					</div>
				</div>

			</div>
    );
  }
}

export default Instructions;
