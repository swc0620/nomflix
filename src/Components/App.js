import React from 'react';
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
// code below will search index.js file inside of 'Header' folder
// import Header from "Components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router />
        <GlobalStyles />
      </div>
    )
  }
}

export default App;
