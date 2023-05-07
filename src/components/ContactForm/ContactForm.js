import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  FormField,
  Form,
  ErrorMessage,
  LabelTitle,
  AddContactBtn,
} from './ContactForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.string().required('Required field!'),
});

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          <LabelTitle>Name</LabelTitle>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          <LabelTitle>Number</LabelTitle>
          <Field name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField>

        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </Form>
    </Formik>
  );
};
ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};