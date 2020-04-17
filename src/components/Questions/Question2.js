import React from "react";
import { Controller } from "react-hook-form";
import errorMessages from "../../utils/errorMessages";
import {
    Input,
} from "antd";

const Question2 = ({control, errors}) => (
    <div className="question">
        <label className="required" htmlFor="Clientdata.Vorname">
            2. Vorname
        </label>
        <Controller
          as={
              <Input
                className={
                    errors &&
                    errors.Clientdata &&
                    errors.Clientdata.Vorname &&
                    "input-error"
                }
                placeholder="Vorname"
                size="large"
              />
          }
          control={control}
          name="Clientdata.Vorname"
          id="Clientdata.Vorname"
          rules={{
              required: errorMessages.required,
              minLength: {
                  value: 2,
                  message: errorMessages.minLength("Vorname")
              },
              pattern: {
                  value: /^[A-Za-z \u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df]+$/i,
                  message: errorMessages.specialChars()
              }
          }}
        />
        {errors && errors.Clientdata && errors.Clientdata.Vorname && (
          <span className="message-error">
              {errors.Clientdata.Vorname.message}
            </span>
        )}
    </div>
);

export default Question2