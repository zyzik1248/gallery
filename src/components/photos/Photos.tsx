import React from "react";
import { PhotoData } from "./../../rest";
import Photo from "./Photo";
import './photos.less'

interface Props {
  photoList: PhotoData[];
}

const Photos: React.FC<Props> = ({ photoList }) => {
  return (
    <div className="photos">
      {photoList.map((el) => (
        <Photo key={el.id} url={el.url} />
      ))}
    </div>
  );
};

export default Photos;
