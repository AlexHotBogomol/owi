import React from "react";
import { Controller } from "react-hook-form";
import {
  Input,
} from "antd";

const Question27 = ({control}) => (
  <div className="question">
    <label htmlFor="Freizeit">
      27. Wofür benötige Sie sonst im Alltag / Freizeit zwingend das Fahrzeug?
    </label>
    <Controller
      as={
        <Input
          placeholder="Wofür benötige Sie sonst im Alltag / Freizeit zwingend das Fahrzeug?"
          size="large"
        />
      }
      control={control}
      name="Freizeit"
      id="Freizeit"
    />
  </div>
);

export default Question27