import React, { useEffect, useState } from "react";
import Photos from "./components/photos/Photos";
import { fetchPhotos, PhotoData } from "./rest";
import "./App.less";
import PrimaryButton from "./components/buttons/PrimaryButton";

const App = () => {
  const [photoList, setPhotoList] = useState<PhotoData[] | undefined>([]);
  const [activePhotos, setActivePhotos] = useState<PhotoData[] | undefined>([]);

  useEffect(() => {
    const fetch = async () => {
      const photoList = await fetchPhotos();
      setPhotoList(photoList);
      setActivePhotos(photoList?.splice(0, 3));
    };

    fetch();
  }, []);

  return (
    <div className="app">
      <Photos photoList={activePhotos || []} />
      <div className="buttons">
        <PrimaryButton label="next" onClick={() => {}} />
        <PrimaryButton label="previous" onClick={()=>{}}/>
      </div>
    </div>
  );
};

export default App;
