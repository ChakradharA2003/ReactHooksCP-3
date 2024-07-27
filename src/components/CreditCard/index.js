// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardDisplay,
  CreditCardDetails,
  CardHeading,
  HorizontalLine,
  CreditCardImage,
  CreditCardNumber,
  CreditCardHolderName,
  CardHolderNameHeading,
  InputContainer,
  PaymentMethodHeading,
  InputsContainer,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, changeCardNumber] = useState('')
  const [cardHolder, changeCardHolder] = useState('')
  const onChangeCardNumber = event => changeCardNumber(event.target.value)
  const onChangeCardHolder = event => changeCardHolder(event.target.value)
  const onChangeData = event => event.preventDefault()
  console.log(cardHolder, cardNumber)
  return (
    <MainContainer>
      <CreditCardDisplay>
        <div>
          <CardHeading>CREDIT CARD</CardHeading>
          <HorizontalLine />
        </div>
        <CreditCardImage data-testid="creditCard">
          <CreditCardNumber>{cardNumber}</CreditCardNumber>
          <div>
            <CardHolderNameHeading>CARDHOLDER NAME</CardHolderNameHeading>
            <CreditCardHolderName>{cardHolder}</CreditCardHolderName>
          </div>
        </CreditCardImage>
      </CreditCardDisplay>
      <CreditCardDetails>
        <InputContainer as="form" onChange={onChangeData}>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <InputsContainer>
            <Input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={onChangeCardNumber}
            />
            <Input
              type="text"
              placeholder="Cardholder Name"
              value={cardHolder}
              onChange={onChangeCardHolder}
            />
          </InputsContainer>
        </InputContainer>
      </CreditCardDetails>
    </MainContainer>
  )
}
export default CreditCard
