import styled from "styled-components";

const SHeader = styled.div`
  max-width: 1400px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SMenu = styled.div`
  display: flex;
`;

const SMenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export { SHeader, SMenu, SMenuItem };
