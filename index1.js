var LightCounter = React.createClass
(
    {
        getInitialState: function()
        {
            return {
                strikes : 0
            };
        },
        componentDidMount: function()
        {
          setInterval(this.timerTick, 1000);
        },
        timerTick: function()
        {
          this.setState({
              strikes: this.state.strikes + 100
          });
        },
        render: function()
        {
            return(
            <h1>{this.state.strikes}</h1>
            );
        }
    }
);


var LightDisplay = React.createClass
(
    {

        changeColor: function()
        {

        },

        componentDidMount: function()
        {
          setInterval(this.changeColor, 1000);
        },

        render : function()
        {
            var divStyle =
            {
                width: 250,
                textAlign: "center",
                backgroundColor: "black",
                padding: 40,
                fontFamily: "sans-serif",
                color: "#999",
                borderRadius: 50
             };

           var textStyles = {
            emphasis: {
              fontSize: 38,
              ...commonStyle
            },
            smallEmphasis: {
              ...commonStyle
            },
            small: {
              fontSize: 17,
              opacity: 0.5,
              ...commonStyle
            }
          }
         var commonStyle = {
            margin: 0,
            padding: 0
          }

            return(
                <div style={divStyle}>
                    <LightCounter />
          <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
          <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
          <p style={textStyles.small}>(since you loaded this example)</p>
                </div>
            );
        }
    }
);

ReactDOM.render(<LightDisplay/>,
    document.querySelector("#container"));
