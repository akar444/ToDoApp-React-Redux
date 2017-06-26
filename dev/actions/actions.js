export const addTask = (text,desc)=> {
	return {
		type: 'ADD_TASK',
		taskId: new Date().getTime(),
		text,
		desc
	}
}

export const filterTasks = (filter)=> {
	return {
		type: 'FILTER_TASKS',
		filter: filter
	}
}

export const completeTask = (id)=> {
	return {
		type: 'COMPLETE_TASK',
		taskId: id
	}
}

export const deleteTask = (id)=> {
	return {
		type: 'DELETE_TASK',
		taskId: id
	}
}
