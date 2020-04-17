import React from "react";
import { Controller } from "react-hook-form";
import errorMessages from "../../utils/errorMessages";
import customValidations from "../../utils/customValidation";
import MaskedInput from "antd-mask-input";

const Question7 = ({control, errors}) => (
  <div className="question">
    <label className="required" htmlFor="Clientdata.PLZ">
      7. PLZ
    </label>
    <Controller
      as={
        <MaskedInput
          className={
            errors &&
            errors.Clientdata &&
            errors.Clientdata.PLZ &&
            "input-error"
          }
          placeholder="PLZ code"
          size={5}
          mask="11111"
        />
      }
      control={control}
      name="Clientdata.PLZ"
      id="Clientdata.PLZ"
      rules={{
        required: errorMessages.required,
        validate: {
          inputPLZCorrect: customValidations.isIncorrectPLZ
        }
      }}
    />
    {errors && errors.Clientdata && errors.Clientdata.PLZ && (
      <span className="message-error">
        {errors.Clientdata.PLZ.message}
      </span>
    )}
  </div>
);

export default Question7