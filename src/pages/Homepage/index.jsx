import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as jsonViewActions } from "../../store/modules/jsonView/slice";
import Button from "../../components/atoms/Button";
import Footer from "../../components/composite/Footer";
import Header from "../../components/composite/Header";
import Viewer from "../../components/composite/Viewer";
import { selectExpandAllState } from "../../store/modules/jsonView/selectors";
import JsonInput from "../../components/composite/JsonInput";
import "./style.css";

const HomePage = () => {
  // DISPATCH
  const dispatch = useDispatch();

  // VARIABLES
  const localStorageJson = localStorage.getItem("json");
  let localStorageExpandState = localStorage.getItem("expandState");

  // SELECTORS
  const isExpandAllState = useSelector(selectExpandAllState);

  // STATE HOOKS
  const [buttonExpandTitle, setButtonExpandTitle] = useState(
    localStorageExpandState ? "Collapse all" : "Expand all"
  );
  const [json, setJson] = useState(localStorageJson ? localStorageJson : "");
  const [convertedObject, setConvertedObject] = useState(
    localStorageJson ? JSON.parse(localStorageJson) : null
  );

  useEffect(() => {
    if (localStorageExpandState === "true") {
      dispatch(jsonViewActions.setExpandAllState(true));
    } else {
      dispatch(jsonViewActions.setExpandAllState(false));
    }
  }, []);

  useEffect(() => {
    setButtonExpandTitle(isExpandAllState ? "Collapse all" : "Expand all");
  }, [isExpandAllState]);

  // FUNCTIONS
  const expandCollapseHandler = () => {
    localStorage.setItem("expandState", !isExpandAllState);
    dispatch(jsonViewActions.setExpandAllState(!isExpandAllState));
  };

  const convertJson = () => {
    let jsonObject = JSON.parse(json);
    setConvertedObject(jsonObject);
    localStorage.setItem("json", json);
    localStorage.setItem("jsonObject", jsonObject);
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <div className="content__textBlock content__textBlock-inputBlock">
          <JsonInput inputValue={json} setInputValue={setJson} />
        </div>
        <div className="buttons">
          <Button onClick={convertJson} title="Convert" marginBottom={"2rem"} />
          <Button onClick={expandCollapseHandler} title={buttonExpandTitle} />
        </div>
        <div className="content__textBlock content__textBlock-outputBlock">
          <Viewer dataJson={convertedObject} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
