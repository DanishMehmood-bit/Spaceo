import React from 'react'
import './Display.css'

//UI Component
const Display = ({posts}) => {
    const displayPost = posts.length ? ( posts.map( post => {
        return(
            <div className="card" style = {{backgroundColor: 'rgba(0,0,0,.6)', marginRight: '1%'}}>
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <hr></hr>
                    <p>{post.body}</p>
                </div>
            </div>
        )
    })) : (
        <p> Fetching data </p>
    )

    return(
        <div className="Display">
            {displayPost}
        </div>
    )
}

export default Display;