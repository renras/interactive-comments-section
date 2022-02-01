import data from "./data";
import Button from "./Components/Button";
import Avatar from "./Components/Avatar";

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
      <div>
        <Avatar src={currentUser.image.png} alt="current-user-avatar" />
        <form>
          <textarea className="resize-none"></textarea>
          <Button>SEND</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
