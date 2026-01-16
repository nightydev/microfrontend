import styled from "styled-components";

export const PerfilUsuario = styled.div`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  color: white;
  max-width: 350px;
  margin: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(240, 147, 251, 0.4);
  }
`;

export const UsuarioAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const UsuarioNombre = styled.h2`
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const UsuarioEmail = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  opacity: 0.9;
  text-align: center;
`;

export const UsuarioRol = styled.span`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 20px;
`;
