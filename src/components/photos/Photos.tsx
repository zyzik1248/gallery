import React, { useEffect, useRef } from "react";

import { PhotoData } from "./../../rest";
import Photo from "./Photo";

import "./photos.less";

interface Props {
  photoList: PhotoData[];
}

const Photos: React.FC<Props> = ({ photoList }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref?.current?.classList?.remove("photos-animation");
    setTimeout(() => ref?.current?.classList?.add("photos-animation"), 200);
  }, [photoList]);

  return (
    <div ref={ref} className="photos photos-animation">
      {photoList.map((el) => (
        <Photo key={el.id} url={el.url} />
      ))}
    </div>
  );
};

export default Photos;
