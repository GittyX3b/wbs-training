import { Student } from "./components/Student";
import "./index.css";

// You can work here or download the template
const studentData = {
  id: 1,
  firstName: "Testy",
  lastName: "McTest",
  age: 42,
  course: "Web Development",
  city: "Berlin",
  picture: "https://randomuser.me/api/portraits/women/28.jpg",
  points: 100,
  graduate: true,
};

// Your components go here

const App = () => {
  return (
    <div>
      <Student {...studentData} />
    </div>
  );
};

export default App;
