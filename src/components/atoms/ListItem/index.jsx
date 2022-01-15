import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectExpandAllState,
} from "../../../store/modules/jsonView/selectors";
import "./style.css";

const Li = ({ keyWord, children, id }) => {
  // VARIABLES
  const key = `${keyWord}:`;
  const isChildrenPrimitive = typeof children !== "object";

  const isExpandAll = useSelector(selectExpandAllState);

  // STATE HOOKS
  const [isVisible, setIsVisible] = useState(false);

  //   EFFECT HOOKS
  useEffect(() => {
    if (isExpandAll) {
      setIsVisible(true);
    }
  }, [isExpandAll]);

  // FUNCTIONS
  const onClickHandler = (e) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <li className="list__item" onClick={onClickHandler}>
      <p className="list__item-key">{key}</p>

      {isChildrenPrimitive ? (
        <div className="list__item-string">{children}</div>
      ) : (
        <>
          <div className={`${!isVisible && "d-none"}`}>{children} </div>
          {!isVisible ? "..." : null}
        </>
      )}
    </li>
  );
};

export default React.memo(Li);
