import { useState } from "react";
import React from 'react';

import styled from "styled-components";

const CardUSD = () => {
    const [priceReal, setPriceReal] = useState('Carregando...');
  
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=USDTBRL');
        const data = await response.json();
        setPriceReal(`R$${parseFloat(data.price).toFixed(2)}`);
      } catch (error) {
        setPriceReal('Erro ao carregar');
      }
    };
  
    return (
      <StyledWrapper>
        <div className="card" onMouseEnter={fetchPrice}>
          <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="Dólar" />
          <div className="textBox">
            <p className="text head">Dólar</p>
            <span>Criptomoeda (USDT)</span>
            <div>
              <p className="text price">{priceReal}</p>
            </div>
          </div>
        </div>
      </StyledWrapper>
    );
  };
  
  const StyledWrapper = styled.div`
    .card {
      width: 195px;
      height: 285px;
      background: #002868;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      transition: 0.2s ease-in-out;
      position: relative;
    }
  
    .img {
      height: 15%;
      position: absolute;
      transition: 0.2s ease-in-out;
      z-index: 1;
    }
  
    .textBox {
      opacity: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      transition: 0.2s ease-in-out;
      z-index: 2;
      color: ;
    }
  
    .textBox > .text {
      font-weight: bold;
    }
  
    .textBox > .head {
      font-size: 20px;
      font-weight: bold;
    }
  
    .textBox > .price {
      font-size: 20px;
      font-weight: bold;
    }
  
    .textBox > span {
      font-size: 14px;
      font-weight: bold;
    }
  
    .card:hover > .textBox {
      opacity: 1;
    }
  
    .card:hover > .img {
      height: 30%;
      filter: blur(10px);
      animation: anim 3s infinite;
    }
  
    @keyframes anim {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
  
    .card:hover {
      transform: scale(1.04) rotate(-1deg);
    }
  `;
  
export default CardUSD;
