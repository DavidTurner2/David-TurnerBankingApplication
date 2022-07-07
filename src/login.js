import React from 'react';
import { UserContext  } from './context.js'
import {useFormik} from 'formik';


function dogdoodoo(array, value) {
  return (array.email === value.email && array.password === value.password )   
 
}
function Login(){
  const ctx = React.useContext(UserContext); 

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },  onSubmit: values => {



      ctx.users.map((item, index)=> {
        if (dogdoodoo(item, formik.values)){
          ctx.currentuser = index;
          setShow(false);
         formik.resetForm();
        }          
      })
      setTimeout(() => {
        if(ctx.currentuser === 0){
          alert("Email or password incorrect");
            }
      }, 100);
     
     
    },
    validate: (values) => {
      let errors = {};
      if (!values.email)   errors.email = "field required";
      if (!values.password) errors.password = "field required";    
      
      return errors;
    },
  });


  



  
























  const [show, setShow]         = React.useState((ctx.currentuser === 0));
  


  function clearForm(){ 
    ctx.currentuser = 0;   
    setShow(true);
  }

  return (<div>
    {show ? (  
        <form onSubmit={formik.handleSubmit}>
   
               
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
              <h5>Logged in</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Log Out</button>
              </> 
            )}
    </div>
  )
}

 

export default Login