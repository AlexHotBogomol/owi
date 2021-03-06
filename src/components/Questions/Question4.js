import React from "react";
import { Controller } from "react-hook-form";
import errorMessages from "../../utils/errorMessages";
import {
  Input,
} from "antd";

const Question4 = ({control, errors}) => (
  <div className="question">
    <label className="required" htmlFor="Clientdata.Phone">4. Telefon / Mobil</label>
    <Controller
      as={
        <Input
          className={
            errors &&
            errors.Clientdata &&
            errors.Clientdata.Phone &&
            "input-error"
          }
          placeholder="Telefon / Mobil"
          size="large"
        />
      }
      control={control}
      name="Clientdata.Phone"
      id="Clientdata.Phone"
      rules={{
        required: errorMessages.required
      }}
    />
    {errors && errors.Clientdata && errors.Clientdata.Phone && (
      <span className="message-error">
        {errors.Clientdata.Phone.message}
      </span>
    )}
  </div>
);

export default Question4