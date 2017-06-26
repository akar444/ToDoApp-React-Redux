import React from 'react';
import FilterTasks from '../containers/filter-tasks';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<h2>ToDo Tasks</h2>
				<div className="actions-holder pull-right">
					<FilterTasks />
    				<button className="add-task pull-right" onClick={()=> this.props.showModal()}><span>+</span> Add</button>
				</div>
			</div>
		)
	}
}

export default Header;