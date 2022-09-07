import { useState } from "react";
import "./App.css";
import UserNameInput from "./components/userNameInput";
import UserNameList from "./components/userNameList";

const App = () => {
  const [userName, setUserName] = useState([
    {test: 'enter username', id: 1},
  ]);

  const addUserNameHandler = (enteredText) => {
    setUserName((prevUsername) => {
      const updatedUserName = [...prevUsername];
      updatedUserName.unshift({ text: enteredText, id: Math.random() });
      return updatedUserName;
    });
  };

  return (
    <div className="App">
      <section>
        <UserNameInput onAddUsername={addUserNameHandler} />
      </section>
      <section>
        {/* <UserNameList /> */}
      </section>
    </div>
  );
};

export default App;
