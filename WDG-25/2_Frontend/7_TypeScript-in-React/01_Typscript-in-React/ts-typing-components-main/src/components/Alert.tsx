// components/Alert.tsx
// This component should receive `message` (string) and possible alert are "info", "warn","error"
// If the application is in development mode, output the message to the console as well using the appropriate method
// process? = "DefinetlyTyped" on github => npm i --save-dev @types/node

type AlertProps = {
  message: string;
  type: "info" | "warn" | "error";
};

const Alert = ({ message, type }: AlertProps) => {
  if (process.env.NODE_ENV === "development") {
    console.log(message);
  }

  return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;
