import React from "react";
import { Controller } from "react-hook-form";
import {
  Radio,
} from "antd";

const Question1 = ({control}) => (
  <div className="question">
    <label className="required" htmlFor="Clientdata.Geschlecht">
      1. Geschlecht
    </label>
    <Controller
      as={
        <div>
          <Radio.Group
            defaultValue="1"
            style={{
              width: "100%"
            }}
            buttonStyle="solid"
            size="large"
          >
            <Radio.Button
              value="1"
              style={{
                width: "50%",
                textAlign: "center"
              }}
            >
              Herr
            </Radio.Button>
            <Radio.Button
              value="2"
              style={{
                width: "50%",
                textAlign: "center"
              }}
            >
              Frau
            </Radio.Button>
          </Radio.Group>
        </div>
      }
      defaultValue="1"
      control={control}
      className="question--radio"
      name="Clientdata.Geschlecht"
      id="Clientdata.Geschlecht"
    />
  </div>
);

export default Question1