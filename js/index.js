"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// <ColorPicker/>
var ColorPicker = React.createClass({
  displayName: "ColorPicker",
  getInitialState: function getInitialState() {
    return {
      color: ''
    };
  },
  changeColor: function changeColor(event) {
    this.setState({
      color: event.target.value
    });
  },
  render: function render() {
    var backgroundStyles = {
      background: this.state.color
    };

    return React.createElement(
      "div",
      { style: backgroundStyles, className: "background" },
      React.createElement(Input, {
        className: "center input",
        onChange: this.changeColor,
        placeholder: "Type a color..."
      })
    );
  }
});

// <Input/>
var Input = React.createClass({
  displayName: "Input",
  render: function render() {
    return React.createElement("input", _extends({ type: "text" }, this.props));
  }
});

ReactDOM.render(React.createElement(ColorPicker, null), document.querySelector('#app'));