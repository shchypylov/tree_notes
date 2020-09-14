import styled from "styled-components";
import { Link } from "react-router-dom";

const SCategory = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  transition: 0.3s box-shadow ease;
  min-height: 250px;
  flex: 1 1 250px;
  padding: 20px;
  max-width: 250px;
  box-shadow: 0 0 black;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    opacity: 0;
    transition: 0.3s opacity ease-out;
    display: block;
    position: absolute;
    background: #ffa3b3;
    right: -15px;
    top: 10px;
    width: 60px;
    height: 10px;
    transform: rotate(45deg);
  }

  &:hover {
    cursor: pointer;
    &:after {
      opacity: 1;
      cursor: pointer;
    }
  }

  .category-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &:not(:last-of-type) {
    margin-right: 50px;
  }
`;

export { SCategory };
