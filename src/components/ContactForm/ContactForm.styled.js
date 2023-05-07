import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 300px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;
  /* align-items: center; */
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;
export const LabelTitle = styled.span`
margin-bottom: 8px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;
export const AddContactBtn = styled.button`
width: 100px;

`;