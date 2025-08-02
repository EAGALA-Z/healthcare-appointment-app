import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`

export const Label = styled.label`
  font-size: 14px;
  color: #334155;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  font-size: 14px;
  outline: none;
`

export const SubmitButton = styled.button`
  background-color: #0b69ff;
  color: #fff;
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0959d1;
  }
`

export const SuccessMessage = styled.p`
  font-size: 18px;
  color: green;
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
`
