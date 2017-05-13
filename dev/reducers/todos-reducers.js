const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
};
const todosReducers = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        todos:[...state.todos, {
          id: action.taskId,
          text: action.text,
          desc: action.desc,
          completed: false
        }]
      });

    default:
      return state;
  }
}

export default todosReducers;