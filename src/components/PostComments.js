import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';
import CommentsList from "./CommentsList";

class PostComments extends Component {
    render() {
        const { comments } = this.props;

        if (!comments.length) {
            return <button onClick={() => this.props.fetchComments(this.props.postId)}
                className="ui teal basic button">Show comments</button>;
        }

        return <CommentsList comments={comments}/>
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log({state, ownProps});
    return {
        comments: state.comments.filter(comments => comments.postId === ownProps.postId)
    }
};

export default connect(mapStateToProps, {
    fetchComments: fetchComments
})(PostComments);