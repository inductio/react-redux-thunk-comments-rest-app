import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';
import CommentsList from "./CommentsList";

class PostComments extends Component {
    componentDidMount() {
        this.props.fetchComments(this.props.postId);
    }

    render() {
        const { comments } = this.props;

        if (!comments.length) {
            return <div>Comments Loading...</div>;
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