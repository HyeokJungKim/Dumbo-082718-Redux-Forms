import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../Redux/actionCreators'

class WizardForm extends Component {

  state={
    name: "",
    house: "",
    redux: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const wizard = this.state
    this.props.addWizard(wizard)
    console.log("Submitted!");
  }

  render() {
    const {name, house, redux} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" value={name} onChange={this.handleChange}/>
        <label>
          House
        </label>
          <input type="text" name="house" value={house} onChange={this.handleChange}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" value={redux} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }

}

//Return value is object that gets assigned as props

// const mapDispatchToProps = (dispatch) => {
//   return{
//     addWizard: (wizardObj) => {dispatch({type: "ADD_WIZARD", payload: wizardObj})}
//   }
// }

//The destructuring in the second argument takes in an ActionCreator and dispatches the result
export default connect(null, {addWizard})(WizardForm);
