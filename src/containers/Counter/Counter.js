import React, { Component } from 'react';
import { connect } from "react-redux"

import * as actionCreators from "../../store/actions/index"

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    //receives from redux
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                {/* reference to the prop from the mapStateToProps */}
                <CounterOutput value={this.props.ctr} />
                {/* the clicked prop references to the action (which is essentially a prop) and is passed as a prop */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                {/* the function passes the result of the counter as an argument */}
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li 
                            key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}
                        >{strResult.value}</li>
                    ))} 
                </ul>
            </div>
        );
    }
}

//do this after the class component
const mapStateToProps = state => {

    //defining prop names
    //remember, this is how the reducer will read the data coming from this component. 
    //in the reducer, it will read it as state.ctr.counter
    //to pass this through the component, use this.props.ctr so the reducer can read it as state.ctr.counter
    return {
        //because we combined our reducers using the combineReducers function, we must take the new object into consideration
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

//define/pass the actions
//we're calling the dispatch action as the argument
const mapDispatchToProps = dispatch => {
    return {
        //we imported the action creater (which is a function!)
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        //can send other properties with the action object
        //you do have to have a type property - this is not optional
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        //passing result property to reducer
        //this is where you will pass any arguments that the reducer will need to read
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
}

//connect is a function that returns a function, that takes a component as input
//returns a higher order component
//we will execute the function on Counter
//We pass 2 pieces of info to connect
//1st piece - which slice of the state I want to get in the container
//2nd piece - which action I need for this container (YOU CAN USE NULL IF THIS IS NOT NEEDED)
//now connect gives us access to the container and the ctr property
export default connect(mapStateToProps, mapDispatchToProps)(Counter);