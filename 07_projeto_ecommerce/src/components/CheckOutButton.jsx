import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOutButton = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const handleCheckOut = () => {
    if (cartItems.length <= 0) {
      toast.error("Carrinho vazio!");
    } else {
      toast.success("compra finalziada com sucess!");
      navigate("/thank-you", { state: { cartItems } });
      setCartItems([]);
    }
  };

  return <button onClick={handleCheckOut}>Finalizar compra</button>;
};

export default CheckOutButton;
