import React from 'react';
import {completeTask, deleteTask} from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TaskActions extends React.Component {
	constructor() {
		super()
		this.state = {
			compText: 'Complete'
		}
	}

	compTask(taskId) {
		if(!this.props.isCompleted) {
			this.props.completeTask(this.props.taskId);
			this.setState({compText: 'Completed'});
		}
	}

	render() {
		return (
			<div className="task-actions">
				<button className="btn btn-default action delete" onClick={()=> this.props.deleteTask(this.props.taskId)}>Delete</button>
				<button className="btn btn-default action complete" onClick={()=> this.compTask()}>{this.state.compText}</button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({deleteTask: deleteTask, completeTask: completeTask}, dispatch);
}

export default connect(null, mapDispatchToProps)(TaskActions);