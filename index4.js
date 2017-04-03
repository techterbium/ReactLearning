var mainPage = document.querySelector("#container");

var colors = ["#abcdef", "#aabbcc", "#ddeeff","#393E41", "#E94F37", "#1C89BF", "#A1D363",
              "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

var Circle = React.createClass(
    {
        render: function()
        {
            var circleStyle =
                {
                    padding: 10,
                    margin: 20,
                    display: "inline-block",
                    backgroundColor: this.props.bgColor,
                    borderRadius: "50%",
                    width: 100,
                    height: 100
                };
            return (
                <div style={circleStyle}>
                </div>
            );
        }
    }
);

var CircleDisplay = React.createClass({

    getInitialState: function()
    {
      return {
          colorCounter: 0
      }
    },

    render: function()
    {
        var buttonStyle =
        {
            fontSize: "1em",
            width: "30%",
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };
        return (
        <div>
            <Circle bgColor={colors[this.state.colorCounter]} />
            <button onClick={this.increaseColorCounter} style={buttonStyle}> Click Me! </button>
        </div>
        )
    },
    increaseColorCounter: function()
    {
        var counter = this.state.colorCounter + 1;
        this.setState(
        {
            colorCounter : counter % colors.length
        }
        );
    }
});

ReactDOM.render(
    <div>
    <CircleDisplay />
    </div>,
    mainPage
);
