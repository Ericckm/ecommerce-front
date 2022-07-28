import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
margin: 20px 0px; 
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=> props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Erick.</Logo>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ex soluta qui quibusdam aut numquam distinctio illo magnam laborum earum autem, illum cupiditate maiores corrupti nulla minus. Minima facere at assumenda cumque dicta quasi inventore, ex fuga autem ut ullam sunt optio odit veritatis eum modi, reiciendis officiis, corporis consectetur ab! Illum dolore rem nostrum cumque tempore sed! Ea quae dolores impedit id cumque assumenda quia! Blanditiis, dicta. Veniam similique eum repudiandae ut iusto at adipisci nostrum asperiores. Beatae dolorum laudantium obcaecati! Hic, incidunt. Delectus, error illum. Odio officia exercitationem vel quo ipsam inventore repellat. Sapiente quasi rem deserunt cumque.</Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:'10px'}}/>
                Av. Prof. Francisco Morato, 1184 - Butantã, São Paulo - SP, 05512-100
            </ContactItem>
            <ContactItem><Phone style={{marginRight:'10px'}}/>
                +55 11 92548-4754
            </ContactItem>
            <ContactItem><MailOutlined style={{marginRight:'10px'}}/>
                contact@erick.dev
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer