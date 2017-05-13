import React from 'react';
import ToDoList from '../containers/todo-list';
import Header from './Header';
import AddTask from '../containers/add-task';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		}
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}
	showModal() {
		this.setState({showModal: true})
	}
	hideModal() {
		this.setState({showModal: false})
	}

	render() {
	  return (
	  	<div className="container-fluid">
	        <Header showModal={this.showModal}/>
	        <ToDoList />
	        {this.state.showModal ? <AddTask handleModal={this.hideModal}/> : null}
	    </div>
	  );
	}
}

export default App;