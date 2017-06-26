import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterTasks} from '../actions/actions';

const filters = {
  'SHOW_ALL' : 'All',
  'SHOW_ACTIVE': 'Active',
  'SHOW_COMPLETED': 'Completed'
}

class FilterTasks extends React.Component {

	handleFilter(e) {
		let target = $(e.target);
		this.props.filterTasks(target.data('filter'));
	}

	render() {
		return (
			<div className="dropdown filter-tasks">
			  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			    <span className="filter-name">{filters[this.props.activeFilter]}</span>
			    <span className="caret"></span>
			  </button>
			  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" onClick={(e)=> this.handleFilter(e)}>
			    <li><a href="#" className="js-filter" data-filter="SHOW_ALL">All</a></li>
			    <li><a href="#" className="js-filter" data-filter="SHOW_ACTIVE">Active</a></li>
			    <li><a href="#" className="js-filter" data-filter="SHOW_COMPLETED">Completed</a></li>
			  </ul>
		    </div>
		)
	}
}

function mapStateToProps(state) {
	return {activeFilter: state.tasks.activeFilter}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({filterTasks: filterTasks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTasks);