import React from 'react';
import {connect} from 'react-redux';
import Task from '../components/Task'

class ToDoList extends React.Component {
	allTasks() {
		return this.props.tasks.map((task)=> {
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
		tasks: state.tasks.todos
	}
}

export default connect(mapStateToProps)(ToDoList);