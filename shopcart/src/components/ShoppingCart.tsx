import { useState, useEffect } from "react";
import styled from "styled-components";
import { Product } from "../types";

const CartContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #667eea;
`;

const CartTitle = styled.h2`
  margin: 0;
  color: #333;
  font-size: 28px;
`;

const CartBadge = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
  }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0 0 4px 0;
  color: #333;
  font-size: 18px;
`;

const ItemDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #667eea;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QuantityButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #764ba2;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Quantity = styled.span`
  min-width: 32px;
  text-align: center;
  font-weight: bold;
  color: #333;
`;

const RemoveButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: #c82333;
    transform: scale(1.05);
  }
`;

const CartFooter = styled.div`
  margin-top: 24px;
  padding-top: 16px;
  border-top: 2px solid #667eea;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const TotalLabel = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const TotalPrice = styled.span`
  font-size: 32px;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #999;
`;

const EmptyCartIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
`;

const EmptyCartText = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const ShoppingCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const handleAddToCart = (event: CustomEvent) => {
      const product = event.detail;
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
    };

    window.addEventListener("addToCart", handleAddToCart as EventListener);
    return () => {
      window.removeEventListener("addToCart", handleAddToCart as EventListener);
    };
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    alert(`¡Compra realizada! Total: $${total.toFixed(2)}`);
    setCart([]);
  };

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>🛒 Mi Carrito</CartTitle>
        <CartBadge>{totalItems} {totalItems === 1 ? "item" : "items"}</CartBadge>
      </CartHeader>

      {cart.length === 0 ? (
        <EmptyCart>
          <EmptyCartIcon>🛍️</EmptyCartIcon>
          <EmptyCartText>Tu carrito está vacío</EmptyCartText>
        </EmptyCart>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemInfo>
              <ItemPrice>
                <Price>${(item.price * item.quantity).toFixed(2)}</Price>
                <QuantityControls>
                  <QuantityButton onClick={() => updateQuantity(item.id, -1)}>
                    -
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton onClick={() => updateQuantity(item.id, 1)}>
                    +
                  </QuantityButton>
                </QuantityControls>
                <RemoveButton onClick={() => removeItem(item.id)}>
                  Eliminar
                </RemoveButton>
              </ItemPrice>
            </CartItem>
          ))}

          <CartFooter>
            <TotalContainer>
              <TotalLabel>Total:</TotalLabel>
              <TotalPrice>${total.toFixed(2)}</TotalPrice>
            </TotalContainer>
            <CheckoutButton onClick={handleCheckout}>
              Proceder al Pago
            </CheckoutButton>
          </CartFooter>
        </>
      )}
    </CartContainer>
  );
};
