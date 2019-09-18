import React, { Component } from 'react'
class Example3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
        count:0
    }
  }
  componentDidMount(){
      console.log(`componentDidMount=>you click ${this.state.count} times`);
      
  }
  componentDidUpdate(){
      console.log(`componentDidUpdate=>you click ${this.state.count} times`);
      
  }
  addCount=()=>{
      this.setState({
          count:this.state.count+1
      })
  }
  render() {
    return (
      <div>
        <p>You click {this.state.count} times</p>
        <button
          onClick={this.addCount}
        >
          onClick
        </button>
      </div>
    )
  }
}

export default Example3
