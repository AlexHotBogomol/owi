import React from "react";
import { Controller } from "react-hook-form";
import RechtsschutzersicherungOptions from "../../data/RechtsschutzersicherungOptions";
import {
  Select,
} from "antd";

const {Option} = Select;

const Question9 = ({control}) => (
  <div className="question">
    <label htmlFor="Clientdata.Rechtsschutzersicherung">
      9. Rechtsschutzersicherung
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
      name="Clientdata.Rechtsschutzersicherung"
      id="Clientdata.Rechtsschutzersicherung"
    />
  </div>
);

export default Question9