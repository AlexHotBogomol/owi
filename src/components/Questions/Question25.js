import React from "react";
import { Controller } from "react-hook-form";
import { Radio } from "antd";

const Question25 = ({ control, isArbeitgeber }) => (
  <div className="question">
    <label htmlFor="Arbeitgeber">
      25. Könnten Sie im Rahmen ihrer beruflichen Tätigkeit für die Dauer des
      Fahrverbots (z.B. durch Homeoffice o.ä) auf den Führerschein verzichten?
    </label>
    <Controller
      as={
        <div>
          <Radio.Group
            defaultValue="Nein"
            style={{
              width: "100%"
            }}
            buttonStyle="solid"
            size="large"
          >
            <Radio.Button
              value="Ja"
              style={{
                width: "50%",
                textAlign: "center"
              }}
            >
              Ja
            </Radio.Button>
            <Radio.Button
              value="Nein"
              style={{
                width: "50%",
                textAlign: "center"
              }}
            >
              Nein
            </Radio.Button>
          </Radio.Group>
        </div>
      }
      defaultValue="Nein"
      className="question--radio"
      control={control}
      name="Arbeitgeber"
      id="Arbeitgeber"
    />
    {(isArbeitgeber === "Ja") ? (
      <p className="message-info message-info--small">
        <span>
          Eine Umwandlung ist in diesem Fall möglicherweise ausgeschlossen
        </span>
      </p>
    ) : null}
  </div>
);

export default Question25;
