import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostShow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const { id } = this.props.match.params;
    dispatch(fetchPost(id));
  }

  async handleClick(e) {
    const { dispatch, post, history } = this.props;
    const response = await dispatch(deletePost(post.id));
    if (response.status === 200) history.push('/');
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
        <button onClick={this.handleClick} className="btn btn-info">Delete Post</button>
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