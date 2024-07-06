import styled from "styled-components";

const StyledButton = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background: darkviolet;
  }
`;

let arr = ["a", "b", "c"];
console.log("arr:", arr);

const flag = true;
if (flag) {
  arr = [];
}
console.log("arr1:", arr);

export default function Button() {
  return (
    <div>
      <h1>Hello Vite + Styled-Components</h1>
      <StyledButton>Styled Components Button</StyledButton>
    </div>
  );
}
