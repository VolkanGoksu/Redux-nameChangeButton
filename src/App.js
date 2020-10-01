import React, { Component } from 'react';

import {connect} from 'react-redux';
import {userUpdate} from './actions/userAction';

class App extends Component {
  constructor(props){
    super(props);
     this.onUserUpdate=this.onUserUpdate.bind(this)
  }
  onUserUpdate(){
    this.props.onUserUpdate('Ayaz');
  //  this.props.dispatch(userUpdate('Ayaz')); //mapDispatchToprops kullandıgım için iptal
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>{this.props.user}</h1>
        <button onClick={this.onUserUpdate}>İsim Değiştirme Butonu</button>
      </div>
    );
  }
}

const mapDispatchToProps={
  onUserUpdate:userUpdate
}
const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
