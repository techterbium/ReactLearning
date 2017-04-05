import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
    render: function()
    {
        return (
            <div>Hello, {this.props.greetPerson}!!</div>
        )
    }
});


ReactDOM.render(
<div>
    <HelloWorld greetPerson="BatMan" />
</div>,
    document.querySelector("#container")

);
