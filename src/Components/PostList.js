import React, { Component } from 'react';
import Axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts : [],
       errorMsg : ''
    }
  }

  componentDidMount (){
    // Axios.get('http://jsonplaceholder.typicode.com/posts')
    Axios.get('http://127.0.0.1:8000/api/details')
    // Axios.get('http://192.168.1.39:8000/application/view')
    .then(Response => {
      console.log(Response)
      this.setState({posts: Response.data})
    })
    .catch(Error => {
      this.setState({errorMsg: 'Failed to retrive data'})
    })
  }
  
  render() {
    const {posts, errorMsg} = this.state
    return ( 
      <div>
        <h1>post List api test</h1>
        {
          posts.length ?
          posts.map(post => <div key={post.email}><p>User name : {post.username}</p><p>Email : {post.email}</p> </div>):
          null
        }
        { errorMsg ? <div>{ errorMsg }</div> : null }
      </div>
    );
  }
}

export default PostList;

