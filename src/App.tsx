import data from "./data";
import CurrentUserContainer from "./Components/CurrentUserContainer";
import Comment from "./Components/Comment";

function App() {
  const currentUser = data.currentUser;
  const comments = data.comments;

  return (
    <div className="flex flex-col gap-4 py-6 px-3 bg-light-gray">
      <div>
        <Comment
          avatar={comments[0].user.image.png}
          username={comments[0].user.username}
          dateCreated={comments[0].createdAt}
          content={comments[0].content}
          score={comments[0].score}
        />
      </div>
      <CurrentUserContainer currentUser={currentUser} />
    </div>
  );
}

export default App;
