import React from 'react'
import styled from 'styled-components'

const FieldContainer = styled.label`
  background-color: #53585d;
  border-radius: 4px;
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
  position: relative;
  padding: 15px 8px;

  &:focus {
    border-bottom: 4px solid #2a7ae4;
  }
`

const Input = styled.input`
  background: #53585d;
  border: 0;
  outline: none;
  min-width: 180px;
  font-size: 16px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-appearance: none;
  border-radius: 0;
  &::placeholder {
    color: transparent;
  }

  &:required:invalid + span {
    color: red;
  }

  &:focus:required:invalid {
    border-bottom: 2px solid red;
  }

  &:required:invalid + span:before {
    content: '*';
  }
  &:focus + span,
  &:not(:placeholder-shown) + span {
    font-size: 13px;
    margin-top: 0;
  }
`

const Label = styled.span`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 8px;
  margin-top: 13px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
`

function FormField ({ label, type, name, value, onChange }) {
  return (
    <FieldContainer>
      <Input
        value={value}
        name={name}
        onChange={onChange}
        placeholder='Humbert'
      />
      <Label>{label}</Label>
    </FieldContainer>
  )
}

export default FormField
