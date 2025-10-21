import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  handleModeToggle = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const appClass = this.state.isDarkMode ? "App dark" : "App light";

    return (
      <div className={appClass}>
        <header>
          <h1>Shopping List</h1>
          <button onClick={this.handleModeToggle}>
            {this.state.isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </header>
        <ShoppingList items={itemData} />
      </div>
    );
  }
}

export default App;
