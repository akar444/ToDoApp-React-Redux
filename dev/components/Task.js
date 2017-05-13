import React from 'react';

class Task extends React.Component {
	render() {
		return (
			<li>
				<div className="task">
					<h3 className="controlled-text" title={this.props.task.text}>{this.props.task.text}</h3>
					<p className="controlled-text" title={this.props.task.desc}>{this.props.task.desc}</p>
				</div>
	    	</li>
	    )
	}
}

export default Task;