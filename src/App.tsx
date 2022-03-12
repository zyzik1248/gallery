import React, { useEffect, useState } from "react";
import { GoMarkGithub } from "react-icons/go";

import { fetchPhotos, PhotoData } from "./rest";
import Photos from "./components/photos/Photos";
import PrimaryButton from "./components/buttons/PrimaryButton";

import "./App.less";

const App = () => {
  const [photoList, setPhotoList] = useState<PhotoData[] | undefined>([]);
  const [activePhotos, setActivePhotos] = useState<PhotoData[] | undefined>([]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const photoList = await fetchPhotos();
      setPhotoList(photoList);
      setActivePhotos(photoList?.slice().splice(0, 3));
    };

    fetch();
  }, []);

  const changeSide = (side : number) => {
    const pos = position + side*3;
    const list = photoList?.slice();
    setActivePhotos(list?.splice(pos, 3));
    setPosition(pos);
  };

  return (
    <div className="app">
      <a
        href="https://github.com/zyzik1248/photos"
        rel="noreferrer"
        target="_blank"
      >
        <GoMarkGithub className="github-icon" />
      </a>
      <Photos photoList={activePhotos || []} />
      <div className="buttons">
        <PrimaryButton
          disabled={position === 0}
          label="previous"
          onClick={()=>changeSide(-1)}
        />
        <PrimaryButton
          label="next"
          onClick={()=>changeSide(1)}
          disabled={photoList && position > photoList?.length - 4}
        />
      </div>
    </div>
  );
};

export default App;
