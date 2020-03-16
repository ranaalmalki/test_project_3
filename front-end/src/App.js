import React from 'react';
import apiURL from'./APIconfig';

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      Tickets:[], 
    };
    console.log('MY API :  ',apiURL);

  }

  setTickets = (Tickets) =>{
    this.setState( {Tickets} );
  }


  render(){
    return (
      <div>
        <p> Welcome :) ! </p>
       
      </div>
    );
  }
}
