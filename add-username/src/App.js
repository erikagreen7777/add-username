import { useState } from "react";
import "./App.css";
import UserNameInput from "./components/userNameInput";
import UserNameList from "./components/userNameList";

const App = () => {
  const [userName, setUserName] = useState("");

  const addUserNameHandler = (enteredText) => {
    setUserName((prevUsername) => {
      const updatedUserName = [...prevUsername];
      updatedUserName.unshift({ text: enteredText, id: Math.random() });
      return updatedUserName;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No username found. Maybe add one?</p>
  );

  if (userName.length > 0) {
    content = <UserNameList items={userName} />;
  }

  return (
    <div className="App">
      <section>
        <UserNameInput onAddUsername={addUserNameHandler} />
      </section>
      <section>{content} </section>
    </div>
  );
};

export default App;
