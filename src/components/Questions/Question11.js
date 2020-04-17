import React from "react";
import { Controller } from "react-hook-form";
import errorMessages from "../../utils/errorMessages";
import RadioImage from "../RadioImage";
import Img1 from "../Illustrations/Img1";
import Img2 from "../Illustrations/Img2";
import Img3 from "../Illustrations/Img3";
import Img4 from "../Illustrations/Img4";
import Img5 from "../Illustrations/Img5";
import Img6 from "../Illustrations/Img6";

const RadioImages = [
  {
    id: "first",
    value: "Geschwindigkeit",
    image: <Img1/>
  },
  {
    id: "second",
    value: "Handy am Steuer",
    image: <Img2/>
  },
  {
    id: "third",
    value: "Rotlichtverstoß",
    image: <Img3/>
  },
  {
    id: "fourth",
    value: "Abstandsverstoß",
    image: <Img4/>
  },
  {
    id: "fifth",
    value: "Alkoholverstoß",
    image: <Img5/>
  },
  {
    id: "sixth",
    value: "Sonstiger Vorwurf",
    image: <Img6/>
  },
];

const Question11 = ({control, errors, onChangeRadioImage, checkedRadioImageIndex}) => (
  <div className="question">
    <label className="required" htmlFor="Clientdata.Vorwurf">
      11. Wie lautet der Vorwurf?
    </label>
    <Controller
      as={
        <div className="radioImages">
          {RadioImages.map((radioImage, index) => {
            return (
              <RadioImage
                onChangeRadioImage={onChangeRadioImage}
                name="Buss.Vorwurf"
                id={radioImage.id}
                key={radioImage.id}
                value={radioImage.value}
                checked={checkedRadioImageIndex !== false && index === checkedRadioImageIndex}
                index={index}
                image={radioImage.image}
              />
            );
          })}
        </div>
      }
      control={control}
      name="Clientdata.Vorwurf"
      id="Clientdata.Vorwurf"
      rules={{
        required: errorMessages.required
      }}
    />
    {errors && errors.Clientdata && errors.Clientdata.Vorwurf && (
      <span className="message-error">
        {errors.Clientdata.Vorwurf.message}
      </span>
    )}
  </div>
);

export default Question11