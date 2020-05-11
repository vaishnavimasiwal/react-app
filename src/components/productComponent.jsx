import React, { Component } from 'react';
import Navbar from './navbarComponent';

class Products extends Component {

    state={
        list: [
            { id: 1, value: 'Bread'},
            { id: 2, value: 'Milk'},
            { id: 3, value: 'Vegetables'},
            { id: 4, value: 'Fruits'},
        ]
    }

    renderList() {
        if(this.state.list.length === 0) return <p>Nothing to show</p>;

        return <ul>
                    { this.state.list.map((ulist) => <li key={ulist.id}> {ulist.value} </li>)}
               </ul>
    }

  
//  updatedList = this.state.list.map((ulist)=>{ 
//     return <li key={ulist.id}> {ulist.value} </li>; 
// });

    render() { 
        
        return ( 

        <div>
            <Navbar />
            <h3>List of Products</h3>
            <ul>
                {this.renderList()}
            </ul>
        </div> 
        );
    }
}
 
export default Products;