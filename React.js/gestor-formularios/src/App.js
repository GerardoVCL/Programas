import {Formik,Form,Field,ErrorMessage} from 'formik'


const validate = (values) => {
  const errors = {}
  if(!values.name){
    errors.name = 'Requerido'
  }else if (values.name.length < 5){
    errors.name = 'El nombre es muy corto'
  }
  if(!values.lastname){
    errors.lastname = 'Requerido'
  }else if (values.lastname.length < 5){
    errors.lastname = 'El apellido es muy corto'
  }
  return errors
}
function App() {
  return (
    <Formik initialValues={{ name: '', lastname: '', email: '', }}
    validate={validate}
    onSubmit= {values => console.log(values)}
    >
      <Form>
        <label>Nombre</label>
        <Field name = 'name' type = 'text'/>
        <ErrorMessage name='name'/>
        <br/>
        <label>Apellido</label>
        <Field name = 'lastname' type = 'text'/>
        <ErrorMessage name='lastname'/>
        <br/>
        <label>Email</label>
        <Field name = 'email' type = 'email'/>
        <ErrorMessage name='email'/>
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
/*     <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input type='text' {...formik.getFieldProps('name')}      />
      {formik.touched.name && formik.errors.name 
      ? <div>{formik.errors.name}</div> 
      : null}
      <br/>
      <label>Apellido</label>
      <input type='text'{...formik.getFieldProps('lastname')}/>
      {formik.touched.lastname && formik.errors.lastname 
      ? <div>{formik.errors.lastname}</div> 
      : null}
      <br/>
      <label>Correo</label>
      <input type='email' {...formik.getFieldProps('email')}/>
      <button type='submit'>Enviar</button>
    </form> */
  );
}

export default App;
