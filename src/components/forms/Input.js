import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  render() {
    const { field, type, placeholder, defaultValue } = this.props;
    return(
      <div>
        <p className="name">
          <input
            type={type}
            name={field.name}
            className="feedback-input"
            placeholder={placeholder}
            defaultValue={defaultValue}
            id="name"
            {...field} />
          {field.error && field.touched &&
            <div className="input_error">
              <div className="error_msg">
                {field.error}
              </div>
              <div className="error_line">
              </div>
            </div>
          }
        </p>
      </div>
    );
  }
}

Input.propTypes = {
  field: PropTypes.object.isRequired
}

Input.defaultValue = {
  type: 'text',
  placeholder: '',
  defaultValue: ''
};
