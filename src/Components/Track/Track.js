import React, { useCallback } from "react";
import "./Track.css";

const Track = (props) => {
  const addTrack = useCallback(() => {
    props.onAdd(props.track);
  }, [props]);

  const removeTrack = useCallback(() => {
    props.onRemove(props.track);
  }, [props]);

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          {" "}
          -{" "}
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={addTrack}>
          {" "}
          +{" "}
        </button>
      );
    }
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;