import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";

const Question29 = ({ control }) => (
  <div className="question">
    <label htmlFor="Informationen">
      29. Hier können Sie uns weitere Informationen zu dem Vorfall oder zu den
      Gründen der Angewiesenheit auf den Führerschein mitteilen
    </label>
    <Controller
      as={
        <Input
          placeholder="Zusätzliche Informationen zum Vorfall oder Gründe für die Verwendung eines Führerscheins"
          size="large"
        />
      }
      control={control}
      name="Informationen"
      id="Informationen"
    />
  </div>
);

export default Question29;
