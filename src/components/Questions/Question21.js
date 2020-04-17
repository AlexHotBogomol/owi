import React from "react";
import { Controller } from "react-hook-form";
import {
  Input,
} from "antd";

const Question21 = ({control}) => (
  <div className="question">
    <label htmlFor="Berufsweg">
      21. Wie lang ist ihr täglicher Berufsweg bzw. Ihre berufsbedingten Fahrten in km?
    </label>
    <Controller
      as={
        <Input
          placeholder="Anzahl der Kilometer"
          size="large"
        />
      }
      control={control}
      name="Berufsweg"
      id="Berufsweg"
    />
  </div>
);

export default Question21