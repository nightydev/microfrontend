import styled from "styled-components";

export const CardProducto = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  color: white;
  max-width: 350px;
  margin: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(102, 126, 234, 0.4);
  }
`;

export const ProductoTitulo = styled.h2`
  margin: 0 0 12px 0;
  font-size: 24px;
  font-weight: bold;
`;

export const ProductoDescripcion = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.9;
`;

export const ProductoPrecio = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffd700;
`;
