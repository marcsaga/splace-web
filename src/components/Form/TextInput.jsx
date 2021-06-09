import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormInput = ({ type, label, onChange, note, placeholder, showError, error, required ,value }) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <div style={{ display: 'flex' }}>
        <Form.Label>{label}</Form.Label>
        {required && <Form.Text style={{ color: '#FFA500' }}>*</Form.Text>}
      </div>
      <Form.Control size="lg" type={type} placeholder={placeholder} onChange={onChange} value={value} />
      <Form.Text className="text-muted">{note}</Form.Text>
      {showError && (
        <Form.Text className="text-error" style={{ color: '#E50000' }}>
          {error}
        </Form.Text>
      )}
    </Form.Group>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  note: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  showError: PropTypes.bool,
  required: PropTypes.bool,
};

export default FormInput;
