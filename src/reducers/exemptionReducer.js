 
const exemptionReducer = (state= {exemptions:[], newExemptions:[]}, action) => {

    switch (action.type) {
    case 'SET_EXEMPTIONS':
    console.log(action)
    return {
            ...state,
            exemptions: action.exemptions, 
        }

    case 'ADD_EXEMPTION':
        console.log("IN THE ADD EXEMPTION", action) 
        return{
            ...state, 
            exemptions:[...state.exemptions,action.NewExemption],
            newExemptions:[...state.newExemptions,action.NewExemption] 
        }

    case 'DELETE_EXEMPTION':
        console.log("IN the delete exemption reducer", action)
        return{
            ...state, 
            exemptions: state.exemptions.filter(exemption => exemption.id !== action.id), 
            newExemptions:state.newExemptions.filter(exemption => exemption.id !== action.id)
        }

    case 'REFRESH':
        console.log("in the refresh reducer")
        return{
            ...state,
            exemptions:[...state.exemptions],
            newExemptions:[] 

        }

    default:
        return state;
    }
  }

  export default exemptionReducer 