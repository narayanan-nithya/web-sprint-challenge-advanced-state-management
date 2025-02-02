import { SMURF_LOAD, SMURF_SUCCESS, SMURF_FAILED, SMURF_ERROR, SMURF_ADD} from "../actions/index.js"
export const initialState = {
   smurfs:  [{
          id:"253009",
          name:'Freshie',
          position:'Gym Instructor',
          nickname: 'Fre',
          description: 'Best gym instructor for the beautiful smurf village. '
    }],
    isLoading: false,
    fetchError: "",
    formError: false

};

const reducer = ( state = initialState, action )=> {
    switch (action.type){
        case (SMURF_LOAD):
            return({
                ...state,
                isLoading: true,
                
            });
        case (SMURF_SUCCESS):
            return({
                ...state, 
                smurfs: action.payload,
                isLoading: false,

            });
        case (SMURF_FAILED):
            return({
                ...state, 
                isLoading: false,
                fetchError: action.payload
            });
        case (SMURF_ADD):
            const freshSmurf = {
                ...state,
               smurfs: [...state.smurfs, action.payload]
            };
            return {
                ...state,
                smurfs: [...state.smurfs, freshSmurf]
            };
        case (SMURF_ERROR):
        return ({
            ...state,
            isLoading: false,
            formError: action.payload,
        });

        default:
            return state;
    };
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.