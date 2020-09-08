import React, {Component} from 'react'
import axios from 'axios'
import Display from './Display'

//Container Component
class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data.slice(0,3)
                })
            })
    }

    render() {
        return(
            <div className="container Blog" id = "Blog">
                <h3 className="center">Blog</h3>
                <hr className = "line"></hr>
                <Display posts = {this.state.posts} />
            </div>
        )
    }
}

export default Blog;