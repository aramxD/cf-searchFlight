import React, { useState } from "react";
import styled from "styled-components";
import { Label } from "./StyledElements";

const SearchForm = ({ className }) => {
  const [formValue, setFormValue] = useState("");

  return (
    <>
      <form action="">
        <div class="flightFormCity">
          <Label for="departure">From</Label>
          <input type="text" placeholder="CDMX" />
        </div>
        <div class="flightFormCity">
          <Label for="departure">To</Label>
          <input type="text" placeholder="CDMX" />
        </div>

        <div class="flightFormPeople">
          <div class="optionsAdult">
            <Label for="adults">Adults:</Label>
            <select id="adults" name="adults">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="optionsChildren">
            <Label for="children">Children:</Label>
            <select id="children" name="children">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="optionsInfants">
            <Label for="infants">Infants:</Label>
            <select id="infants" name="infants">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        <div class="flightFormDate">
          <div class="departure">
            <label for="">Departure</label>
            <input type="date" />
          </div>
          <div class="return">
            <label for="">Return</label>
            <input type="date" />
          </div>
        </div>
      </form>
    </>
  );
};

export default styled(SearchForm)``;
