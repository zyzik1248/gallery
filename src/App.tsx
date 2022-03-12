import React, { useEffect } from "react";
import { fetchImages } from "./rest";

const App = () => {
  useEffect(() => {
    const fetch = async () => {
      const a = await fetchImages();
      console.log(a)
    };

   fetch()
  }, []);

  return <h1>App</h1>;
};

export default App;
