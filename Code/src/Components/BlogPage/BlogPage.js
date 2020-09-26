import React from 'react';
import Display from '../Blog/Display';
import { connect } from 'react-redux';
import InputHandler from './Input/InputHandler';
import './BlogPage.css';

const BlogPage = (props) => {
    return(
        <div className="container BlogPage">
                <InputHandler />
                <Display posts = {props.posts} cN = "blogPage" blogPost = "blogPost"/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(BlogPage);