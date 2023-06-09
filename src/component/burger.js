import React, { useState } from "react";
import styled from "styled-components";


const StyledBurger = styled.div`
  width: 7vh;
  height: 7.5vh;
  border:none;
  z-index: 20;
  display: none;
  

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;


  div {
    width: 5rem;
    height: 6px;
    background-color: ${({ open }) => (open ? "#00adb5" : "#00adb5")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    display:0px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>

    </>
  );
};

export default Burger;
