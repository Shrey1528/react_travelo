import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <HeroStyled id="hero">
      <div className="background">
        <img src={heroImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quos
            pariatur aliquid rerum, modi delectus temporibus quas veniam
            molestias ab?
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where do you want to go?</label>
            <input type="text" placeholder="Search for your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in </label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out </label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </HeroStyled>
  );
}

const HeroStyled = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .title {
      color: white;
      font-family: "Macondo", cursive;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.8rem;
        label {
          font-size: 1.5rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          margin-top: 0.5rem;
          font-size: 1rem;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 0;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        font-size: 1.1rem;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 28rem;
    width: 17rem;
    .background {
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          padding-top: 1.2rem;
          font-size: 1rem;
        }
        p {
          font-size: 0.7rem;
          padding: 0.7vw 0.7rem;
        }
      }
      .search {
        flex-direction: column;
        gap: 0.8rem;
        padding: 1rem;
        .container {
          label {
            font-size: 1rem;
            color: #03045e;
          }
          padding: 0 0.1rem;
          input[type="text"] {
            font-size: 0.8rem;
          }
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 0.8rem;
          font-size: 1rem;
        }
      }
    }
  }
`;
