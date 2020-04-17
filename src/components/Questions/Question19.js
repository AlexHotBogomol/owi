import React from "react";
import { Controller } from "react-hook-form";
import { Radio, Row, Col, Input } from "antd";
import MaskedInput from "antd-mask-input";
import customValidations from "../../utils/customValidation";

const Question19 = ({ control, BeschaftigungFrage, errors}) => (
  <>
    <div className="question">
      <label htmlFor="Beschaftigung.Frage">
        19. Wie ist Ihr Beschäftigungsverhältnis?
      </label>
      <Controller
        as={
          <div>
            <Radio.Group
              defaultValue="1"
              style={{
                width: "100%"
              }}
              buttonStyle="solid"
              size="large"
            >
              <Radio.Button
                value="1"
                style={{
                  width: "33%",
                  textAlign: "center"
                }}
              >
                Selbstständig
              </Radio.Button>
              <Radio.Button
                value="2"
                style={{
                  width: "33%",
                  textAlign: "center"
                }}
              >
                Angestellt
              </Radio.Button>
              <Radio.Button
                value="3"
                style={{
                  width: "33%",
                  textAlign: "center"
                }}
              >
                Sonstiges
              </Radio.Button>
            </Radio.Group>
          </div>
        }
        defaultValue="1"
        className="question--radio3"
        control={control}
        name="Beschaftigung.Frage"
        id="Beschaftigung.Frage"
      />
    </div>
    {BeschaftigungFrage === "2" ? (
      <div className="subquestions">
        <div className="subquestion">
          <label htmlFor="Beschaftigung.Angestellt.Berufsbezeichnung">
            Bitte tragen Sie hier Ihre Berufsbezeichnung ein
          </label>
          <Controller
            as={
              <Input
                placeholder="Bitte tragen Sie hier Ihre Berufsbezeichnung ein"
                size="large"
              />
            }
            control={control}
            name="Beschaftigung.Angestellt.Berufsbezeichnung"
            id="Beschaftigung.Angestellt.Berufsbezeichnung"
          />
        </div>
        <div className="subquestion">
          <label htmlFor="Beschaftigung.Angestellt.Arbeitgeber">
            Bitte tragen Sie hier Name des Arbeitgebers ein
          </label>
          <Controller
            as={
              <Input
                placeholder="Bitte tragen Sie hier Name des Arbeitgebers ein"
                size="large"
              />
            }
            control={control}
            name="Beschaftigung.Angestellt.Arbeitgeber"
            id="Beschaftigung.Angestellt.Arbeitgeber"
          />
        </div>
        <div className="subquestion">
          <label htmlFor="Beschaftigung.Angestellt.StrNr">
            Anschrift des Arbeitgebers/Arbeitsstätte (Straße / Hausnummer)
          </label>
          <Controller
            as={
              <Input
                placeholder="Anschrift des Arbeitgebers/Arbeitsstätte (Straße / Hausnummer)"
                size="large"
              />
            }
            control={control}
            name="Beschaftigung.Angestellt.StrNr"
            id="Beschaftigung.Angestellt.StrNr"
          />
        </div>
        <div className="subquestion">
          <Row gutter={30}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <label htmlFor="Beschaftigung.Angestellt.PLZ">PLZ Ihres Arbeitgebers/Arbeitsstätte</label>
              <Controller
                as={
                  <MaskedInput
                    className={
                      errors &&
                      errors.Beschaftigung &&
                      errors.Beschaftigung.Angestellt &&
                      errors.Beschaftigung.Angestellt.PLZ &&
                      "input-error"
                    }
                    placeholder="PLZ code"
                    size={5}
                    mask="11111"
                  />
                }
                control={control}
                name="Beschaftigung.Angestellt.PLZ"
                id="Beschaftigung.Angestellt.PLZ"
                rules={{
                  validate: {
                    inputPLZCorrect: customValidations.isIncorrectPLZ
                  }
                }}
              />
              {errors && errors.Beschaftigung && errors.Beschaftigung.Angestellt && errors.Beschaftigung.Angestellt.PLZ && (
                <span className="message-error">
                  {errors.Beschaftigung.Angestellt.PLZ.message}
                </span>
              )}
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <label htmlFor="Beschaftigung.Angestellt.Ort">Ort Ihres Arbeitgebers/Arbeitsstätte</label>
              <Controller
                as={<Input placeholder="Ort Ihres Arbeitgebers/Arbeitsstätte" size="large" />}
                control={control}
                name="Beschaftigung.Angestellt.Ort"
                id="Beschaftigung.Angestellt.Ort"
              />
            </Col>
          </Row>
        </div>
      </div>
    ) : BeschaftigungFrage === "3" ? (
      <div className="subquestions">
        <div className="subquestion">
          <label htmlFor="Beschaftigung.Sonstiges.Detail">
            Bitte beschreiben Sie im Detail
          </label>
          <Controller
            as={
              <Input
                placeholder="Bitte beschreiben Sie im Detail"
                size="large"
              />
            }
            control={control}
            name="Beschaftigung.Sonstiges.Detail"
            id="Beschaftigung.Sonstiges.Detail"
          />
        </div>
      </div>
    ) : (
      <div className="subquestions">
        <div className="subquestion">
          <label htmlFor="Beschaftigung.Selbststandig.Gewerbeart">
            Bitte tragen Sie hier Ihre Gewerbeart ein
          </label>
          <Controller
            as={
              <Input
                placeholder="Bitte tragen Sie hier Ihre Gewerbeart ein"
                size="large"
              />
            }
            control={control}
            name="Beschaftigung.Selbststandig.Gewerbeart"
            id="Beschaftigung.Selbststandig.Gewerbeart"
          />
        </div>
        <div className="subquestion">
          <label htmlFor="Beschaftigung.Selbststandig.StrNr">
            Bitte Tragen Sie hier die Anschrift (Straße / Hausnummer) ihres
            Gewerbes ein
          </label>
          <Controller
            as={
              <Input
                placeholder="Bitte Tragen Sie hier die Anschrift (Straße / Hausnummer) ihres Gewerbes ein"
                size="large"
              />
            }
            control={control}
            name="Beschaftigung.Selbststandig.StrNr"
            id="Beschaftigung.Selbststandig.StrNr"
          />
        </div>
        <div className="subquestion">
          <Row gutter={30}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <label htmlFor="Beschaftigung.Selbststandig.PLZ">PLZ Ihres Gewerbes</label>
              <Controller
                as={
                  <MaskedInput
                    className={
                      errors &&
                      errors.Beschaftigung &&
                      errors.Beschaftigung.Selbststandig &&
                      errors.Beschaftigung.Selbststandig.PLZ &&
                      "input-error"
                    }
                    placeholder="PLZ code"
                    size={5}
                    mask="11111"
                  />
                }
                control={control}
                name="Beschaftigung.Selbststandig.PLZ"
                id="Beschaftigung.Selbststandig.PLZ"
                rules={{
                  validate: {
                    inputPLZCorrect: customValidations.isIncorrectPLZ
                  }
                }}
              />
              {errors && errors.Beschaftigung && errors.Beschaftigung.Selbststandig && errors.Beschaftigung.Selbststandig.PLZ && (
                <span className="message-error">
                  {errors.Beschaftigung.Selbststandig.PLZ.message}
                </span>
              )}
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <label htmlFor="Beschaftigung.Selbststandig.Ort">Ort Ihres Gewerbes</label>
              <Controller
                as={<Input placeholder="Ort Ihres Gewerbes" size="large" />}
                control={control}
                name="Beschaftigung.Selbststandig.Ort"
                id="Beschaftigung.Selbststandig.Ort"
              />
            </Col>
          </Row>
        </div>
      </div>
    )}
  </>
);

export default Question19;
