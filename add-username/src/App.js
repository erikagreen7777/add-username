import { useState } from "react";
import "./App.css";
import UserNameInput from "./components/userNameInput";
import UserNameList from "./components/userNameList";

const App = () => {
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [userNameAndAge, setUserNameAndAge] = useState("");

  const addUserNameHandler = (...enteredText) => {
    const [enteredUserName, enteredAge] = enteredText;
    const formattedUserNameAndAge = `${enteredUserName} (${enteredAge})`;

    setUserNameAndAge((prevEnteredText) => {
      const updatedUserName = [...prevEnteredText];
      // console.log("updated " + updatedUserName)
      updatedUserName.unshift({
        text: formattedUserNameAndAge,
        id: Math.random().toString(),
      });
      return updatedUserName;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No username found. Maybe add one?</p>
  );

  if (userNameAndAge.length > 0) {
    content = <UserNameList items={userNameAndAge} />;
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
