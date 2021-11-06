import React from 'react';
import logo from './usmanZafar.PNG';
const CommentDetail = (props) => {

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={logo} />
            </a>
            <div className="content">
                <a href="/" className="author">
                   {props.author}
                </a>
                <div className="metadata">
                    <span className="date"> {props.time}</span>
                </div>
                <div className="text">
                    {props.content}
                </div>
            </div>
        </div>
    );

};

export default CommentDetail;