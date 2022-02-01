import data from "./data";
import CurrentUserContainer from "./Components/CurrentUserContainer";

interface CurrentUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

function App() {
  const currentUser: CurrentUser = data.currentUser;

  return (
    <div className="App">
      <CurrentUserContainer currentUser={currentUser} />
    </div>
  );
}

export default App;
