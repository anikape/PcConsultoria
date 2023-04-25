import React from "react";
import {Formik, Form, Field} from "formik"
import * as Yup from 'yup';
import './formCliente.scss'


const FormClient = () => {

   const initialValues={
        name: '',
        cnpj: '',
        cpf: '',
        email: '',
        telefone: '',
        mobile: ''
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
        mobile: Yup.string().matches(/^[9-9]\d{9}$/, {message: "Por favos, insira um número válido", excludeEmptyString: false})
    });
      

      const handleSubmit = async(values) => {
        console.log(values)
      }

    return(
        

        <section className="formClient">

            <img className="logo" src="../assets/logo_pc_consultoria.svg" alt="logo" />
            
            <Formik 
                initialValues={initialValues}
                validationSchema= {validationSchema}
                onSubmit= {(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                <Form id="formContainer">

                    <div className="formContet">
                        <label id="formLabel" htmlFor="name">Nome/Razão Social<span>*</span></label>
                        <Field className="formField" id="name" name="name" placeholder="" />
                        {
                            errors.name && touched.name 
                            ? (<div className="error">{errors.name}</div>) 
                            : null
                        }
                    </div>

                    <div className="formDisplay">
                    <div className="formContet">
                        <label id="formLabel" htmlFor="cnpj">CPF/CNPJ<span>*</span></label>
                        <Field className="formField" id="cnpj" name="cnpj" placeholder="" />
                        {
                            errors.cnpj && touched.cnpj 
                            ? (<div className="error">{errors.cnpj}</div>) 
                            : null
                        }
                    </div>

                    <div className="formContet">
                        <label id="formLabel" htmlFor="email">Email<span>*</span></label>
                        <Field
                            className="formField"
                            id="email"
                            name="email"
                            placeholder=""
                            type="email"
                        />
                        {
                            errors.email && touched.email 
                            ? (<div className="error">{errors.email}</div>) 
                            : null
                        }
                    </div>
                    </div>
                    
                    
                   
                   <div className="formDisplay">
                   <div className="formContet">
                        <label id="formLabel" htmlFor="mobile">Telefone celular <span>*</span></label>
                        <Field
                            className="formField"
                            id="mobile"
                            name="mobile"
                            placeholder=""
                            type="phone"
                        />
                        {/* {
                            errors.mobile && touched.mobile 
                            ? (<div className="error">{errors.mobile}</div>) 
                            : null
                        } */}
                    </div>
                    <div className="formContet">
                        <label id="formLabel" htmlFor="phone">Telefone fixo <span>*</span></label>
                        <Field
                        className="formField"
                            id="phone"
                            name="phone"
                            placeholder=""
                            type="phone"
                        />
                        {/* {
                            errors.mobile && touched.mobile 
                            ? (<div className="error">{errors.mobile}</div>) 
                            : null
                        } */}
                    </div>

                   </div>
                   <div className="formContet">
                        <label id="formLabel" htmlFor="mobile">Rua/Logradouro<span>*</span></label>
                        <Field
                            className="formField"
                            id="logragrouro"
                            name="mobile"
                            placeholder=""
                            type="adress"
                        />
                        {/* {
                            errors.mobile && touched.mobile 
                            ? (<div className="error">{errors.mobile}</div>) 
                            : null
                        } */}
                    </div>

                    <div className="formDisplay">
                    
                    <div className="formContet">
                        <label id="formLabel" htmlFor="Cep">CEP<span>*</span></label>
                        <Field className="formField"
                            id="cep"
                            name="cep"
                            placeholder=""
                            type="number"
                        />
                        {/* {
                            errors.mobile && touched.mobile 
                            ? (<div className="error">{errors.mobile}</div>) 
                            : null
                        } */}
                    </div>
                    
                    <div className="formContet">
                        <label id="formLabel" htmlFor="complemento">Complemento</label>
                        <Field className="formField"
                            id="complemento"
                            name="complemento"
                            placeholder=""
                            type="text"
                        />
                        {/* {
                            errors.mobile && touched.mobile 
                            ? (<div className="error">{errors.mobile}</div>) 
                            : null
                        } */}
                    </div>
                        
                    </div>

                    <div className="formDisplay2">
                    <div className="formContet">
                        <label id="formLabel" htmlFor="cidade">Cidade<span>*</span></label>
                        <Field className="formField"
                            id="cidade"
                            name="cidade"
                            placeholder=""
                            type="text"
                        />
                        {/* {
                            errors.cidade && touched.cidade 
                            ? (<div className="error">{errors.cidade}</div>) 
                            : null
                        } */}
                    </div>

                    <div className="formContet uf">
                        <label id="formLabel" htmlFor="uf">UF<span>*</span></label>
                        <Field className="formField1"
                            id="uf"
                            name="uf"
                            placeholder=""
                            type="text"
                        />
                        {/* {
                            errors.uf && touched.uf 
                            ? (<div className="error">{errors.uf}</div>) 
                            : null
                        } */}
                    </div>
                    
                    <div className="formContet">
                        <label id="formLabel" htmlFor="pais">País<span>*</span></label>
                        <Field className="formField2"
                            id="pais"
                            name="pais"
                            placeholder=""
                            type="text"
                        />
                        {/* {
                            errors.país && touched.país 
                            ? (<div className="error">{errors.país}</div>) 
                            : null
                        } */}
                    </div>
                  


                    </div>
                   
                    <div className="buttonSubimit">
                    <button id="cadastrar" type="submit">Cadastrar</button>
                    </div>
                    
                </Form>
                )}
            </Formik>
        </section>
        
    )
}

export default FormClient