import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface Header{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : Header){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova Transacao</button>
            </Content>
        </Container>
    )
}