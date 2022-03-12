import React from "react";

import { getPhotoUrl } from "../../utils";

interface Props {
  url: string;
}

const Photo: React.FC<Props> = ({ url }) => {
  return <img className="photo" src={getPhotoUrl(url)} />;
};

export default Photo;
