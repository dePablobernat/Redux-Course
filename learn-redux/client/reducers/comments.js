function comments(state = [], action){
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post witha new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

function postComments(state = [], action){
  switch (action.type) {
    case 'ADD_COMMENT':
      // return exisiting state + new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
      // start
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      // statements_def
      return state;
  }
  return state;
}
export default comments;