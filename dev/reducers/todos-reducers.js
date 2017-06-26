const initialState = {
  activeFilter: 'SHOW_ALL',
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
    case 'FILTER_TASKS':
      return Object.assign({}, state, {
        activeFilter: action.filter
      });
    case 'COMPLETE_TASK':
      return Object.assign({}, state, {
        todos: state.todos.map((todo)=>{
          if(todo.id === action.taskId) {
            todo.completed = true;
          }
          return todo;
        })
      });

    case 'DELETE_TASK':
      return Object.assign({}, state, {
        todos: state.todos.filter((item)=> item.id !== action.taskId)
        });
    default:
      return state;
  }
}

export default todosReducers;