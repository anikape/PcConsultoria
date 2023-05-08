import React, {onBlur, useState, useRef} from "react";
import {Formik, Form, Field} from "formik"
import axios from 'axios';
import * as Yup from 'yup';
import './formCliente.scss'




export const FormClient = () => {
    

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
            .required('Por Favor, informe o CPF'),
        email: Yup.string().email('Email inválido').required('Required'),
        mobile: Yup.string().matches(/^[9-9]\d{9}$/, {message: "Por favos, insira um número válido", excludeEmptyString: false})
    });
      

      const handleSubmit = async(values) => {
        console.log(values)
      }

      /*CEP*/
      
      const findCEP = (ev, setFieldValue)=>{
        const cep = ev.target.value;

        const newCep = cep?.replace(/[^0-9]/g, '')
        console.log(newCep)



        fetch(`https://viacep.com.br/ws/${newCep}/json/`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Erro na resposta da API');
          }
          return res.json();
        })
        .then((data) => {
            console.log(data)
            setFieldValue('rua', data.logradouro)
            setFieldValue('bairro', data.bairro)
            setFieldValue('cidade', data.localidade)
            setFieldValue('uf', data.uf)         
            
            
          // faça algo com a variável data aqui
        })
        .catch((error) => {
          console.log(error);
          // trate o erro aqui
        });
    }

     

    return(
        

        <section className="FormClient">

            <img className="Logo" src="../assets/logo_pc_consultoria.svg" alt="logo" />
            
            <Formik 
                initialValues={initialValues}
                validationSchema= {validationSchema}
                onSubmit= {(values) => handleSubmit(values)}
            >
                {({ errors, touched, setFieldValue }) => (
                <Form id="FormContainer">

                    <div className="FormContent">
                        <label id="FormLabel" htmlFor="name">Nome/Razão Social<span>*</span></label>
                        <Field className="FormField FormName" id="name" name="name" placeholder="" />
                        {
                            errors.name && touched.name 
                            ? (<div className="error">{errors.name}</div>) 
                            : null
                        }
                    </div>

                    <div className="FormDisplay">
                        
                            <div className="FormContent">
                                <label id="FormLabel" htmlFor="cnpj">CPF/CNPJ<span>*</span></label>
                                <Field className="FormField" id="cnpj" name="cnpj" placeholder="" />
                                {
                                    errors.cnpj && touched.cnpj 
                                    ? (<div className="error">{errors.cnpj}</div>) 
                                    : null
                                }
                            </div>

                            <div className="FormContent">
                                <label id="FormLabel" htmlFor="email">Email<span>*</span></label>
                                <Field
                                    className="FormField"
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
                    
                    
                   
                   <div className="FormDisplay">
                   <div className="FormContent">
                        <label id="FormLabel" htmlFor="mobile">Telefone celular <span>*</span></label>
                        <Field
                            className="FormField"
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
                    <div className="FormContent">
                        <label id="FormLabel" htmlFor="phone">Telefone fixo <span>*</span></label>
                        <Field
                        className="FormField"
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
                   <div className="FormContent">
                        <label id="FormLabel" htmlFor="mobile">Rua/Logradouro<span>*</span></label>
                        <Field
                            className="FormField FormName"
                            id="rua"
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

                    <div className="FormDisplay">
                    
                    <div className="FormContent">
                        <label id="FormLabel" htmlFor="Cep">CEP<span>*</span></label>
                        <Field className="FormField"
                            id="cep"
                            name="cep"
                            placeholder=""
                            type="number"
                            onBlur={(ev)=> findCEP(ev, setFieldValue)}
                            

                        />
                        {/* {
                            errors.mobile && touched.mobile 
                            ? (<div className="error">{errors.mobile}</div>) 
                            : null
                        } */}
                    </div>
                    
                    <div className="FormContent">
                        <label id="FormLabel" htmlFor="complemento">Complemento</label>
                        <Field className="FormField"
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

                    <div className="FormDisplay2">
                        <div className="FormContent">
                            <label id="FormLabel" htmlFor="cidade">Cidade<span>*</span></label>
                            <Field className="FormField"
                                id="localidade"
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

                        <div className="FormContent Uf">
                            <label id="FormLabel" htmlFor="uf">UF<span>*</span></label>
                            <Field className="FormField1"
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
                        
                        <div className="FormContent Pais">
                            <label id="FormLabel" htmlFor="pais">País<span>*</span></label>
                            <Field className="FormField2"
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