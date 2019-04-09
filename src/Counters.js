import React, { Component } from 'react';

class Counters extends Component {
  render() {
    return (
      <div className="row">

				<div className="col-lg-6">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title text-center">{"Win Count"}</h3>
						</div>
						<div className="panel-body">
							<h3 className="text-center" id="win-count">{this.props.winCount}</h3>
						</div>
					</div>
				</div>

				<div className="col-lg-6">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title text-center">{"Loss Count"}</h3>
						</div>
						<div className="panel-body">
							<h3 className="text-center" id="loss-count">{this.props.lossCount}</h3>
						</div>
					</div>

				</div>
			</div>
    );
  }
}

export default Counters;
