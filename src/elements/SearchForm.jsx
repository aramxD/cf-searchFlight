import React, { useState } from "react";
import styled from "styled-components";

const SearchForm = ({ className }) => {
    const [formValue, setFormValue] = useState('')
  return (
    <>
       <form action="">
        <div class="flightFormCity">
          <label for="departure">From</label>
          <input type="text" placeholder="CDMX" />
        </div>
        <div class="flightFormCity">
          <label for="departure">To</label>
          <input type="text" placeholder="CDMX" />
        </div>

        <div class="flightFormPeople">
          <div class="optionsAdult">
            <label for="adults">Adults:</label>
            <select id="adults" name="adults">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="optionsAdult">
            <label for="adults">Adults:</label>
            <select id="adults" name="adults">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="optionsAdult">
            <label for="adults">Adults:</label>
            <select id="adults" name="adults">
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
