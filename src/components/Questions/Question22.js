import React from "react";
import { Controller } from "react-hook-form";
import Checkbox from "antd/lib/checkbox";
import {Input} from "antd";

const options = ['Projektbetreuung / Kundenbetreuung', 'Kundenakquise', 'Sonstige'];

const Question22 = ({ control, TaetigkeitChechboxGroup }) => (
  <>
    <label htmlFor="Taetigkeit.ChechboxGroup">
      22. Für welche konkrete, berufliche Tätigkeit benötigen Sie zwingend ihren Führerschein?
    </label>
    <div className="subquestions">
      <div className="subquestion">
        <Controller
          as={
            <Checkbox.Group options={options}/>
          }
          defaultValue="Nein"
          control={control}
          name="Taetigkeit.ChechboxGroup"
          id="Taetigkeit.ChechboxGroup"
        />
      </div>
      {TaetigkeitChechboxGroup && TaetigkeitChechboxGroup.includes("Sonstige") ? (
        <div className="subquestion">
          <label htmlFor="Taetigkeit.Sonstige">
            Bitte teilen Sie uns hier die Gründe mit, weshalb Sie zwingend auf den Führerschein angewiesen sind
          </label>
          <Controller
            as={
              <Input
                placeholder="Bitte teilen Sie uns hier die Gründe mit, weshalb Sie zwingend auf den Führerschein angewiesen sind"
                size="large"
              />
            }
            control={control}
            name="Taetigkeit.Sonstige"
            id="Taetigkeit.Sonstige"
          />
        </div>
      ) : null}
    </div>
  </>
);

export default Question22;
