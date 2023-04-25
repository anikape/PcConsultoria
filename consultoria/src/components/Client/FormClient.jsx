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
            
            <Formik 
                initialValues={initialValues}
                validationSchema= {validationSchema}
                onSubmit= {(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                <Form id="formContainer">

                    <div className="formContet">
                        <label id="formLabel" htmlFor="name">Nome/Razão Social*</label>
                        <Field className="formField" id="name" name="name" placeholder="Nome" />
                        {
                            errors.name && touched.name 
                            ? (<div className="error">{errors.name}</div>) 
                            : null
                        }
                    </div>

                    <div>
                    <div className="formContet">
                        <label id="formLabel" htmlFor="cnpj">CPF/CNPJ*</label>
                        <Field className="formField" id="cnpj" name="cnpj" placeholder="CNPJ" />
                        {
                            errors.cnpj && touched.cnpj 
                            ? (<div className="error">{errors.cnpj}</div>) 
                            : null
                        }
                    </div>

                    <div className="formContet">
                        <label id="formLabel" htmlFor="email">Email</label>
                        <Field
                            className="formField"
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
                    </div>
                    
                    
                   
                   <div>
                   <div className="formContet">
                        <label id="formLabel" htmlFor="mobile">Telefone celular</label>
                        <Field
                            className="formField"
                            id="mobile"
                            name="mobile"
                            placeholder="xx - 999999999"
                            type="phone"
                        />
                        {/* {
                            errors.mobile && touched.mobile 
                            ? (<div className="error">{errors.mobile}</div>) 
                            : null
                        } */}
                    </div>
                    <div className="formContet">
                        <label id="formLabel" htmlFor="phone">Telefone fixo</label>
                        <Field
                        className="formField"
                            id="phone"
                            name="phone"
                            placeholder="xx - 999999999"
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
                        <label id="formLabel" htmlFor="mobile">Rua/Logradouro*</label>
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

                    <div>
                    
                    <div className="formContet">
                        <label id="formLabel" htmlFor="Cep">CEP*</label>
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
                        <label id="formLabel" htmlFor="mobile">Complemento</label>
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

                    <div>
                    <div className="formContet">
                        <label id="formLabel" htmlFor="cidade">Cidade*</label>
                        <Field className="formField"
                            id="complemento"
                            name="complemento"
                            placeholder=""
                            type="text"
                        />
                        {/* {
                            errors.cidade && touched.cidade 
                            ? (<div className="error">{errors.cidade}</div>) 
                            : null
                        } */}
                    </div>

                    <div className="formContet">
                        <label id="formLabel" htmlFor="uf">UF*</label>
                        <Field className="formField"
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
                        <label id="formLabel" htmlFor="pais">País*</label>
                        <Field className="formField"
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


                    <button id="cadastrar" type="submit">Cadastrar</button>
                </Form>
                )}
            </Formik>
        </section>
        
    )
}

export default FormClient