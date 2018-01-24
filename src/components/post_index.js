import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import PostNew from './post_new';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <Link className="btn btn-info" to="/posts/new">
          Add post
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(PostIndex);


