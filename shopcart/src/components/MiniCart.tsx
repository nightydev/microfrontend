import { useState, useEffect } from "react";
import styled from "styled-components";
import { Product } from "../types";

const CartButton = styled.button<{ $hasItems: boolean }>`
  position: relative;
  background: ${props => props.$hasItems ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e0e0e0'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4757;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4);
`;

const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  width: 380px;
  max-height: ${props => props.$isOpen ? '600px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  opacity: ${props => props.$isOpen ? '1' : '0'};
`;

const DropdownHeader = styled.div`
  padding: 20px;
  border-bottom: 2px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 18px;
`;

const ItemCount = styled.span`
  color: #667eea;
  font-weight: bold;
`;

const ItemsList = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 16px;
`;

const CartItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  margin-bottom: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ItemName = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 14px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemPrice = styled.div`
  color: #667eea;
  font-weight: bold;
  font-size: 14px;
`;

const QuantityBadge = styled.span`
  background: #667eea;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #dc3545;
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const EmptyCart = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: #999;
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 12px;
`;

const DropdownFooter = styled.div`
  padding: 16px 20px;
  border-top: 2px solid #f0f0f0;
  background: #f8f9fa;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const TotalLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const TotalPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #667eea;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

export const MiniCart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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
      // Mostrar brevemente el carrito cuando se agrega un producto
      setIsOpen(true);
      setTimeout(() => setIsOpen(false), 2000);
    };

    window.addEventListener("addToCart", handleAddToCart as EventListener);
    return () => {
      window.removeEventListener("addToCart", handleAddToCart as EventListener);
    };
  }, []);

  const removeItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    alert(`¡Compra realizada! Total: $${total.toFixed(2)}`);
    setCart([]);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <CartButton 
        $hasItems={totalItems > 0}
        onClick={() => setIsOpen(!isOpen)}
      >
        🛒 Carrito
        {totalItems > 0 && <Badge>{totalItems}</Badge>}
      </CartButton>

      <DropdownContainer $isOpen={isOpen}>
        <DropdownHeader>
          <DropdownTitle>Mi Carrito</DropdownTitle>
          <ItemCount>{totalItems} {totalItems === 1 ? "item" : "items"}</ItemCount>
        </DropdownHeader>

        {cart.length === 0 ? (
          <EmptyCart>
            <EmptyIcon>🛍️</EmptyIcon>
            <div>Tu carrito está vacío</div>
          </EmptyCart>
        ) : (
          <>
            <ItemsList>
              {cart.map((item) => (
                <CartItem key={item.id}>
                  <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
                  </ItemInfo>
                  <QuantityBadge>x{item.quantity}</QuantityBadge>
                  <RemoveButton onClick={() => removeItem(item.id)}>
                    ×
                  </RemoveButton>
                </CartItem>
              ))}
            </ItemsList>

            <DropdownFooter>
              <TotalRow>
                <TotalLabel>Total:</TotalLabel>
                <TotalPrice>${total.toFixed(2)}</TotalPrice>
              </TotalRow>
              <CheckoutButton onClick={handleCheckout}>
                Proceder al Pago
              </CheckoutButton>
            </DropdownFooter>
          </>
        )}
      </DropdownContainer>
    </div>
  );
};
