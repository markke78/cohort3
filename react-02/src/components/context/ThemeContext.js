import React from "react";
const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontColor: "black",
      setFontColor: this.setFontColor
    };
  }
  setFontColor = event => {
    this.setState({ fontColor: event.target.value });
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {/* use this.props.children to indicate children compoments such as LinkedList, FIFO components */}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContextProvider, ThemeContext };
