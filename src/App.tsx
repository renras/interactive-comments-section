import data from "./data";
import CurrentUserContainer from "./Components/CurrentUserContainer";
import CommentsContainer from "./Components/CommentsContainer";

function App() {
  const currentUser = data.currentUser;
  const comments = data.comments;

  return (
    <div className="flex flex-col gap-4 py-6 px-3 bg-light-gray">
      <CommentsContainer comments={comments} />
      <CurrentUserContainer currentUser={currentUser} />
    </div>
  );
}

export default App;
