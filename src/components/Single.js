import React from 'react'
import { useForm } from "react-hook-form"
//utilisse pour gerer les formulaires de manieres efficaces
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
//bibliotheque pour valider les donnees de formulairees
import { useNavigate } from 'react-router-dom'
//permet de naviguer entre les diffeerentzs pages

const schema = yup
    .object({
        firstName: yup.string().required().min(4).max(10),
        lastName: yup.string().required().min(4).max(10),
        email: yup.string().email().required(),
        telephone: yup.number().positive().integer().required().min(10000000).max(99999999),
        password: yup.string().required().min(8).max(10),
        confirmPassword: yup.string().required().min(8).max(10).oneOf([yup.ref('password')]),
    })
    .required()

export default function Singup() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    //useForm pour enregistrrer les champs du formulaire et gerer les erreurs
    const onSubmit = (data) => {
        let listUsers = JSON.parse(localStorage.getItem('users') || '[]')
        listUsers.push(data)
        localStorage.setItem('users', JSON.stringify(listUsers))
        navigate('/login')
    }
//la foonction onSubmit est appelle a l'envoi du formulaire
//Les données sont récupérées, validées, et stockées dans le localStorage sous forme de liste d'utilisateurs.
//L'utilisateur est redirigé vers la page "/login" avec useNavigate.
    return (
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Sing Up</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* handleSubmit(onSubmit):
handleSubmit: A function provided by react-hook-form to handle the form submission.
onSubmit: A callback function you define (in this case, onSubmit) that will execute when the form is successfully submitted.
Purpose: handleSubmit automatically validates the form data according to the schema defined with yup before calling onSubmit. If the data is invalid, the errors are captured in the errors object. */}
                                <div className="row">
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            {...register("firstName")}
                                        />
                            {/* register: A function from react-hook-form that connects the input field to the form state.
"firstName": The name of the field being registered. It must match the key in the yup schema (e.g., firstName).
Purpose: register tracks the value, validation state, and errors for the input field. */}
                                        <p className="text-danger">{errors.firstName?.message}</p>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            {...register("lastName")}
                                        />
                                        <p className="text-danger">{errors.lastName?.message}</p>

                                    </div>
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Email"
                                            {...register("email")}
                                        />
                                        <p className="text-danger">{errors.email?.message}</p>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="number"
                                            className="form-control"
                                            placeholder="Telephone"
                                            {...register("telephone")}
                                        />
                                        <p className="text-danger">{errors.telephone?.message}</p>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            {...register("password")}
                                        />
                                        <p className="text-danger">{errors.password?.message}</p>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="password"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            {...register("confirmPassword")}
                                        />
                                        <p className="text-danger">{errors.confirmPassword?.message}</p>
                                    </div>
                                    <div className="form-group col-lg-12 d-flex align-items-center justify-content-center">
                                        <input type="submit" className="btn btn-primary py-3 px-5" defaultValue="Send Message" />
                                    </div>
                                </div>


                            </form>
                        </div>
                        <div className="col-lg-4 ml-auto">
                            <img src="images/singup.gif" alt="Image" className="img-fluid mb-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
