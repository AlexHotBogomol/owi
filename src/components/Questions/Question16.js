import React from "react";
import { Controller } from "react-hook-form";
import {
  Upload,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const Question16 = ({control, propsForDrager}) => (
  <div className="question">
    <label htmlFor="Buss.Anhorungsbogen">
      16. Anhörungsbogen
    </label>
    <div
      className="question--upload"
    >
      <Controller
        as={
          <Dragger {...propsForDrager}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Dokument hierher ziehen oder hier klicken
            </p>
            <p className="ant-upload-hint">
              Einzel- oder Massen-Upload.
            </p>
          </Dragger>
        }
        control={control}
        className="question--upload"
        name="Buss.Anhorungsbogen"
        id="Buss.Anhorungsbogen"
      />
    </div>
  </div>
);

export default Question16