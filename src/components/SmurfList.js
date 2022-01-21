import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';


//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.

 const SmurfList = (props)=> {
     const { smurfs, isLoading } = props;
    
    if (isLoading === true) {
        return <h1>Loading...</h1>;
    }
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
    return(<div className="listContainer">
        {smurfs.map (smurf => (
        <Smurf smurf={smurf} />
        ))}
    </div>);
}
//3. Replace the static isLoading variable with the state loading variable.

const mapStateToProps = state =>{
    return ({
        smurfs: state.smurfs,
        isLoading: state,
    });
};

export default connect (mapStateToProps) (SmurfList);
