import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, ButtonTypeTransaction } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void; 
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {
  
  const [typeTransaction, setTypeTransaction] = useState('deposit');
  
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input 
          type="number"
          placeholder="Valor" 
        />

        <TransactionTypeContainer>
          
          <ButtonTypeTransaction 
            type="button"
            onClick={() => { setTypeTransaction('deposit'); }}
            isActive={typeTransaction === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entradas" />          
            <span>Entradas</span>
          </ButtonTypeTransaction>

          <ButtonTypeTransaction 
            type="button"
            onClick={() => { setTypeTransaction('withdraw'); }}
            isActive={typeTransaction === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saídas" />          
            <span>Saídas</span>
          </ButtonTypeTransaction>

        </TransactionTypeContainer>

        <input placeholder="Categoria" />
    
        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  )
}