import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required().min(8).max(10),
    })
    .required()
export default function Login() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) =>{
        let listUsers = JSON.parse(localStorage.getItem('users') || '[]')
        let user = listUsers.find(user => user.email === data.email && user.password === data.password)
        if(user){
            navigate('/')
        }else{
            alert('Email or password is incorrect')
        }
    }
  return (
    <div>
      <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Login</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                
                                <div className="form-group">
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    {...register("email")}/>
                                    <p className="text-danger">{errors.email?.message}</p>
                                </div>
                                
                                <div className="form-group">
                                    <input type="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        {...register("password")}/>
                                    <p className="text-danger">{errors.password?.message}</p>
                                </div>
                                
                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary py-3 px-5" defaultValue="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 ml-auto">
                            <img src="images/login.jpeg" alt="Image" className="img-fluid mb-5" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
