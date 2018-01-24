import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
// import '../../style/Form.scss';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.category) {
    errors.category = 'Required';
  }
  if (!values.content) {
    errors.content = 'Required';
  }
  return errors;
}

  const handleFormSubmit = (values, dispatch) => dispatch(createPost(values));

  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  const PostNew = (props) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
      <div>
        <h3>New Post:</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <div>
              <Field 
                name="title"
                component={renderField}
                type="text"
                placeholder="title"
                label="Title"
              />
            </div>
          </div>
          <div>
            <div>
              <Field 
                name="category"
                component={renderField}
                type="text"
                placeholder="category"
                label="Category"
              />
            </div>
          </div>
          <div>
            <div>
              <Field 
                name="content"
                component={renderField}
                type="text"
                placeholder="content"
                label="Content"
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


export default reduxForm({
  form: 'PostNew',
  validate
})(PostNew);