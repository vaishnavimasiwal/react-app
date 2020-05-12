import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to ="/" className="navbar-brand"><h3>Home</h3></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to ="/products" className="nav-item nav-link">Products</Link>
                        <Link to ="/contactus" className="nav-item nav-link">Contact Us</Link>
                        <Link to ="/checkout" className="nav-item nav-link">Checkout</Link>
                    </div>
                </div>
                </nav>
                {this.props.children}
            </div> 
        );
    }
}
 
export default Navbar;