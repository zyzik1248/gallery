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

  const next = () => {
    const pos = position + 3;
    const list = photoList?.slice();
    setActivePhotos(list?.splice(pos, 3));
    setPosition(pos);
  };

  const prev = () => {
    const pos = position - 3;
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
          onClick={prev}
        />
        <PrimaryButton
          label="next"
          onClick={next}
          disabled={photoList && position > photoList?.length - 4}
        />
      </div>
    </div>
  );
};

export default App;
