import React, {Component} from 'react'
import Display from './Display'
import './Blog.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//Container Component
class Blog extends Component {
    handlePrinting = () => {
        this.props.printingvalue(1);        
    }

    render() {
        return(
            <div className="container Blog" id = "Blog">
                <h3 className="center">Blog</h3>
                <hr className = "line"></hr>
                <Display posts = {this.props.posts} deleteButton = "deleteButtonHide" />
                <Link to = "/BlogPage">
                    <button className="Blog-Button btn waves-effect waves-light" onClick = {this.handlePrinting}>Load More</button>
                </Link>
                
            </div>
        )
    }
}

const mapStateToComponent = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToComponent)(Blog);