import React, {Component} from 'react';
import Navigation from './Navigation.js'
import Main from './Main.js'

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return  <div>
              <Navigation/>
              <Main/>
            </div> 
  }
}

export default App;