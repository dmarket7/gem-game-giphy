import React, { Component } from 'react';

class ScoresAndCrystals extends Component {
  render() {
    return (
      <div className="row">

				<div className="col-lg-3">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title text-center">{"Target Score"}</h3>
						</div>
						<div className="panel-body">
							<h3 className="text-center">{this.props.state.targetScore}</h3>
						</div>
					</div>
				</div>

				<div className="col-lg-3">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title text-center">{"Your Score"}</h3>
						</div>
						<div className="panel-body">
							<h3 className="text-center">{this.props.state.currentScore}</h3>
						</div>
					</div>
				</div>

				<div className="col-lg-6">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title text-center">{"Crystal Selection"}</h3>
						</div>
						<div className="panel-body text-center">
							<img src={require("./images/blue.png")} alt={"blue"} onClick={this.props.handler(this.props.state.blue.value)}/>
							<img src={require("./images/green.png")} alt={"green"} onClick={this.props.handler(this.props.state.green.value)}/>
							<img src={require("./images/red.png")} alt={"red"} onClick={this.props.handler(this.props.state.red.value)}/>
							<img src={require("./images/yellow.png")} alt={"yellow"} onClick={this.props.handler(this.props.state.yellow.value)}/>
						</div>
					</div>

				</div>

			</div>
    );
  }
}

export default ScoresAndCrystals;
