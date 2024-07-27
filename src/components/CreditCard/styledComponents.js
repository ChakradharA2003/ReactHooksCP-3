// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
  }
`
export const CreditCardDisplay = styled.div`
  background-color: #3b4b69;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px 40px 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 50%;
    width: 100%;
  }
`
export const CreditCardDetails = styled.div`
  background-color: #ffffff;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 40px 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 50%;
    width: 100%;
  }
`
export const CardHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 35px;
`
export const HorizontalLine = styled.hr`
  border: 2px solid #ffd773;
  height: 0.5px;
  width: 210px;
`
export const CreditCardImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 100%;
  background-size: cover;
  height: 60%;
  padding: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 25px;
  }
`
export const CreditCardNumber = styled.p`
  color: #ffffff;
  font-size: 50px;
  font-family: 'Roboto';
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 25px;
  }
`

export const CreditCardHolderName = styled.p`
  color: #ffffff;
  font-size: 35px;
  font-family: 'Roboto';
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 18px;
  }
`
export const CardHolderNameHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 300;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 16px;
  }
`
export const InputContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 16px #d3d9e0;
  padding: 25px 20px 25px 20px;
`
export const PaymentMethodHeading = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
  font-size: 25px;
`
export const Input = styled.input`
  outline: none;
  background-color: transparent;
  padding: 6px 3px 6px 8px;
  font-family: 'Roboto';
  color: #475569;
  margin: 10px;
  width: 100%;
  border: 1px solid #475569;
  font-size: 20px;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
