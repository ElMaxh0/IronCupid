import styledComponents from "styled-components";
const ContainerCards = styledComponents.div `
width: 100%;
align-items: right;
height: 100%;
`
const Card=styledComponents.div `
margin-top: 0%;
filter: drop-shadow(5px 5px 8px green);
position:relative;
padding: 10px;
background-color: #f7f7f7;
text-align: center;
max-width: 450px;
width:100%;
height: 70vh;
margin: auto;
margin-top: 3%;
color: #3b5998;
border: 1px solid f6f6f6;
border-radius: 25px;
`
const PeopleImage = styledComponents.img`
width:100%;
height:60%;
border-radius: 25px;
z-index: -5;
`
export{
    ContainerCards,
    Card,
    PeopleImage
}