import React from "react";
import { Controller } from "react-hook-form";
import { Radio } from "antd";
import Checkbox from "antd/lib/checkbox";

const options = ['Regional', 'Bundeswelt', 'Ausland'];

const Question20 = ({ control, isAuslandFrage}) => (
  <>
    <div className="question">
      <label htmlFor="Ausland.Frage">
        20. Sind Sie beruflich regional, bundesweit oder auch im Ausland unterwegs? Mehrfachnennungen möglich
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
        control={control}
        className="question--radio"
        name="Ausland.Frage"
        id="Ausland.Frage"
      />
    </div>
    {isAuslandFrage === "Ja" ? (
      <div className="subquestions">
        <div className="subquestion">
          <Controller
            as={
              <Checkbox.Group options={options}/>
            }
            defaultValue="Nein"
            control={control}
            name="Ausland.ChechboxGroup"
            id="Ausland.ChechboxGroup"
          />
        </div>
      </div>
    ) : null}
  </>
);

export default Question20;
