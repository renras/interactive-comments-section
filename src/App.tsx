import React, { useState } from "react";
import data from "./data";

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
        <img
          src={currentUser.image.png}
          style={{ width: "50px", height: "auto" }}
          alt="current-user-avatar"
        />
      </div>
    </div>
  );
}

export default App;
