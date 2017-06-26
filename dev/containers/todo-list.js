import React from 'react';
import {connect} from 'react-redux';
import Task from '../components/Task';

class ToDoList extends React.Component {
	allTasks() {
		let tasks = [],
		    activeFilter;
		switch(this.props.activeFilter) {
			case 'SHOW_ACTIVE':
				tasks = this.props.tasks.filter((task)=> !task.completed)
				break;
			case 'SHOW_COMPLETED':
				tasks = this.props.tasks.filter((task)=> task.completed)
				break;
			default:
			    tasks = this.props.tasks;
		}
		return tasks.map((task)=> {
			return <Task key={task.id} task={task} />
		})
	}
	render () {
		return (
			<ul className="tasks-list">
				{this.allTasks()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		tasks: state.tasks.todos,
		activeFilter: state.tasks.activeFilter
	}
}

export default connect(mapStateToProps)(ToDoList);