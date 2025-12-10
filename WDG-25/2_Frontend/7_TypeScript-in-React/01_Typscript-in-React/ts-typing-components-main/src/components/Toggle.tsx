// components/Toggle.tsx
// This component should receive `isOn` (boolean) and `onToggle` (function that takes no arguments and returns void)

// The onToggle function should change the value of `isOn` meaning you need to pass state down ;)

type ToggleProps = {
  isOn: boolean;
  onToggle: (state: boolean) => void;
  // onToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toggle = ({ isOn, onToggle }: ToggleProps) => {
  return <button onClick={() => onToggle(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
};

export default Toggle;
