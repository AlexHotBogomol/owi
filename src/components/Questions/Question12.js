import React from "react";
import { Controller } from "react-hook-form";
import {
  Input,
} from "antd";

const Question12 = ({control}) => (
  <div className="question">
    <label htmlFor="Buss.Aktenzeichen">
      12. Aktenzeichen Bußgeldstelle
    </label>
    <Controller
      as={
        <Input
          placeholder="Aktenzeichen Bußgeldstelle"
          size="large"
        />
      }
      control={control}
      name="Buss.Aktenzeichen"
      id="Buss.Aktenzeichen"
    />
  </div>
);

export default Question12