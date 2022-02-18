import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  /* border: 1px solid transparent; */
  border: 1px outset transparent;
  /* border-radius: 6px; */
  border-radius: 7px;
  text-decoration: none;
  margin-right: .5vh;
  margin-left: .5vh;
  margin-top: .7vh;
  background-image: linear-gradient(to bottom right, rgba(200,0,0,1), rgba(81,0,0,1));
  /* background-color: #810000; */
  color: lightgrey;
`;

export default Button;