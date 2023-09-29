import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter your full name"),
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    age: yup.number().positive().integer().min(1).max(12).required("Please enter a valid age (1-12)"), 
    password: yup.string().min(4, "Password must be at least 4 characters").max(10, "Password can't exceed 10 characters").required("Password is required"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required("Please confirm your password"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Form</p>
        <label>Enter Full Name: </label>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        <br />
        
        <label>Enter Email: </label>
        <input type="text" placeholder="Email" {...register("email")} />
        <br />
        
        <label>Enter Age: </label>
        <input type="number" placeholder="Age" min="1" max="12" {...register("age")} />
        <br />
        
        <label>Enter Password: </label>
        <input type="password" placeholder="Password" {...register("password")} />
        <br />
        
        <label>Confirm your password: </label>
        <input type="password" placeholder="Confirm Password" {...register("confirmpassword")} />
        <br />
        
        <br />
        <input type="submit" />
      </form>

      {formData && (
        <div>
          <h2>Form Data:</h2>
          <p>Full Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
          <p>Password: {formData.password}</p>
          <p>Confirm Password: {formData.confirmpassword}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
