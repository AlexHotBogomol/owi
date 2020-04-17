import React from "react";
import { Controller } from "react-hook-form";
import { Input, Radio, Select } from "antd";

const { Option } = Select;

const Question26 = ({
  control,
  isFahrverbotUrlaub,
  BeschaftigungFrage,
  FahrverbotGruende
}) => (
  <div className="question">
    <label htmlFor="Fahrverbot.Urlaub">
      26. Können Sie das Fahrverbot mittels Urlaub überbrücken?
    </label>
    <Controller
      as={
        <div>
          <Radio.Group
            defaultValue="Nein"
            style={{
              width: "100%"
            }}
            buttonStyle="solid"
            size="large"
          >
            <Radio.Button
              value="Ja"
              style={{
                width: "50%",
                textAlign: "center"
              }}
            >
              Ja
            </Radio.Button>
            <Radio.Button
              value="Nein"
              style={{
                width: "50%",
                textAlign: "center"
              }}
            >
              Nein
            </Radio.Button>
          </Radio.Group>
        </div>
      }
      defaultValue="Nein"
      className="question--radio"
      control={control}
      name="Fahrverbot.Urlaub"
      id="Fahrverbot.Urlaub"
    />
    {isFahrverbotUrlaub === "Ja" ? (
      <p className="message-info message-info--small">
        <span>
          Eine Umwandlung ist in diesem Fall möglicherweise ausgeschlossen
        </span>
      </p>
    ) : (
      <div className="subquestions">
        <div className="subquestion">
          {(BeschaftigungFrage !== "2" && BeschaftigungFrage !== "3") ? (
            <>
              <div className="subquestion">
                <label htmlFor="Fahrverbot.Gruende">
                  Bitte teilen Sie uns die Gründe mit, welche der Überbrückung
                  des Fahrverbots mittels Urlaub entgegenstehen.
                </label>
                <Controller
                  as={
                    <Select
                      style={{ width: "100%" }}
                      size="large"
                      defaultValue="Auftragsfristen"
                    >
                      <Option value="Auftragsfristen">Auftragsfristen</Option>
                      <Option value="Wirtschaftliche Situation">
                        Wirtschaftliche Situation
                      </Option>
                      <Option value="Sonstiges">Sonstiges</Option>
                    </Select>
                  }
                  defaultValue="Auftragsfristen"
                  control={control}
                  name="Fahrverbot.Gruende"
                  id="Fahrverbot.Gruende"
                />
              </div>
              {FahrverbotGruende === "Sonstiges" ? (
                <div className="subquestion">
                  <label htmlFor="Fahrverbot.Sonstige">Sonstige</label>
                  <Controller
                    as={<Input placeholder="Sonstige" size="large" />}
                    control={control}
                    name="Fahrverbot.Sonstige"
                    id="Fahrverbot.Sonstige"
                  />
                </div>
              ) : null}
            </>
          ) : (BeschaftigungFrage !== "1" && BeschaftigungFrage !== "3") ? (
            <>
              <div className="subquestion">
                <label htmlFor="Fahrverbot.Urlaubswochen">
                  Wie viele Urlaubswochen könnten Sie von Ihrem Arbeitgeber
                  maximal am Stück gewährt bekommen?
                </label>
                <Controller
                  as={
                    <Input
                      placeholder="Wie viele Urlaubswochen könnten Sie von Ihrem Arbeitgeber maximal am Stück gewährt bekommen?"
                      size="large"
                    />
                  }
                  control={control}
                  name="Fahrverbot.Urlaubswochen"
                  id="Fahrverbot.Urlaubswochen"
                />
              </div>
              <div className="subquestion">
                <label htmlFor="Fahrverbot.Urlaubstage">
                  Wie viele Urlaubstage stehen Ihnen noch zur freien Verfügung
                </label>
                <Controller
                  as={
                    <Input
                      placeholder="Wie viele Urlaubstage stehen Ihnen noch zur freien Verfügung"
                      size="large"
                    />
                  }
                  control={control}
                  name="Fahrverbot.Urlaubstage"
                  id="Fahrverbot.Urlaubstage"
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    )}
  </div>
);

export default Question26;
