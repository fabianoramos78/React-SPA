import React from "react";

export default class Logo extends React.Component {
  render() {
    return(
      <div className="logo">
        <picture>
          <source media="(max-width: 768px)" srcSet="/img/logomarca_S.png"/>
          <source media="(min-width: 769px)" srcSet="/img/logomarca_L.png"/>
          <img src="/img/logomarca_L.png" alt="Logomarca"/>
        </picture>
      </div>
    )
  }
}
