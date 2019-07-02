import React, { Component } from 'react';
import Axios from 'axios';

class Booking extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            hotels:[],
            HotelId:'',
            Room_Id:'',
            message : '',
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    // changehandler = e => {
    //     this.setState({[e.target.name]:e.target.value})
    // }
    componentWillMount (){
      // Axios.get('http://jsonplaceholder.typicode.com/posts')
      Axios.get('http://127.0.0.1:8000/api/hotellist')
      // Axios.get('http://192.168.1.39:8000/application/view')
      .then(Response => {
        console.log(Response)
        this.setState({hotels: Response.data})
      })
      .catch(Error => {
        console.log("hiiiiiiiiiiii");
        this.setState({errorMsg: 'Failed to retrive data'})
      })
    }

    handleChange = event => {
      this.setState({message: event.target.value});

      // console.log(event.target.value)
      // this.setState({HotelId: event.target.value});
      // this.setState({message: event.target.value});
      const {message} = this.state.message
      console.log("message",this.state.message)

    }

    // changeHotel= e => {
    //   // e.preventDefault()
    //   this.setState({ HotelId: e.target.value })
    //   console.log(e.target.value);
    //   console.log("message",this.state.HotelId)

    //     // Axios.post('http://127.0.0.1:8000/api/roomlist',this.state.HotelId)
    //     // .then(Response => {
    //     //     console.log(Response)
    //     //     this.setState({Room_Id: Response.data})
    //     // })
    //     // .catch(Error => {
    //     //     this.setState({errorMsg: 'Failed to send data'})
    //     // })

    // }
    

  render() {
    const {hotels, HotelId , Room_Id, errorMsg} = this.state
    // console.log("hotels",hotels);
    return ( 
      <div>
        <h1>post List api test</h1>
        <select value={this.state.HotelId} onChange={this.handleChange}>
            <option value="grapefruit">----Select----</option>
          {
            hotels.map(hotel => <option key={hotel.id} value={hotel.Name}>{hotel.Name}</option>)
          }
          </select>
        {/* </select> */}
        { errorMsg ? <div>{ errorMsg }</div> : null }
        <div>{this.state.message}</div>
        <div>
          {
              Room_Id.length ?
              Room_Id.map(room => <div key={room.id}>{room.RoomName}</div>):
              null
            }
        </div>
      </div>
    );
  }
}

export default Booking;
