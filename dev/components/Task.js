import React from 'react';
import TaskActions from '../containers/task-actions';

class Task extends React.Component {
	render() {
		return (
			<li>
				<div className="task">
					<div className="task-detail">
						<h3 className="controlled-text" title={this.props.task.text}>{this.props.task.text}</h3>
						<p className="controlled-text" title={this.props.task.desc}>{this.props.task.desc}</p>
					</div>
					<TaskActions taskId={this.props.task.id} isCompleted={this.props.task.completed}/>
				</div>
	    	</li>
	    )
	}
}

export default Task;