import { useState, useMemo } from "react";
import { MainContainer } from "./components/MainContainer";
import { PasswordCheckerContext } from "./context/PasswordCheckerContext";

function App() {
  const [password, setPassword] = useState<string>("");

  const contextValue = useMemo(
    () => ({ password, setPassword }),
    [password, setPassword]
  );

  return (
    <PasswordCheckerContext.Provider value={contextValue}>
      <MainContainer />
    </PasswordCheckerContext.Provider>
  );
}

export default App;
