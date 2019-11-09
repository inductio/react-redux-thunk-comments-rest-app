import React from 'react';

export default ({comments}) => {
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            {comments.map(comment => {
                return (
                    <div className="comment" key={comment.id}>
                        <div className="avatar">
                            <i className="small middle aligned icon user red"/>
                        </div>
                        <div className="content">
                            <div className="author">{comment.name}</div>
                            <div className="text">
                                {comment.body}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}