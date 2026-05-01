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
export const Info = styled.div `
z-index: 2;
padding: 10px ;
width: 50%;

h1{
    font-size:6rem;
    color: #ffffff;
    font-weight: 700;
}
p{
    font-size: 18px;
    color: #ffffff;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 20px;
}

`
export const Poster = styled.div `
z-index: 2;
img{
    width: 300px;
    border-radius: 10px;
}

`
export const Container = styled.div `
display: flex;  
align-items: center;
justify-content: space-between;
width: 80%;
@media (max-width: 768px) { 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${Info}{
        width: 100%;
    }       
    ${Poster}{
        margin-top: 20px;
    }
}
`