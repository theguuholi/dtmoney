import { Container } from './styles';
import Modal from "react-modal";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <Container>
                <h2>Cadastrar transacao</h2>

                <input type="text" placeholder='Titulo' />
                <input type="number" placeholder='Valor' />
                <input type="text" placeholder='Categoria' />
            </Container>
        </Modal>
    )
}