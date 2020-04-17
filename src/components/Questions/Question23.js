import React from "react";
import { Controller } from "react-hook-form";
import {
  Input,
} from "antd";

const Question23 = ({control}) => (
  <div className="question">
    <label htmlFor="Fahrleistung">
      23. Wie hoch ist ihre berufliche Fahrleistung pro Jahr?
    </label>
    <Controller
      as={
        <Input
          placeholder="Anzahl der Kilometer"
          size="large"
        />
      }
      control={control}
      name="Fahrleistung"
      id="Fahrleistung"
    />
  </div>
);

export default Question23