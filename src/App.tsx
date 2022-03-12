import React, { useEffect, useState } from "react";
import Photos from "./components/photos/Photos";
import { fetchPhotos, PhotoData } from "./rest";

const App = () => {
  const [photoList, setPhotoList] = useState<PhotoData[] | undefined>([]);
  const [activePhotos, setActivePhotos] = useState<PhotoData[] | undefined>([]);

  useEffect(() => {
    const fetch = async () => {
      const photoList = await fetchPhotos();
      setPhotoList(photoList);
      setActivePhotos(photoList?.splice(0,3))
    };

    fetch();
  }, []);

  return <Photos photoList={activePhotos || []} />;
};

export default App;
