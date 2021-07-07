import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

class App extends Component {
  state = {
    reverse: true,
  };

  handlerClick = () => {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  };
  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button type="button" onClick={this.handlerClick}>
            Reverse
          </button>
        </header>
      </div>
    );
  }
}
export default App;
