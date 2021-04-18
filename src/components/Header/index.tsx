import { HeaderProps } from "../../types/types";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header({ onOpenTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
