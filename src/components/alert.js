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
        this.color = 'rgb(0,0,0)'; 
        this.bgColor = 'rgb(255,159,0)'; 
      }
}

class ErrorAlert extends Alert{
    constructor(props) {
        super(props)
        this.color = 'rgb(255,255,255)'
        this.bgColor ='rgb(230, 0, 0)'
    }
    
}

class WarningAlert extends Alert{
    constructor(props) {
        super(props)
        this.color = 'rgb(255,255,255)'
        this.bgColor ='rgb(230, 0, 0)'
    }
}
export { InfoAlert, ErrorAlert, WarningAlert}