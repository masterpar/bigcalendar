import React from 'react';
import './login.css';
import {useForm} from "../../hooks/useForm"
import {useDispatch, useSelector} from "react-redux"
import {startLogin, authErrorRegister, startRegister} from "../../actions/auth"

export const LoginScreen = () => {

    //TODO REDUX
    const dispatch = useDispatch()
    const { errorLogin, errorRegister } = useSelector(state => state.auth)

    //TODO Custom Hooks
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'camilo@gmail.com',
        lPassword: '123456'
    });

    const { lEmail, lPassword } = formLoginValues

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: 'castro',
        rEmail: 'camilo@gmail.com',
        rPassword: '123456',
        rPassword2: '123456',
    });

    const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues


    const handleLogin = (e) => {
        e.preventDefault()
        dispatch( startLogin(lEmail, lPassword))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        if (rPassword !== rPassword2){
           return  dispatch( authErrorRegister('Passwords do not match'))
        }

        dispatch( startRegister(rName, rEmail, rPassword))
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='lEmail'
                                value={ lEmail}
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='lPassword'
                                value={ lPassword}
                                onChange={ handleLoginInputChange }
                            />
                        </div>

                        {  errorLogin &&
                        <div className="alert alert-danger" style={{ opacity: 0.6}} role="alert">
                            { errorLogin }
                        </div>
                        }

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ handleRegister }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='rName'
                                value={rName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='rEmail'
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='rPassword'
                                value={rPassword}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name='rPassword2'
                                value={rPassword2}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        {  errorRegister &&
                        <div className="alert alert-danger" style={{ opacity: 0.9}} role="alert">
                            { errorRegister }
                        </div>
                        }

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
