import { Typewriter } from "../ui/Typewriter";
import UserNameInput from "../ui/UserNameInput";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <Typewriter />
      <UserNameInput />
    </div>
  );
};

export default HomePage;
