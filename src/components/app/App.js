import { Component } from 'react';

import AppDelimeter from '../app-delimiter/appDelimiter';

import './App.scss';

class App extends Component {
  // const color = ['white', 'black']

  changeColor = color => {
    return color;
  }

  render() {
    return (
      <div className="container" style={{backgroundColor: 'grey'}}>
        Cofee!
        <button>drink me!</button>
        <img src="../../img/Vector.svg" alt="coffee logo" />
  
        <AppDelimeter changeColor={this.changeColor('red')}/>
        <AppDelimeter changeColor={this.changeColor('orange')}/>
        <AppDelimeter changeColor={this.changeColor('yellow')}/>
        <AppDelimeter changeColor={this.changeColor('green')}/>
        <AppDelimeter changeColor={this.changeColor('aqua')}/>
        <AppDelimeter changeColor={this.changeColor('blue')}/>
        <AppDelimeter changeColor={this.changeColor('violet')}/>
      </div>
    );
  }
}

export default App;
