import React from "react";
import { Controller } from "react-hook-form";
import { Radio } from "antd";

const Question18 = ({ control, isFahrverbotFrage }) => (
  <>
    <div className="question">
      <label htmlFor="Fahrverbot.Frage">
        18. Droht bei Ihnen möglicherweise ein Fahrverbot?
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
        name="Fahrverbot.Frage"
        id="Fahrverbot.Frage"
      />
    </div>
    {isFahrverbotFrage === "Ja" ? (
      <div className="subquestions">
        <div className="subquestion">
          <label htmlFor="Fahrverbot.Frage2">
            Soll ein Antrag auf ein Absehen vom Fahrverbot berücksichtigt werden?
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
            name="Fahrverbot.Frage2"
            id="Fahrverbot.Frage2"
          />
        </div>
      </div>
    ) : null}
  </>
);

export default Question18;
