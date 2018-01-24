import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostShow extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { id } = this.props.match.params;
    dispatch(fetchPost(id));
  }

  renderPost() {
    if (!this.props.post) return 'Loading...';
    const { post } = this.props;
    return (
      <div>
        <Link to="/">Back to Posts</Link>
        <h1>{post.title}</h1>
        <h2>{post.categories}</h2>
        <h3>{post.content}</h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderPost()}
      </div>
    );
  }
};

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(PostShow);