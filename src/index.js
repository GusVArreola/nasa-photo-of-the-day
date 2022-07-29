import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
export const BASE_URL = 'https://api.nasa.gov/planetary/apod'
export const API_KEY = '13DdKFS7Rdh2ZXhDzm9GqLkaRUbb96ET5drnAKmR'


ReactDOM.render(
<App />,
document.getElementById("root"))