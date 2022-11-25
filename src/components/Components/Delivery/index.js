import React from "react";

import styles from "./Delivery.module.scss";
import PhaseDelivery from "../../UI/PhaseDelivery";

const { getPhaseDelivery } = require("../../../db/phase.db");
const phases = getPhaseDelivery();

const Delivery = () => {
  return (
    <div className={styles.Delivery}>
      <div className="container">
        <div className={styles.DeliveryContent}>
          <h4 className={styles.DeliveryTitle}>Оплата и доставка</h4>
          <div className={styles.DeliveryPhase}>
            {phases.map((phase) => {
              return <PhaseDelivery phase={phase} key={phase.id} />;
            })}
          </div>
          <div className={styles.DeliveryMap}>
            <iframe
              src="https://yandex.ru/map-widget/v1/-/CCUfIKD6gB"
              width="1110px"
              height="322px"
              frameborder="0"
              allowfullscreen="true"
              style={{ position: "relative", borderRadius: "14px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
