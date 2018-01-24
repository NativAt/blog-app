import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  return errors;
}
class PostNew extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
  }

  
  handleSubmit(e) {
    debugger;
    console.log('!!!1', e);
    // dispatch()
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <h3>New Post:</h3>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <div>
            <div>
              <Field 
                name="title"
                component={this.renderField}
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
                component={this.renderField}
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
                component={this.renderField}
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
}

// PostNew = reduxForm({
//   form: 'simple',
// })(PostNew)


// export default connect()(PostNew);


// PostNew = connect(
  
// )(PostNew);

export default reduxForm({
  form: 'PostNew',
  validate
})(PostNew);