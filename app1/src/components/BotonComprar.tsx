import styled from "styled-components";

export const BotonComprar = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 123, 255, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4);
  }
`;
