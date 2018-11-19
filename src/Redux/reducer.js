import wizardsArray from './wizards'
const initialState =
{wizards: wizardsArray
}

//State is an object
//Action is an object
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WIZARD":
      return {...state, wizards: [...state.wizards, action.payload]}
    case "REMOVE_WIZARD":
      const newWizards= state.wizards.filter((wizardObj) => wizardObj !== action.payload)
      return {...state, wizards: newWizards }
    default:
      return state
  }
}

export default reducer
