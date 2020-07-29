# Workout Tracker
BootCampSpot Web Development - Week 12 Homework

![Preview](https://github.com/BCS-WebDev/Week12-Homework/blob/master/public/assets/FitnessTracker.gif)

## Notes on MongoDB & Mongoose
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This project serves us in getting used to a nosql database
in MongoDB. Nosql databases are useful for many reasons such as: Handle large volumes of data at
high speeds with a scale-out architecture, ability to store data as BSON, enable easy updates to
schemas and fields, amongnst others. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mongoose is to mongo just as sequelize is to mysql. It
provides a way to make schemas and handle models. 

## Motive & Action
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The project is a simple fitness tracker that keeps track of a
workout that holds many exercises. This workout can be continued or a new workout can be created.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Since we are only implementing the backend portion with mongo,
and also because of the way the app is strucutured. We will be storing exercises as an array in the
workout table instead of creating a relational database.

## Installation
Install `node.js` and run `npm install` to install the necessary node packages.

* Installs:
    - express node package
    - morgan node package
    - mongoose node package
    - path node package

## Usage
* For local development:
    - Install MongoDB.
    - Run `node server.js` to start the server.
    - Open a web browser and navigate to localhost:3000.
* For use:
    - https://salty-everglades-29438.herokuapp.com/

## Questions
Contact: kevin1choi@gmail.com
