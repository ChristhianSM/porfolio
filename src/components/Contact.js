import React, { useState } from 'react';
import './Contact.css';
import contactImg from "./../img/about-9.jpg"
import { Formik } from 'formik';
import emailjs from 'emailjs-com'
// import { SpinnerCircular } from 'spinners-react';
function Contact() {
    const [loading, setLoading] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false)
    const [alert, setAlert] = useState("")

    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contactame</h1>
                            <p className="hire__text white">Estoy disponible para trabajo freelance. Conectate con mi numero de telefono : </p>
                           <p className="hire__text white"><strong>+51959686193</strong> o por email <strong>christhian2524@gmail.com</strong></p>
                        </div>
                        <Formik
                            initialValues={{
                                nombre: '',
                                correo : '',
                                tema: '',
                                mensaje : ''
                            }}
                            validate = { (values) => {
                                let errors = {};
                                if (!values.nombre) {
                                    errors.nombre = "Por favor ingresa un nombre"
                                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
                                    errors.nombre = "El nombre solo puede contener letras"
                                }
                                // Validacion correo
                                if (!values.correo) {
                                    errors.correo = "Por favor ingresa un correo electronico"
                                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)){
                                    errors.correo = "Ingrese un correo adecuado"
                                }

                                // Validacion asunto
                                if (!values.tema) {
                                    errors.tema = "Por favor ingresa un tema"
                                }

                                // Validacion asunto
                                if (!values.mensaje) {
                                    errors.mensaje = "Por favor ingresa un Mensaje"
                                }

                                return errors
                            }}
                            onSubmit={(values, {resetForm}) => {
                                setLoading(true);
                                setTimeout(() => {
                                    emailjs.send('service_ti0x9pg','template_4hm25jx', values , "user_LQ8xCZ2tJhxvxLSScHXiu").then( response => {
                                        setIsCorrect(true);
                                    }).catch( err => {
                                        console.log(err);
                                    })
                                    resetForm();
                                    setLoading(false);
                                    setAlert("Mensaje enviado con exito");
                                    setTimeout(() => {
                                        setAlert("");
                                        setIsCorrect(false)
                                    }, 2000);
                                }, 3000);
                            }}
                        >
                            {({values, handleSubmit, handleChange,errors,touched, handleBlur}) => (
                                <form className="input__box" onSubmit={handleSubmit}>
                                    <input 
                                        type="text"
                                        className={`contact name ${touched.nombre&& errors.nombre ? "error" : "success"}`}
                                        name='nombre'
                                        placeholder="Nombre *"
                                        value={values.nombre}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <input 
                                        type="text" 
                                        className={`contact email ${touched.correo && errors.correo ? "error" : "success"}`} 
                                        name='correo'
                                        placeholder="Email *"
                                        value={values.correo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <input 
                                        type="text" 
                                        className={`contact subject ${touched.tema && errors.tema ? "error" : "success"}`} 
                                        name='tema'
                                        placeholder="Tema " 
                                        value={values.tema}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <textarea  
                                        id="message" 
                                        className={`${touched.mensaje && errors.mensaje ? "error" : "success"}`}
                                        placeholder="Escribe tu mensaje"
                                        name = "mensaje"
                                        value={values.mensaje}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    ></textarea>
                                    <div>
                                        <button className={`btn contact pointer  ${loading && "spinner"}`} type="submit">
                                            {loading ? "Enviando...." : "Enviar"}
                                            {/* {
                                                loading &&
                                                <SpinnerCircular 
                                                    size={20} 
                                                    thickness={100} 
                                                    speed={100} 
                                                    color="#36ad47" 
                                                    secondaryColor="rgba(0, 0, 0, 0.44)"
                                                    className='spinner'
                                                />
                                            } */}
                                        </button>
                                       
                                    </div>
                                    {   isCorrect &&
                                        <p className='alert'>{alert}</p>        
                                    }
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
