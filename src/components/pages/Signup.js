import React,{useState} from 'react'
import '../signup.css'
import Validation from './Validation'
 function Signup(){
  
  
const[values,setValues]=useState({
  username:'',
  email:'',
  password:'',
  password2:''

})
const handleSubmit=(e)=> {
e.preventDefault();
setErrors((Validation(values)))
}
const handleChange=(event)=>{
  setValues({
   ...values,
   [event.target.name]:event.target.values
  })
}
const [errors,setErrors]=useState({});

    return (
        <>
  <div className="sign-up">
  <div className="loginimage">
    <img src="https://www.gpbirlaedufoundation.com/images/Login.jpg" alt="circle"></img>
      </div>

      <div className="formlogin">
      <form className='form' onSubmit={handleSubmit}>
        <h2>
         LOGIN HERE
        </h2>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            autoComplete='username'
            placeholder='Enter your username'
            value={values.username}
           onChange={handleChange}
          />
         {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            autoComplete='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            autoComplete='new-password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
           {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            autoComplete='confirm-password'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
            {errors.password2 && <p className="error">{errors.password2}</p>}
         
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button><br/>
        <span className='form-input-login'>
          Already have an account? Login here
        </span>
      </form>
    </div>

   
      </div>
      
  );
        </>
    )
}

export default Signup
