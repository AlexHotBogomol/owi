import React from "react";
import { Controller } from "react-hook-form";
import { Radio } from "antd";

const Question28 = ({ control }) => (
  <>
    <div className="question">
      <label htmlFor="Voreintragung">
        28. Haben Sie Voreintragungen im Verkehrsregister (Punkte)?
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
                  width: "33%",
                  textAlign: "center"
                }}
              >
                Ja
              </Radio.Button>
              <Radio.Button
                value="Nein"
                style={{
                  width: "33%",
                  textAlign: "center"
                }}
              >
                Nein
              </Radio.Button>
              <Radio.Button
                value="Keine Ahnung"
                style={{
                  width: "33%",
                  textAlign: "center"
                }}
              >
                Keine Ahnung
              </Radio.Button>
            </Radio.Group>
          </div>
        }
        defaultValue="Selbstständig"
        className="question--radio3"
        control={control}
        name="Voreintragung"
        id="Voreintragung"
      />
    </div>
  </>
);

export default Question28;
