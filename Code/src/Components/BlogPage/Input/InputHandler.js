import React from 'react';
import { connect } from 'react-redux';
import './InputHandler.css';

const InputHandler = (props) => {
    const handler = (e) => {
        e.preventDefault();
    }

    const inHandler = () => {
        let Title = document.getElementById("input").value;
        let Body = document.getElementById("textarea").value;
        props.addPost(Title,Body,Math.random())
        document.getElementById("input").value = null;
        document.getElementById("textarea").value = null;
    }

    return (
        <div className="container InputHandler">
            <form onSubmit = {handler}>
                <input placeholder = "Title" id = "input"/>
                <textarea placeholder = "Body" id = "textarea"/>
                <button className = "btn waves-effect waves-light" onClick = {inHandler}>Add</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (title,body,id) => { dispatch({type: "AddPost", title: title, body: body, id:id}) }
    }
}

export default connect(null, mapDispatchToProps)(InputHandler);