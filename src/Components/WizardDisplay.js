import React from 'react'
import Wizard from './Wizard'
import {connect} from 'react-redux'

class WizardDisplay extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {this.props.wizards.map((wizardObj) => <Wizard key={wizardObj.name} wizard={wizardObj}></Wizard>)}
        </ul>
      </div>
    )
  }
}



//Getter, reader
//The object that is returned from this will be passed as props
const mapStateToProps = (state) => {
  return {
    wizards: state.wizards
  }
}

const funFunction = connect(mapStateToProps)
const funComponent = funFunction(WizardDisplay)
export default funComponent
