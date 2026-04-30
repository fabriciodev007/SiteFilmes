import styled from "styled-components";
export const Background = styled.div `
background-image: url(${(Props) => Props.img});
height: 100vh;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    right: 100%;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}
`;