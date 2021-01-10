import './login.css';
import location from '../../image/location.png';
import { Link } from 'react-router-dom';
import {Formik, Form, Field} from 'formik';

const FormLogin = () => {

    const handleSubmit = values => console.log(values);
    
    return(
        <Formik initialValues={{}} onSubmit={handleSubmit}>
            <Form>
                <div className="containerLogin">
                    <img src={location} alt='logo' />
                    <Field name="email" type="email" placeholder="Email" className="field" />
                    <Field name="password" type="password" placeholder="Senha" className="field" />
                    <Link to='/menu'><button className="btnLogin" type='submit'>Entrar</button></Link>
                    <Link to='/cadastro_responsavel' className="linkLogin">Ainda não tenho cadastro!</Link>
                </div>
            </Form>
        </Formik>
    );

};

export default FormLogin;

