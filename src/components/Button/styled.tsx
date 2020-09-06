import styled from "styled-components";

type SButtonT = {
  background: string;
};

const SButton = styled.div<SButtonT>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  color: #fff;
  border-radius: 20px;
  background: ${(props: SButtonT) => props.background};
`;

export { SButton };
