import axios from 'axios';

export const SMURF_LOAD ='SMURF_LOAD';
export const SMURF_SUCCESS ='SMURF_SUCCESS';
export const SMURF_FAILED ='SMURF_FAILED';
export const SMURF_ERROR ='SMURF_ERROR';
export const SMURF_ADD ='SMURF_ADD';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//action for fetching smurf data
export const fetchSmurfs = () => {
    return ( dispatch ) => {
        dispatch ({type: SMURF_LOAD});

        axios.get('http://localhost:3333/smurfs')
            .then( resp =>{
                dispatch({type: SMURF_SUCCESS, payload: ( resp.data) });
            })
            .catch ( err => {
                dispatch({type: SMURF_FAILED, payload: err});
            });
    };

};

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
// action for new smurf addition
export const addNewSmurf = (freshSmurf) =>{
    return ({
        type: SMURF_ADD,
        payload: freshSmurf,
    });
}

//3. Add a standard action that allows us to set the value of the error message slice of state.
//action for error handling during smurf addition. 
export const errSmurf = (error) =>{
    return ({
        type: SMURF_ERROR,
        payload: error,
    });
};
