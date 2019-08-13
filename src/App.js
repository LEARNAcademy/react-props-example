import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      jokes: [
        "Chuck Norris counted to infinity... Twice.",
        "Chuck Norris has already been to Mars; that's why there are no signs of life there.",
        "There is no theory of evolution. Just a list of animals Chuck Norris allows to live.",
        "Chuck Norris uses pepper spray to spice up his steaks."
      ]
    }
  }
  
  render(){
    return (
      <React.Fragment>
        <h1>Chuck Norris doesn't tell jokes.  You just laugh.</h1>
        
        <p>{this.state.jokes[0]}</p>
      </React.Fragment>
  
    );
  }
}

export default App;
