import React, { Component } from 'react';
import Navbar from './navbarComponent';

class ContactForm extends Component {
    constructor () {
    super();
        this.state = {
            formControls: {
                email: {
                  value: ''
                },
                number: {
                  value: ''
                },
                query: {
                  value: ''
                }
            }
        }
      
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
        console.log(this.state.formControls.email.value);
        console.log(this.state.formControls.number.value);
        console.log(this.state.formControls.query.value);
    }
    
    changeHandler = event => {
      
        const name = event.target.name;
        const value = event.target.value;
      
        this.setState({
          formControls: {
              ...this.state.formControls,
              [name]: {
              ...this.state.formControls[name],
              value
            }
          }
        });
    }
    render() { 
        return ( 
            <div>
                <Navbar />
            
                <div style={{width: 500,margin: "auto",marginTop: 30}}>
                    <h3>Contact Form</h3>
                    <form onSubmit={this.handleSubmit}>
<div className="form-group">
<input type="email" 
       name="email" 
       placeholder="Email"
       className="form-control"
       value={this.state.formControls.email.value} 
       onChange={this.changeHandler} 
/>
</div>

<div className="form-group">
<input type="text" 
       name="number" 
       placeholder="Contact no"
       className="form-control"
       value={this.state.formControls.number.value} 
       onChange={this.changeHandler} 
/>
</div>

<div className="form-group">
<textarea type="text" 
       name="query" 
       placeholder="Please enter your query"
       max="5"
       className="form-control"
       value={this.state.formControls.query.value} 
       onChange={this.changeHandler} 
/>
</div>

<div className="form-group">
    <button className="btn btn-primary">Submit</button>
</div>

</form>      
                </div> 
                </div>
                );
            }
}
 
export default ContactForm;