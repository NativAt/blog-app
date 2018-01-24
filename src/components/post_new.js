import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <h3>New Post:</h3>
        <form onSubmit={this.submitting}>
          <div>
            <label>Title</label>
            <div>
              <Field 
                name="title"
                component="input"
                type="text"
                placeholder="title"
              />
            </div>
          </div>
          <div>
            <label>Category</label>
            <div>
              <Field 
                name="category"
                component="input"
                type="text"
                placeholder="category"
              />
            </div>
          </div>
          <div>
            <label>Content</label>
            <div>
              <Field 
                name="content"
                component="input"
                type="text"
                placeholder="content"
              />
            </div>
          </div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

PostNew = connect(

)(PostNew);

export default reduxForm({
  form: 'simple'
})(PostNew);