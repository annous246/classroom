import React, { useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {post,get} from "./services/api"
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import PickerComponent from './PickerComponent';
import MaterialComponent from './MaterialComponent';
import ClassroomComponent from './ClassroomComponent';
import { Classroom } from './types/props';
import { AxiosError } from 'axios'
import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage'
import ClassroomAdder from './ClassroomAdder'
function App() {
  return (
    <RegisterPage/>
  )
}

export default App;
