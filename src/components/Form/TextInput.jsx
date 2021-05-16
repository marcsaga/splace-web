import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormInput = ({ type, label, onChange, note, placeholder }) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control size="lg" type={type} placeholder={placeholder} onChange={onChange} />
      <Form.Text className="text-muted">{note}</Form.Text>
    </Form.Group>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
