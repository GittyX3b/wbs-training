// components/Greeting.tsx
// This component should receive a `name` string prop, if no name is passed, render 'Hello Stranger'
type GreetingProps = {
  name: string;
};

const Greeting = ({ name = "Stranger" }: GreetingProps) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
