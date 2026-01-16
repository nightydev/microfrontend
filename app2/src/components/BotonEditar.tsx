import styled from "styled-components";

export const BotonEditar = styled.button`
  background-color: #28a745;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
  width: 100%;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(40, 167, 69, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.4);
  }
`;
