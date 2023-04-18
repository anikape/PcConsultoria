import React from "react";
import {Formik, Form, Field} from "formik"
import * as Yup from 'yup';

import './FormRegister.sass'

const FormRegister = () => {

   const initialValues={
        name: '',
        cpj: '',
        email: '',
      }


    const validationSchema= Yup.object().shape({
        name: Yup.string()
            .min(2, 'Muito Curto!')
            .max(50, 'Muito Longo!')
            .required('Required'),
        cnpj: Yup.string()
            .min(2, 'Muito Curto!')
            .max(50, 'Muito Longo!')
            .required('Required'),
        email: Yup.string().email('Email inválido').required('Required'),
    });
      

      const handleSubmit = async(values) => {
        console.log(values)
      }

    return(
        <section className="form">
            
            <Formik
                initialValues={initialValues}
                validationSchema= {validationSchema}
                onSubmit= {(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                <Form>

                    <div>
                        <label htmlFor="name">Nome</label>
                        <Field id="name" name="name" placeholder="Nome" />
                        {
                            errors.name && touched.name 
                            ? (<div className="error">{errors.name}</div>) 
                            : null
                        }
                    </div>

                    <div>
                        <label htmlFor="cnpj">CNPJ</label>
                        <Field id="cnpj" name="cnpj" placeholder="CNPJ" />
                        {
                            errors.cnpj && touched.cnpj 
                            ? (<div className="error">{errors.cnpj}</div>) 
                            : null
                        }
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="email@email.com"
                            type="email"
                        />
                        {
                            errors.email && touched.email 
                            ? (<div className="error">{errors.email}</div>) 
                            : null
                        }
                    </div>
                    <button type="submit">Submit</button>
                </Form>
                )}
            </Formik>
        </section>
    )
}

export default FormRegister