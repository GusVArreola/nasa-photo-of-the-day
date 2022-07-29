import React, { useState, useEffect } from "react";
import NavBar from "./Components/header";
import ImageContainer from "./Components/imageContainer";
import axios from "axios";
import { BASE_URL, API_KEY } from "./index";
import "./App.css";

function App() {
  const initialDate = [new Date().getFullYear().toString(), (new Date().getMonth() + 1).toString(), new Date().getDate().toString()]
  if(initialDate[1].length < 2)initialDate[1] = `0${initialDate[1]}`

  const [typeOfImg, setTypeOfImg] = useState('auto');
  const [dataObj, setDataObj] = useState('This will exist soon');
  const [date, setDate] = useState(`${initialDate[0]}-${initialDate[1]}-${initialDate[2]}`);

  useEffect(()=>{
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
    .then(res=>{
      setDataObj(res.data);
    })
    .catch(res=>{'error?'})
  }, [])
  


  return (
    <div className="App">
      <NavBar setTypeOfImg={setTypeOfImg} />
      <ImageContainer hdurl={dataObj.hdurl} data={dataObj} />
    </div>
  );
};

export default App;