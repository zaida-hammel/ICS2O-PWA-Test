// Created by: Zaida Hammel
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function converts fahrenheit to celsius.
 */
function calculate() {
  // input
  const fahrenheit = parseFloat(
    document.getElementById("degrees-fahrenheit").value
  )

  // process
  const celsius = ((fahrenheit - 32) * 5) / 9

  // output
  document.getElementById("celsius").innerHTML =
    "The degrees celsius is: " + celsius.toFixed(2) + "°"
}
