import { useState } from "react";
import data from "./data";
import Button from "./Components/Button";

interface CurrentUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

function App() {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(data.currentUser);

  return (
    <div className="App">
      <div>
        <img src={currentUser.image.png} alt="current-user-avatar" />
      </div>
      <form>
        <textarea className="resize-none"></textarea>
        <Button>SEND</Button>
      </form>
    </div>
  );
}

export default App;
