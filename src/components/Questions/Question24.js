import React from "react";
import { Controller } from "react-hook-form";
import {Radio, Select} from "antd";

const {Option} = Select;

const Question24 = ({ control, isMitfahrgelegenheitFrage }) => (
  <div className="question">
    <label htmlFor="Mitfahrgelegenheit.Frage">
      24. Könnten Sie für ihre beruflichen oder privaten Fahrten auf öffentliche
      Verkehrsmittel ausweichen oder eine Mitfahrgelegenheit bilden?
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
      name="Mitfahrgelegenheit.Frage"
      id="Mitfahrgelegenheit.Frage"
    />
    {isMitfahrgelegenheitFrage === "Ja" ? (
      <p className="message-info message-info--small">
        <span>
          Eine Umwandlung ist in diesem Fall möglicherweise ausgeschlossen
        </span>
      </p>
    ) : (
      <div className="subquestions">
        <div className="subquestion">
          <label htmlFor="Mitfahrgelegenheit.Select">
            Warum können Sie nicht auf öffentliche Verkehrsmittel umsteigen?
          </label>
          <Controller
            as={
              <Select
                style={{ width: "100%" }}
                size="large"
                defaultValue="Anbindung"
              >
                <Option value="Anbindung">Anbindung lässt eine Einhaltung der arbeitsvertraglichen Arbeitszeiten nicht zu</Option>
                <Option value="Arbeitsmaterialen">Ich kann meine Arbeitsmaterialen nicht mittels öffentlicher Verkehrsmittel transportieren.</Option>
                <Option value="Berufskraftfahrer">Ich bin Berufskraftfahrer</Option>
                <Option value="Kundenstamm">Mein Kundenstamm/Das Auftragsgebiet befindet sich überwiegend in ländlichen Gebieten bzw. muss ich meine Tätigkeit in ländlichen Gebieten wahrnehmen.</Option>
                <Option value="Terminabsprachen">Aufgrund berufsbedingte, kurzfristiger Terminabsprachen/Notfällen benötige ich den Führerschein. </Option>
                <Option value="Berufsausubung">Im Rahmen meiner Berufsausübung ist meine Präsenz vor Ort zwingend erforderlich.</Option>
              </Select>
            }
            defaultValue="Anbindung"
            control={control}
            name="Mitfahrgelegenheit.Select"
            id="Mitfahrgelegenheit.Select"
          />
        </div>
      </div>
    )}
  </div>
);

export default Question24;
