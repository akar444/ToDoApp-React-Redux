import React from 'react';


class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<h2>ToDo Tasks</h2>
				<button className="add-task pull-right" onClick={()=> this.props.showModal()}><span>+</span> Add</button>
			</div>
		)
	}
}

export default Header;