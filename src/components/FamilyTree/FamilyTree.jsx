import React from "react";
import Grandpa from "./Grandpa";
import "./familyTree.css";
import { AssetContext } from "./AssetContext";

const FamilyTree = () => {
  const assets = "Diamond";
  // const newassets = 'Gold'
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <AssetContext.Provider value={assets}>
        <Grandpa></Grandpa>
      </AssetContext.Provider>
    </div>
  );
};

export default FamilyTree;
