import React from "react";
import { Controller } from "react-hook-form";
import {
  Input,
} from "antd";

const Question10 = ({control}) => (
  <div className="question">
    <label htmlFor="Clientdata.Schadennummer">
      10. Schadennummer / Versicherungsscheinnummer
    </label>
    <Controller
      as={
        <Input
          placeholder="Schadennummer / Versicherungsscheinnummer"
          size="large"
        />
      }
      control={control}
      name="Clientdata.Schadennummer"
      id="Clientdata.Schadennummer"
    />
  </div>
);

export default Question10