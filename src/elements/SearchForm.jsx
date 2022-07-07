import React from "react";
import styled from "styled-components";

const SearchForm = ({ className }) => {
  return (
    <>
      <form action="">
        <div class="inputs-container">
          <div class="input-container">
            <input
              type="text"
              class="text-input"
              name="originLocationCode"
              id="originLocationCode"
              placeholder=""
              required
            />
            <label class="label" for="originLocationCode">
              Origen
            </label>
          </div>
          <div class="input-container">
            <input
              type="text"
              class="text-input"
              name="destinationLocationCode"
              id="destinationLocationCode"
              placeholder=""
              required
            />
            <label class="label" for="destinationLocationCode">
              Destino
            </label>
          </div>
          <div class="input-container">
            <input
              type="date"
              class="text-input"
              name="departureDate"
              id="departureDate"
              placeholder=""
              required
            />
            <label class="label" for="departureDate">
              Fecha de Salida
            </label>
          </div>
          <div class="input-container">
            <input
              type="date"
              class="text-input"
              name="returnDate"
              id="returnDate"
              placeholder=""
              required
            />
            <label class="label" for="returnDate">
              Fecha de Regreso
            </label>
          </div>
          <div class="input-container">
            <input
              type="text"
              class="text-input"
              name="adults"
              id="adults"
              placeholder=""
              required
            />
            <label class="label" for="adults">
              Adultos
            </label>
          </div>
          <div class="input-container">
            <input
              type="text"
              class="text-input"
              name="children"
              id="children"
              placeholder=""
              required
            />
            <label class="label" for="children">
              Ninos
            </label>
          </div>
          <div class="input-container">
            <input
              type="text"
              class="text-input"
              name="infants"
              id="infants"
              placeholder=""
              required
            />
            <label class="label" for="infants">
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
