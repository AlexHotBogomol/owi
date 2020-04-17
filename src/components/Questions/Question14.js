import React from "react";
import { Controller } from "react-hook-form";
import {
  DatePicker,
} from "antd";


const Question14 = ({control}) => (
  <div className="question">
    <label htmlFor="Buss.Datum">
      14. Datum Bußgeldbescheid
    </label>
    <Controller
      as={
        <DatePicker
          style={{
            width: "100%"
          }}
          placeholder="01.04.2020"
          mode="date"
          format="YYYY-MM-DD"
          showTime={false}
          showToday={false}
          size="large"
          disabledDate={d => !d || d.isAfter(Date.now())}
        />
      }
      control={control}
      name="Buss.Datum"
      id="Buss.Datum"
    />
  </div>
);

export default Question14