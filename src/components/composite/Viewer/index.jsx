import React from "react";
import ListItem from "../../atoms/ListItem";
import "./style.css";

const Viewer = ({ dataJson }) => {
  // COMPONENTS
  const JsonNode = ({ item }) => {
    let [key, value] = item;
    let children;

    if (typeof value !== "object") {
      children = value;
    }

    if (typeof value === "object" && Object.keys(value).length > 0) {
      children = Object.entries(value).map((itemObj, index) => (
        <JsonNode item={itemObj} key={index} />
      ));
    }

    return (
      <ul className="list">
        <ListItem id={Math.random()} keyWord={key}>
          {children}
        </ListItem>
      </ul>
    );
  };

  return (
    <div className="viewer">
      <ul className="main-list">
        {dataJson
          ? Object.entries(dataJson).map((item, index) => (
              <JsonNode item={item} key={index} />
            ))
          : null}
      </ul>
    </div>
  );
};

export default Viewer;
