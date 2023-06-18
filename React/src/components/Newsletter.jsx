import React from 'react'
import styled from 'styled-components'
import nature from '../assets/newsletter.jpg'

const NewsletterContainer = styled.div`
  width: 100%;
  height: 250px;
  background: url(${nature});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
const Container = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin : 0px auto ;
`
const HeaderContainer = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  font-style: italic;
`
const DescConntainer = styled.p`
  font-weight: 700;
  text-align:center ;
  color: white;
  bottom: 1rem;
  font-style: italic;
`
const ContainerEmail = styled.div`
  width: 65%;
  height: 3.2rem;
  display: flex;
  align-items : center ;
  justify-content : space-around ;
  background-color: white;
  border-radius : 5px ;
`
const EmailInput = styled.input`
  width: 75%;
  height: 100%;
  font-size : 25px ;
  border : none ;
  text-align :center ;
  &:focus {
    border: none;
    outline: none;
  }
`
const SubscribeButton = styled.div`
  width: 20%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: white;
  background-color: #00a34d;
  cursor: pointer;
`
function Newsletter() {
  return (
    <NewsletterContainer>
      <Container>
        <HeaderContainer>Abonnez-vous à nos newsletter</HeaderContainer>
        <DescConntainer>
          Ne ratez aucune de nos offres et de nos astuces pour une meilleure
          gestion de nos D3E et un environement durable.
        </DescConntainer>
        <ContainerEmail>
          <EmailInput type="email" placeholder="exemple@gmail.com" />
          <SubscribeButton>S'abonner</SubscribeButton>
        </ContainerEmail>
      </Container>
    </NewsletterContainer>
  )
}
export default Newsletter