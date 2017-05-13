export function addTask(text,desc) {
	return {
		type: 'ADD_TASK',
		taskId: new Date().getTime(),
		text,
		desc
	}
}
