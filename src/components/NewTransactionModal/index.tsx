import { Container, RadioBox, TransactionTypeContainer } from './styles';
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from 'react';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){
    const [type, setType] = useState('income');



    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <button type="button">
                <img src={closeImg} alt="Fechar" onClick={onRequestClose} className="react-modal-close" />
            </button>
            <Container>
                <h2>Cadastrar transacao</h2>

                <input type="text" placeholder='Titulo' />
                <input type="number" placeholder='Valor' />

                <TransactionTypeContainer>

                    <RadioBox type='button' onClick={() => setType("income")} isActive={type === "income"}>
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type='button' onClick={() => setType("outcome")} isActive={type === "outcome"}>
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input type="text" placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}