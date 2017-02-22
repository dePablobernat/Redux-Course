// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action){
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log("INCREMENTING LIKES!!")
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we are updating
        {...state[i], likes: state[i].likes + 11},
        ...state.slice(i+1), // after the one we are updating
      ]
    default:
      // return updated state
      return state;
      break;
  }
}

export default posts;