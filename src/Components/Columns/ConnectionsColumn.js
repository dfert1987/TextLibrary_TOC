import React from "react";
import "../CSS/Main.css";

export const ConnectionsColumn = (props) => {
  const stripes = (index) => {
    if (index === 0 || index % 2 === 0) {
      return "connectionsBlock";
    } else {
      return "connectionsBlock tan";
    }
  };
  const connections = (section, allTitles) => {
    if (section && allTitles) {
      return section.map((item, index) => (
        <React.Fragment key={allTitles.indexOf(item.Title)}>
          <div className={stripes(index)}>
            <p className="connection">
              Grade {item.Connection1Grade} Unit {item.Connection1Unit},{" "}
              {item.Connection1Title}
            </p>
            {item.Connection2Grade !== undefined ? (
              <p className="connection">
                Grade {item.Connection2Grade} Unit {item.Connection2Unit},{" "}
                {item.Connection2Title}
              </p>
            ) : null}
            {item.Connection3Grade !== undefined ? (
              <p className="connection">
                Grade {item.Connection3Grade} Unit {item.Connection3Unit},{" "}
                {item.Connection3Title}
              </p>
            ) : null}
            {item.Connection4Grade !== undefined ? (
              <p className="connection">
                Grade {item.Connection4Grade} Unit {item.Connection4Unit},{" "}
                {item.Connection4Title}
              </p>
            ) : null}
          </div>
        </React.Fragment>
      ));
    }
  };

  return <>{connections(props.section, props.allTitles)}</>;
};
