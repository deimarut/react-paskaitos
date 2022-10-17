import { Greeting } from "./Greeting/Gretting";
import { Page } from "./Page/Page";

function App() {
  return (
    <div className ="App">
      <Greeting isLoggedIn={true} unreadMessages = {[1, 1, 1, 1]} />
      </div>
  );
}

function Pages() {
  return (
    <div>
      <Page />
    </div>
  );
}

export default Pages;