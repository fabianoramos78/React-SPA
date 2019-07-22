import React from "react";

export default class Address extends React.Component {
  render() {
    return (
      <div className="address">
        <img src="/img/zap.png" alt="Whatsapp Logo" />{" "}
        <strong>(xx)xxxx-xxxx</strong> <br />
        Endereço: Rua São Paulo, 87
      </div>
    );
  }
}
