import styled from "styled-components";
const MenuContainer = styled.div `
width:100%;

`
const MenuNavigator = styled.div `
position:fixed;
max-width:400px;
width:100%;
height:100%;
padding:1%;
background:#287bff;

div div:hover{
    background-color:#FEFEFE;
    border-radius: 25px;
}
div div:hover a::before{
    background-color:#FEFEFE;
    border-end-end-radius:25px;
}
div div a .title{
    font-size:1.75em;
}

`
export{
    MenuContainer,
    MenuNavigator
}