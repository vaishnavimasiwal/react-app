import React, { Component } from 'react';
import Counter from './counterComponent';
import Navbar from './navbarComponent';
import { Route, Switch } from 'react-router-dom';
import ContactForm from './formComponent';
import Products from './productComponent';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0, category: "Milk"},
            { id: 2, value: 0, category: "Bread"},
            { id: 3, value: 0, category: "Vegetable"},
            { id: 4, value: 0, category: "Fruits"},
        ]
     }

    // Routing
    render() { 
        return ( 
            <div>
                <Switch>
                    <Route path="/contactus" component = {ContactForm} />
                    <Route path="/products" component = {Products} />
                    <Route path="/" >
                    <Navbar />
                    <div style = {{ marginTop: 20}}>
                        { this.state.counters.map(counter => 
                        <Counter key={counter.id} value={counter.value} id={counter.id} category={counter.category}/>)
                        }
                    </div>
                    </Route>
                </Switch>
            </div>
         );
    }
}
 
export default Counters;