import React, { useState } from "react";
import styled from "styled-components";

const CardETH = () => {
    const [priceDolar, setPriceDolar] = useState('Carregando...');
    const [priceReal, setPriceReal] = useState('Carregando...');
  
    const fetchPrice = async () => {
      try {
        const responseDolar = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
        const responseReal = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHBRL');
        const dataDolar = await responseDolar.json();
        const dataReal = await responseReal.json();
        setPriceDolar(`$${parseFloat(dataDolar.price).toFixed(2)}`);
        setPriceReal(`R$${parseFloat(dataReal.price).toFixed(2)}`);
      } catch (error) {
        setPriceDolar('Erro ao carregar');
        setPriceReal('Erro ao carregar');
      }
    };
  
    return (
      <StyledWrapper>
        <div className="card" onMouseEnter={fetchPrice}>
          <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" alt="Ethereum Logo" />
          <div className="textBox">
            <p className="text head">Ethereum</p>
            <span>Criptomoeda</span>
            <div>
              <p className="text price">{priceReal}</p>
              <p className="text price">{priceDolar}</p>
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
      background: #3c3c3d;
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
      height: 30%;
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
      color: #ffffff;
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
      height: 65%;
      filter: blur(7px);
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
  
export default CardETH;