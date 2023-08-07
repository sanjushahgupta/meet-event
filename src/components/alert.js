import { Component } from 'react';

    class Alert extends Component{
        constructor(props) {
                super(props)
                this.color = null;
                this.bgColor = null;
        }

        getStyle = () => {
                return {
                    color: this.color,
                    backgroundColor: this.bgColor,
                    textAlign: "center",
                    padding: "8px"
                }

        }

        render() {
                return (
                <div className='Alert'>
                <p style={this.getStyle()}>
                {this.props.text}
                </p>
                </div>
            )
        }

    }

class InfoAlert extends Alert{
    constructor(props) {
        super(props);
        this.color = 'rgb(0, 0, 255)'; // blue
        this.bgColor = 'rgb(220, 220, 255)'; // light blue
      }
    }

export { InfoAlert };