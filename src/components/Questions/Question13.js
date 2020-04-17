import React from "react";
import { Controller } from "react-hook-form";
import RechtsschutzersicherungOptions from "../../data/RechtsschutzersicherungOptions";
import {
  Select,
} from "antd";

const {Option} = Select;

const Question13 = ({control}) => (
  <div className="question">
    <label htmlFor="Buss.Behorde">
      13. Bußgeldstelle / Ausstellende Behörde
    </label>
    <Controller
      as={
        <Select
          placeholder="Rechtsschutzersicherung"
          style={{ width: "100%" }}
          showSearch={true}
          optionFilterProp="children"
          size="large"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) === 0
          }
        >
          {RechtsschutzersicherungOptions.map((option, index)=>(
            <Option key={index} value={option}>{option}</Option>
          ))}
        </Select>
      }
      control={control}
      name="Buss.Behorde"
      id="Buss.Behorde"
    />
  </div>
);

export default Question13