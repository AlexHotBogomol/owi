import React from "react";
import { Controller } from "react-hook-form";
import errorMessages from "../../utils/errorMessages";
import {
  Input,
} from "antd";

const Question8 = ({control, errors}) => (
  <div className="question">
    <label className="required" htmlFor="Clientdata.Stadt">
      8. Stadt
    </label>
    <Controller
      as={
        <Input
          className={
            errors &&
            errors.Clientdata &&
            errors.Clientdata.Stadt &&
            "input-error"
          }
          placeholder="Stadt"
          size="large"
        />
      }
      control={control}
      name="Clientdata.Stadt"
      id="Clientdata.Stadt"
      rules={{
        required: errorMessages.required,
        minLength: {
          value: 2,
          message: errorMessages.minLength("Stadt")
        }
      }}
    />
    {errors && errors.Clientdata && errors.Clientdata.Stadt && (
      <span className="message-error">
        {errors.Clientdata.Stadt.message}
      </span>
    )}
  </div>
);

export default Question8