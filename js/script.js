// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri Gabutero
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"
/**
 * This function checks to see if the user is old enough to see certain movies
 */
function myButtonClicked() {
  //input
  const age = parseInt(document.getElementById("age").value)

  //process and output
  if (age >= 18) {
    document.getElementById("rating").innerHTML =
      "You can watch R rated movies alone."
  } else if (age >= 13 && age < 18) {
    document.getElementById("rating").innerHTML =
      "You can watch PG-13 rated movies alone."
  } else if (age >= 5 && age < 13) {
    document.getElementById("rating").innerHTML =
      "You can watch G and/or PG rated movies alone."
  } else {
    document.getElementById("rating").innerHTML =
      "You're probably too young to do most things."
  }
}
