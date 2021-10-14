import React, { useState, useEffect } from "react";
import Greeter from "./components/Greeter";

const App = () => {
  const [username, setUsername] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [loaded]);

  if (loaded) {
    return (
      <main className="container">
        <div className="row d-flex w-50 mt-5">
     
          <Greeter name="Leslie" greeting="Hey there" />
          <Greeter name="Donna" greeting="Hello" />
          <Greeter name="Tom" greeting="Caio" />

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>You are logging in as: <span className="text-primary"> {username} </span></p>
        </div>
      </main>
    );
  } else {
    return (
      <>
        <h1>Website Loading...</h1>
        <button onClick={handleLoad}>Load Site</button>
      </>
    );
  }
};

export default App;
