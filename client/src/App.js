import React, {Component} from 'react';
import Nav from './Nav.js'
import Main from './Main.js'
import {Button} from 'semantic-ui-react'
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return  <div>
              <Main/>
            </div>
  }
}

export default App;
