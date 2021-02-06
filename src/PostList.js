
import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            posts:[],
            errorMsg: ''  
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/post/1')
        .then(response =>{
            console.log(response)
            this.setState({ posts:response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({ errorMsg:'Error Retrieving posts'})
        })
    }

    render() 
    {
        const { posts,errorMsg} =this.state //array destructring
        return (
            <div>
                List of posts
                {
                    posts.length?
                    posts.map(post =><div key={post.id}>{post.title}</div>):
                    null
                }
                {
                    //conditional rendering
                    errorMsg? <div>{errorMsg}</div>:null
                }
            </div>
        )
    }
}

export default PostList
