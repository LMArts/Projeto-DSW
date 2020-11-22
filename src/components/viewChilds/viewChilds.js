import './viewChilds.css';
import add from '../../image/add.png';
import voltar from '../../image/return.png';

const ViewChild = () => (
    <div className="container_viewChild">
        <div className="block_return">
          <a href="/menu"><img src={voltar} alt="return"/></a>
          <span>Crianças</span>
        </div>
        <div className="content_cardChilds">
        <a className="row_cardChilds" href="#">
            <div className="cardChilds">
              <h4>Gabriela Silva</h4>
            </div>
        </a>
        </div>
        <div className="blockAddChild">
          <a href="/cadastro_crianca"><img src={add} alt="add"/></a>
        </div>
    </div>
);

export default ViewChild;

