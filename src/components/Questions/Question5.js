import React from "react";
import { Controller } from "react-hook-form";
import errorMessages from "../../utils/errorMessages";
import {
  Input,
} from "antd";

const Question5 = ({control, errors}) => (
  <div className="question">
    <label htmlFor="Clientdata.Email">
      5. E-mail
    </label>
    <Controller
      as={
        <Input
          className={
            errors &&
            errors.Clientdata &&
            errors.Clientdata.Email &&
            "input-error"
          }
          placeholder="E-mail"
          size="large"
        />
      }
      control={control}
      name="Clientdata.Email"
      id="Clientdata.Email"
      rules={{
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: errorMessages.incorrect("E-mail")
        }
      }}
    />
    {errors && errors.Clientdata && errors.Clientdata.Email && (
      <span className="message-error">
        {errors.Clientdata.Email.message}
      </span>
    )}
  </div>
);

export default Question5