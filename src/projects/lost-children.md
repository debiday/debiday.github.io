---
title: The Lost Children
stack: Python, Javasript, React, Flask, HTML, SQLalchemy, postgreSQL, CSS, Mapbox, Geocodio
summary: This project visualizes data of children who went missing at 18 years or younger from 2007 to 2021. 
slug: the-lost-children
order: 1
thumb: ../images/thumbs/lost.png
featuredImg: ../images/featured/lost-1.png
---

This project visualizes the record of children who went missing when they were 18 years or younger from 2007 to 2021. The data is generated from the NAMUS-National Missing and Unidentified Persons System with the search criteria set to search for historical records of all missing children in the US including all 52 states.

The data is supplemented with geolocation data converted by Geocodio, integrated into a Mapbox tileset and visualized with Mapbox studio. The same dataset is used to generate the Age to Year Missing Graph with Gender colour legends and built with React and D3.

Information from the NCMEC is used to supplement the information on both the map and graph by showing categories of children who are missing.

To sign up as a web sleuth, users log into the app with their email and password. Users are then able to perform advanced searches through the database. Search result data is retrieved from the backend asynchronously with AJAX. With the generated results, users are able to securely add notes, save, update and delete their searches with sessions.