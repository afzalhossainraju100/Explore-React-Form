import React from "react";
import { AssetContext } from "./FamilyTree";

const Spacial = () => {
  const assets = React.useContext(AssetContext);
  return (
    <div>
      <h3>Spacial</h3>
      <p>Assets: {assets}</p>
    </div>
  );
};

export default Spacial;
