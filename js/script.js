// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri Gabutero
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"
/**
 * This function checks to see if the user is old enough to see certain movies
 */
function myButtonClicked () {
  //input
  const age = parseInt(document.getElementById("age").value)

  //process and output
  if (age >= 18) {
    document.getElementById("rating").innerHTML = "You can watch R rated movies alone."
  }
  if (age >= 13) {
    document.getElementById("rating").innerHTML = "You can watch PG-13 rated movies alone."
  }
  if (age >= 5) {
    document.getElementById("rating").innerHTML = "You can watch G and/or PG rated movies alone."
  }
  