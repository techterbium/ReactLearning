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

var destination = document.querySelector("#container");
var yellowCircle = <Circle bgColor = "#F9C240" />;

var colors = ["#abcdef", "#aabbcc", "#ddeeff","#393E41", "#E94F37", "#1C89BF", "#A1D363",
              "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

var randomColor = Math.floor(Math.random() * colors.length);
var randomCircle = <Circle bgColor={colors[randomColor]}/>;

function getRandomNumber()
{
    return Math.floor(Math.random() * colors.length);
}
function randomCirclef()
{
    var randomCircle = <Circle bgColor={colors[getRandomNumber()]}/>;
    return randomCircle;
}

function listOfCircles()
{
    var circles = [];
    for(var i = 0; i< colors.length; i++)
    {
        circles.push(
            <Circle key={i+colors} bgColor={colors[i]} />);
            }
            return circles;
            }
            ReactDOM.render(
            <div>
            {yellowCircle}
            {randomCircle}
            {randomCirclef()}
    {listOfCircles()}
    </div>,
    destination
    );
