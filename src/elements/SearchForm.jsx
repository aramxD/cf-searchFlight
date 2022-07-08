import React, { useState } from "react";
import styled from "styled-components";

const SearchForm = ({ className }) => {
    const [formValue, setFormValue] = useState('')
  return (
    <>
      <form action="">
        <div className="inputs-container">
          <div className="input-container">
            <input
              type="text"
              className="text-input"
              name="originLocationCode"
              id="originLocationCode"
              placeholder=""
              required
            />
            <label className="label" htmlFor="originLocationCode">
              Origen
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="text-input"
              name="destinationLocationCode"
              id="destinationLocationCode"
              placeholder=""
              required
            />
            <label className="label" htmlFor="destinationLocationCode">
              Destino
            </label>
          </div>
          <div className="input-container">
            <input
              type="date"
              className="text-input"
              name="departureDate"
              id="departureDate"
              placeholder=""
              required
            />
            <label className="label" htmlFor="departureDate">
              Fecha de Salida
            </label>
          </div>
          <div className="input-container">
            <input
              type="date"
              className="text-input"
              name="returnDate"
              id="returnDate"
              placeholder=""
              required
            />
            <label className="label" htmlFor="returnDate">
              Fecha de Regreso
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="text-input"
              name="adults"
              id="adults"
              placeholder=""
              required
            />
            <label className="label" htmlFor="adults">
              Adultos
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="text-input"
              name="children"
              id="children"
              placeholder=""
              required
            />
            <label className="label" htmlFor="children">
              Ninos
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="text-input"
              name="infants"
              id="infants"
              placeholder=""
              required
            />
            <label className="label" htmlFor="infants">
              Infantes
            </label>
          </div>
          <button type="submit">Search Flights <box-icon type='solid' name='plane-take-off'></box-icon></button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </>
  );
};

export default styled(SearchForm)``;
