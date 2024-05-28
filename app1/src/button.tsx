// src/button.tsx
interface IButton {
  name: string;
}
const Button = ({ name = "test" }: IButton) => {
  return <div>App 1 BTN :: {name}</div>;
};

export default Button;
