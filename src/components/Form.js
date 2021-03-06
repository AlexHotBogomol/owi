import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Question1 from "./Questions/Question1";
import { Col, Row, message } from "antd";
import axios from "axios";
import { v1 as uuidv1 } from "uuid";
import disableScroll from "disable-scroll";
import Modal from "./Modal";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
import Question4 from "./Questions/Question4";
import Question5 from "./Questions/Question5";
import Question6 from "./Questions/Question6";
import Question7 from "./Questions/Question7";
import Question8 from "./Questions/Question8";
import Question9 from "./Questions/Question9";
import Question10 from "./Questions/Question10";
import Question12 from "./Questions/Question12";
import Question13 from "./Questions/Question13";
import Question14 from "./Questions/Question14";
import Question11 from "./Questions/Question11";
import Question15 from "./Questions/Question15";
import Question16 from "./Questions/Question16";
import Question17 from "./Questions/Question17";
import Question18 from "./Questions/Question18";
import Question19 from "./Questions/Question19";
import Question20 from "./Questions/Question20";
import Question21 from "./Questions/Question21";
import Question22 from "./Questions/Question22";
import Question23 from "./Questions/Question23";
import Question24 from "./Questions/Question24";
import Question25 from "./Questions/Question25";
import Question26 from "./Questions/Question26";
import Question27 from "./Questions/Question27";
import Question28 from "./Questions/Question28";
import Question29 from "./Questions/Question29";
import Question30 from "./Questions/Question30";

const id = uuidv1();
const CONTACT_API_PATH = "/api/contact/mailer.php";
const UPLOAD_API_PATH = "/api/upload/upload.php";

const Form = () => {
  const { handleSubmit, control, errors, setValue, watch, register, getValues } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${CONTACT_API_PATH}`,
      headers: { "content-type": "application/json" },
      data: data
    })
      .then(response => {
        onOpenModal();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const [checkedRadioImageIndex, SetCheckedRadioImageIndex] = useState(null);

  const onChangeRadioImage = (value, index) => {
    setValue("Unfalldaten.Unfallart", value);
    SetCheckedRadioImageIndex(index);
  };

  const propsForDrager = {
    multiple: true,
    customRequest: ({ file, onSuccess, onError }) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("id", id);
      console.log(formData);
      axios({
        method: "post",
        url: UPLOAD_API_PATH,
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: formData
      })
        .then(function(response) {
          message.success(`${file.name}. Upload war erfolgreich.`);
          onSuccess();
        })
        .catch(function(error) {
          message.error(`${file.name}. Upload hat nicht geklappt.`);
          onError();
        });
    }
  };

  useEffect(() => {
    const firstErrorInput = document.querySelector(".input-error");
    if (firstErrorInput && firstErrorInput.classList.contains("ant-input")) {
      firstErrorInput.focus();
    } else if (
      firstErrorInput &&
      !firstErrorInput.classList.contains("ant-input")
    ) {
      firstErrorInput.querySelector("input").focus();
    }
  }, [errors]);

  const isFahrverbotFrage = watch("Fahrverbot.Frage"),
    isFahrverbotFrage2 = watch("Fahrverbot.Frage2"),
    BeschaftigungFrage = watch("Beschaftigung.Frage"),
    isAuslandFrage = watch("Ausland.Frage"),
    TaetigkeitChechboxGroup = watch("Taetigkeit.ChechboxGroup"),
    isMitfahrgelegenheitFrage = watch("Mitfahrgelegenheit.Frage"),
    isArbeitgeber = watch("Arbeitgeber"),
    isFahrverbotUrlaub = watch("Fahrverbot.Urlaub"),
    FahrverbotGruende = watch("Fahrverbot.Gruende");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = event => {
    setIsModalOpen(false);
  };

  const onOpenModal = event => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen && window.innerWidth >= 1200) {
      disableScroll.on();
    } else if (isModalOpen && window.innerWidth < 1200) {
      document.body.style.overflow = "hidden";
    } else {
      disableScroll.off();
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Question1 control={control} />
        <Row gutter={30}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Question2 control={control} errors={errors} />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Question3 control={control} errors={errors} />
          </Col>
        </Row>
        <Question4 control={control} errors={errors} />
        <Question5 control={control} errors={errors} />
        <Question6 control={control} errors={errors} />
        <Row gutter={30}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Question7 control={control} errors={errors}/>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Question8 control={control} errors={errors} />
          </Col>
        </Row>
        <Question9 control={control} />
        <Question10 control={control} />
        <Question11
          control={control}
          errors={errors}
          onChangeRadioImage={onChangeRadioImage}
          checkedRadioImageIndex={checkedRadioImageIndex}
        />
        <Question12 control={control} />
        <Question13 control={control} />
        <Question14 control={control} />
        <Question15 control={control} propsForDrager={propsForDrager} />
        <Question16 control={control} propsForDrager={propsForDrager} />
        <Question17 control={control} propsForDrager={propsForDrager} />
        <div className="message-info">
          <span>
            Sofern Ihnen ein Fahrverbot droht und eine Umwandlung / ein Absehen
            vom Fahrverbot beantragt werden soll, benötigen wir von Ihnen
            weitere Informationen und Nachweise.
          </span>
        </div>
        <Question18 control={control} isFahrverbotFrage={isFahrverbotFrage} />
        {isFahrverbotFrage2 === "Ja" && isFahrverbotFrage === "Ja" ? (
          <>
            <Question19
              BeschaftigungFrage={BeschaftigungFrage}
              control={control}
              errors={errors}
            />
            <Question20 isAuslandFrage={isAuslandFrage} control={control} />
            <Question21 control={control} />
            <Question22
              TaetigkeitChechboxGroup={TaetigkeitChechboxGroup}
              control={control}
            />
            <Question23 control={control} />
            <Question24
              isMitfahrgelegenheitFrage={isMitfahrgelegenheitFrage}
              control={control}
            />
            <Question25 isArbeitgeber={isArbeitgeber} control={control} />
            <Question26
              isFahrverbotUrlaub={isFahrverbotUrlaub}
              BeschaftigungFrage={BeschaftigungFrage}
              FahrverbotGruende={FahrverbotGruende}
              control={control}
            />
            <Question27 control={control} />
            <Question28 control={control} />
            <div className="message-info">
              <span>
                Die benannten Gründe für die Umwandlung müssen gegenüber der
                Behörde bzw. dem Gericht zwingend glaubhaft gemacht werden.
                Hierfür benötigen wir von Ihnen nachweise wie:
              </span>
              <ul>
                <li>Einkommensnachweise;</li>
                <li>Arbeitsvertrag/ Gewerbeanmeldung;</li>
                <li>Stellungnahme des Arbeitgebers;</li>
              </ul>
              <span>
                die sie uns jetzt (
                <a
                  className="link"
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hier klicken
                </a>
                ) oder zeitnah per E-Mail an die:{" "}
                <a className="link" href="mailto:info@brs-ag.de">
                  info@brs-ag.de
                </a>{" "}
                einreichen können. Nähere Informationen senden wir Ihnen nach
                Abschließen des Formulars per E-Mail.
              </span>
            </div>
          </>
        ) : null}
        <Question29 control={control} />
        <Question30 control={control} />
        <input type="hidden" value={id} name="id" ref={register}/>
        <button className="btn" type="submit">
          Daten senden
        </button>
        <p className="message-info message-success">
          <span>
            Bitte überprüfen Sie Ihre Eingaben vor dem Absenden auf Richtigkeit!
          </span>
        </p>
      </form>
      <Modal isOpen={isModalOpen} onClose={onCloseModal} bgColor="#ffffff">
        <div className="modal-content">
          <div className="modal-icon">
            <svg
              className="checkMark"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="checkMark-bg"
                d="M53.76 0H2.24C1.001 0 0 1.001 0 2.24V53.76C0 54.999 1.001 56 2.24 56H53.76C54.999 56 56 54.999 56 53.76V2.24C56 1.001 54.999 0 53.76 0Z"
                fill="#FFCC00"
              />
              <path
                className="checkMark-item"
                d="M16 25.5L24.5 36.5L38.5 17.5"
                stroke="none"
              />
            </svg>
          </div>
          <h1 className="modal-title">
            Vielen Dank für Ihre Angaben und die Übersendung der Verfahrensunterlagen!
          </h1>
          <div className="modal-description">
            <p>Wir werden uns nunmehr für Sie legitimieren und Akteneinsicht beantragen.</p>
            <p>Nach Erhalt der Akte kommen wir auf den Vorgang zurück.</p>
            <p>Sollten Sie zum Verfahren weitere Unterlagen erhalten, so reichen Sie uns diese bitte stets unaufgefordert und unter Angabe des Aktenzeichens ein.</p>
          </div>
          <div className="modal-btnWrapper">
            <button
              className="btn"
              onClick={onCloseModal}
            >
              Abschließen
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Form;
