  const API =  'http://localhost:3000'

  export const getExemptions = () => {
    return dispatch => {
      fetch(API + "/exemptions")
      .then(response => response.json())
      .then(exemptions => {
          dispatch({type:'SET_EXEMPTIONS', exemptions})
      })
      }
    }

  export const addExemption = (exemption) => {
    return dispatch => {
    fetch(API + "/exemptions", {
        method:'POST', 
        headers:{
        'Content-Type':'application/json',
      },
        body: JSON.stringify(exemption),
      })
      .then(response => response.json())
      .then(NewExemption => {
        dispatch({type:'ADD_EXEMPTION', NewExemption})
      })
      .catch(error => console.log(error))
    }
  }

  export const deleteExemption = (id) => {
    return dispatch => {
    fetch(`http://localhost:3000/exemptions/${id}`,{
        method:'DELETE', 
        headers:{
          'Content-Type':'application/json',
        },
      })
      .then(exemption => 
      dispatch({type:'DELETE_EXEMPTION', id})  
      )
      .catch(error => console.log(error))
    }
  }

  export const refreshExemption = () =>{
    return dispatch =>{
     return  (dispatch({type:'REFRESH'}))
    }
  }

  export const searchItem = (search) =>{ 
  return dispatch =>{
    return(dispatch({type:"SEARCH_FORM_STATE", search}))
  }
  }

export const likeMe = () => {
  return dispatch =>{
    return(dispatch({type:"LIKE ME"}))
  }
}



