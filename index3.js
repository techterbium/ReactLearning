var mainPage = document.querySelector("#container");

var Counter = React.createClass({
    render: function()
    {
        var textStyle =
            {
                fontSize: 72,
                fontFamily: "sans-serif",
                color: "#333",
                fontWeight: "bold"
            };
        return (
            <div style={textStyle}>
            {this.props.counterNumber}
            </div>
        );
    }
});


var CounterDisplay = React.createClass({

    getInitialState: function()
    {
        return  {
            countNumber: 0
        };
    },

    render: function()
    {
        var displayStyle =
        {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 50,
            textAlign: "center"
        };
        var buttonStyle =
        {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };
        return (
            <div style={displayStyle}>
                <Counter counterNumber={this.state.countNumber} />
                <button onClick={this.increase} style={buttonStyle}>+</button>
            </div>
            )
    },
    increase: function(e)
    {
        this.setState(
            {
                countNumber: this.state.countNumber + 1
            }
        );
    }
});

ReactDOM.render(

    <div>
        <CounterDisplay />
    </div>,
    mainPage

);
