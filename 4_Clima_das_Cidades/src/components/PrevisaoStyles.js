import styled from "styled-components";

export const PrevisaoContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #333;
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 10px;
      margin-bottom: 5px;
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      color: #333;
      gap: 5px;

      img {
        margin-right: 10px;
      }
    }
  }
`

export const FiltrosContainer = styled.div`
    background-color:rgb(233, 233, 233);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 10px;
`

export const PrevisaoInfos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    span:hover {
        cursor: pointer;
    }
`

export const Data = styled.span`
    background-color: rgba(255, 217, 0, 0.42);
    color: #000;
    padding: 5px;
    border-radius: 5px;
    transition: .5s;
`

export const Temperatura = styled.span`
    background-color: rgba(255, 94, 0, 0.42);
    color: #000;
    padding: 5px;
    border-radius: 5px;
    transition: .5s;
`

export const Clima = styled.span`
    background-color: rgba(0, 183, 255, 0.42);
    color: #000;
    padding: 5px;
    border-radius: 5px;
    transition: .5s;
`

export const VerMais = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
            background-color: #0056b3;
        }
    }
`