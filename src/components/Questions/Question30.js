import React from "react";
import { Controller } from "react-hook-form";
import {
  Upload,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const Question30 = ({control, propsForDrager}) => (
  <div className="question">
    <label htmlFor="Weitere_Dokumente">
      30. Zudem können Sie uns weitere Dokumente übersenden
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
        name="Weitere_Dokumente"
        id="Weitere_Dokumente"
      />
    </div>
  </div>
);

export default Question30