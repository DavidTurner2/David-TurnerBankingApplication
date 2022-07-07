import * as React from 'react'
import { UserContext, Card } from './context.js'
import {useFormik} from 'formik';

function momo(array, value) {
  return (array.email === value.email )    
}
function CreateAccount(){
  const ctx = React.useContext(UserContext); 

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },  onSubmit: values => {
      alert("Successfully created account");
      ctx.users.push({name: formik.values.name, email: formik.values.email, password: formik.values.password,balance:100});
      ctx.currentuser = ctx.users.length -1;
      setShow(false);
      formik.resetForm();
    },
    validate: (values) => {
      let errors = {};
      if (!values.name)   errors.name = "field required";
      if (!values.email)   errors.email = "field required";
      if (!values.password) errors.password = "field required";
      ctx.users.map((item, index)=> {        
        if (momo(item, values)){errors.email = "account already in database";}})
      if(values.password.toString().length < 8) errors.password ="password must be 8 or more characters"
      return errors;
    },
  });

  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  
  function clearForm(){    
    setShow(true);
  }

  return (<div>
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
        <form onSubmit={formik.handleSubmit}>
   
        <div>Name</div>
        <input
          id="nameField"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        /> {formik.errors.name ? <div id="nameError" style={{ color: "red" }}> {formik.errors.name}</div> :null}
 
 
       
        <div>Email</div>
         <input
           id="emailField"
           name="email"
           type="email"
           onChange={formik.handleChange}
           value={formik.values.email}
         />
   {formik.errors.email ? (
           <div id="emailError" style={{ color: "red" }}>
             {formik.errors.email}
           </div>
         ) : null}
          
 
         <div>Password</div>
        <input
          id="pswField"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        /> {formik.errors.password ? <div id="pswError" style={{ color: "red" }}> {formik.errors.password}</div> :null}
        <button type="submit" disabled={(formik.values.name === '' && formik.values.email === '' && formik.values.password === '' ) ? true : null}>Submit</button>
      </form>      
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    /></div>
  )
}


export default CreateAccount