import React, { Component } from 'react';

export default class SearchBar extends Component{
    //To set up our state, we need to initialize it inside of a constructor
    constructor(props){
        super(props);
        
        this.state={ term: ''}
        //Binding 'this' preserves the context and allows us to use 'this' in our function
        this.onInputChange = this.onInputChange.bind(this)
    }
    
    onInputChange(event) {
        console.log(event.target.value)
        this.setState({term: event.target.value})
    }
    
    onFormSubmit(event){
        //tells the browser to not submit the form
        event.preventDefault();
    }
    
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder="Get a five-day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Submit </button>
                </span>
            </form>
            );
    }
}