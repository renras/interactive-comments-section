import data from "./data";
import CurrentUserContainer from "./Components/CurrentUserContainer";

function App() {
  const currentUser = data.currentUser;

  return (
    <div className="py-6 px-3 bg-light-gray">
      <CurrentUserContainer currentUser={currentUser} />
    </div>
  );
}

export default App;
