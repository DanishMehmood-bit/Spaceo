import React from 'react'
import './Display.css'
import { connect } from 'react-redux'

//UI Component
const Display = (props) => {

    const handleClick = (id) => {
        console.log(props);
        props.deletePost(id);
    }

    const displayPost = props.posts.length ? ( props.posts.map( post => {
        return(
            <div className={"card " + props.blogPost} style = {{backgroundColor: 'rgba(0,0,0,.6)', marginRight: '1%'}}>
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <hr></hr>
                    <p>{post.body}</p>
                    <button className = {"button-Display btn waves-effect waves-light " + props.deleteButton} onClick = {handleClick.bind(this,post.id)}>Delete</button>
                </div>
            </div>
        )
    })) : (
        <p> Fetching data </p>
    )

    return(
        <div className={"Display " + props.cN}>
            {displayPost}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: "DeletePost", id: id })}
    }
}

export default connect(null,mapDispatchToProps)(Display);