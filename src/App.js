import React, {Component} from 'react';
import moment from 'moment'
class App extends Component {
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().getTime()
      })
    }, 1000)
  }
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().getTime(),
      status:"off"
    }
  }

  render_date(){
    if(this.state.status ==="on"){
      return (
        <div>{moment(this.state.time).format("dddd,DD MMMM YYYY")}</div>
      )
    }else{
      return null
    }
  }
  render() {
    return (
      <div
        style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#f3e5f5"
      }}>
        <div className="container">
          <div className="row">
            <div
              className="w-100 center mt-5"
              style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "30px"
            }}>
              REACT LOCK APP 
            </div>
          </div>
          <div className="row">
          <div className="switch w-100 center mt-2">
              <label style={{fontSize:"20px"}}>
                Off
                <input type="checkbox" onChange={event=>{
                  if(this.state.status ==="on"){
                    this.setState({
                      status:"off"
                    })
                  }else{
                    this.setState({
                      status:"on"
                    })
                  }
                }}/>
                <span className="lever"></span>
                On <span style={{fontSize:"50px",color:"black",marginLeft:"20px"}}><i className="far fa-calendar-alt"></i></span>
              </label> 
            </div>
          </div>
          <div className="row">
            <div
              className="w-100 center mt-5"
              style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "30px"
            }}>
              {moment(this.state.time).format("hh:mm:ss")}
            </div>
          </div>
          <div className="row">
            <div
              className="w-100 center mt-5"
              style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "30px"
            }}>
              {this.render_date()}
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
