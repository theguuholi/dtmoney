import { Container } from './styles';
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <button type="button">
                <img src={closeImg} alt="Fechar" onClick={onRequestClose} className="react-modal-close" />
            </button>
            <Container>
                <h2>Cadastrar transacao</h2>

                <input type="text" placeholder='Titulo' />
                <input type="number" placeholder='Valor' />
                <input type="text" placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}