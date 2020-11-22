import {Link} from 'react-router-dom';
import location from '../../image/location.png';
import './cadCrianca.css';

const CadCrianca = () => (
    
    <form className='principal'>
        <img src={location} alt='logo' />
        <div className='box'>
            <div>
                <label>Nome</label>
                <input type="text" className='field' />
            </div>
            <div className='form-row'>
                <div className='form-control'>
                    <label>Sexo</label>
                    <input type="text" className='field' />
                </div>
                <div className='form-control'>
                    <label>Grau de Parentesco</label>
                    <input type="text" className='field' />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-control'>
                    <label>Cor do Cabelo</label>
                    <input type="text" className='field' />
                </div>
                <div className='form-control'>
                    <label>Cor dos Olhos</label>
                    <input type="text" className='field' />
                </div>
            </div>
            <div>
                <label>Tom da Pele</label>
                <input type="text" className='field' />
            </div>
            <div>
                <label>Descrição Adicional</label>
                <textarea className="field" rows="10"/>
            </div>

            <Link to="/child"><button type='submit' className="btn">Finalizar Cadastro</button></Link>
            <Link to="/child"><button className="btn">Cancelar</button></Link>
        </div>
    </form>
    
);

export default CadCrianca;