import React, { Component } from 'react';

class Counter extends Component {

    state = {  
        count: this.props.value
    };

    // constructor() {
    //     super();
    //     this.handleIncreament = this.handleIncreament.bind(this);
    // }

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There asre no tags</p>;

    //     return <ul>
    //                 { this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //            </ul>
    // }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() { 
    
        let classes = this.getBadgeClasses();
        return (
            <div>
                <h4>Product: { this.props.id }</h4>
                <button onClick = {this.handleIncrement} className="btn btn-secondary btn-sm"> + </button> 
                <span className = {this.getBadgeClasses()}> { this.formatCount() } </span>
                <button onClick = {this.handleDecrement} className="btn btn-secondary btn-sm"> - &nbsp; </button>
            </div>
          );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;