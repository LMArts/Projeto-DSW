import location from '../../image/location.png';
import './cadResponsavel.css';

const CadResponsavel = () => (
    
    <form className='principal'>
        <img src={location} alt='logo' />
        <div className='box'>
            <div>
                <label>Nome</label>
                <input type="text" className='field' />
            </div>
            <div className='form-row'>
                <div className='form-control'>
                    <label>E-mail</label>
                    <input type="email" className='field' />
                </div>
                <div className='form-control'>
                    <label>Senha</label>
                    <input type="password" className='field' />
                </div>
            </div>
            <div>
                <label>Telefone</label>
                <input type="number" className='field' />
            </div>
            <div className='form-row'>
                <div className='form-control'>
                    <label>Estado</label>
                    <input type="text" className='field' />
                </div>
                <div className='form-control'>
                    <label>Cidade</label>
                    <input type="text" className='field' />
                </div>
            </div>
            <div>
                <label>Bairro</label>
                <input type="text" className='field' />
            </div>
            <div className='form-row'>
                <div className='form-control'>
                    <label>Rua</label>
                    <input type="text" className='field' />
                </div>
                <div className='form-control'>
                    <label>N°</label>
                    <input type="text" className='field' />
                </div>
            </div>
            <button type='submit' className="btn">Finalizar Cadastro</button>
            <button className="btn">Cancelar</button>
        </div>
    </form>
    
);

export default CadResponsavel;