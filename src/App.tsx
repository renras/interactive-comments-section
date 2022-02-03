import { useContext } from "react";
import AppContext from "./store/app-context";

import CurrentUserContainer from "./Components/CurrentUserContainer";
import CommentsContainer from "./Components/CommentsContainer";

function App() {
  const appContext = useContext(AppContext);

  return (
    <div className="flex flex-col gap-4 py-6 px-3 bg-light-gray">
      <CommentsContainer comments={appContext.comments} />
      <CurrentUserContainer currentUser={appContext.currentUser} />
    </div>
  );
}

export default App;
