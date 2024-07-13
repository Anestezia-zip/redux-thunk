// import { ThunkAction } from "redux-thunk"
// import { RicknMortyService, dataActionTypes } from "../actions/dataActions.ts"



// export type RicknMortyActionsType = ReturnType<
//     PropertiesTypes<typeof ricknMortyActions>
// >

// export type RicknMortyThunkType = ThunkAction<void, AppStateType, null, RicknMortyActionsType>

// export const ricknMortyActions = {
//     getFirstPage: (data: Characters) => ({type: 'GET_FIRST_PAGE', data}),
//     getNextPage: (data: Characters) => ({type: 'GET_NEXT_PAGE', data})
// }

// export const getRMThunk = ():RicknMortyThunkType => (dispatch) => {
//     RicknMortyService.getCharacters(dispatch)
// }

// export const getRMNextPageThunk = (url):RicknMortyThunkType => (dispatch) => {
//     RicknMortyService.getNextCharacters(dispatch, url)
// }

// const ricknMortyReducer = (state=initialState, action) => {
//     switch(action.type){
//         case 'GET_NEXT_PAGE':
//             return { 
//                 ...state, 
//                 info: action.data.info,
//                 results: [
//                     ...state.results,
//                     ...action.data.results 
//                 ]
//             }
//         case 'GET_FIRST_PAGE':
//             return { 
//                 ...state, 
//                 info: action.data.info,
//                 results: action.data.results 
//             }
//         default:
//             return state
//     }
// }

// export default ricknMortyReducer

