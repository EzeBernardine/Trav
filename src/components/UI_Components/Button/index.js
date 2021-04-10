import { Styles } from "./styles";

const Button = ({ text, bgColor, color }) => {
  return (
    <Styles className="App" bgColor={bgColor} color={color}>
      {text}
    </Styles>
  );
};

export default Button;
