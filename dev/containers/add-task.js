import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../actions/actions';

class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: {
				name: '',
				desc: ''
			}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	hideModal() {
		let element = ReactDOM.findDOMNode(this);
		$(element).modal('hide');
	}

	componentDidMount() {
		let element = ReactDOM.findDOMNode(this);
		$(element).modal('show');
		$(element).on('hidden.bs.modal', this.props.handleModal)
	}


	handleSubmit(e) {
		e.preventDefault();
		let task = {
			name: this.taskName.value,
			 desc: this.taskDesc.value
		};
		this.setState({taks: task});
		this.props.addTask(task.name, task.desc);
		this.hideModal();
	}

	render() {
		return (
			<div id="add-task-modal" className="modal fade" tabIndex="-1" role="dialog">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title">Add a task</h4>
			      </div>
			      <div className="modal-body">
			      	<form>
				        <input className="task-name" ref={(inp)=> this.taskName=inp}/>
				        <textarea className="task-description" ref={(inp)=> this.taskDesc=inp}></textarea>
			        </form>
			      </div>
			      <div className="modal-footer">
			        <button type="submit" className="btn btn-primary" onClick={(e)=>this.handleSubmit(e)}>Add</button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}

	propTypes : {
		handleModal : React.PropTypes.func.isRequired
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addTask: addTask}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTask);



