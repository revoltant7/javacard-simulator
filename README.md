#An Open Platform for the Simulation of Java Card Applets

##Introduction

This project was produced as part of a BSc Dissertation and was based on a proof of concept MSc Dissertation by Robin Williams.

This project provides an implementation of a Java Card Runtime Enviornment (JCRE) produced using Node.js which is capable of creating virtual smart card devices and sending APDU commands to the smart card devices for execution via a RESTful API. The project also provides a web-based interface for interacting with the JCRE.

A deployment of the platform is available at https://jcsimulator.heroku.com.

## Installation

## Supported Classes

## Tests

This project includes a small number of automate tests using Mocha.js which create smart card devices, install a range of applets on the devices and test the functionality of the applets. A format for creating applet tests is also provided at ...