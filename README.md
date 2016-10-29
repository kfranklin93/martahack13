## Marta for Everyone
###  Marta Hackathon Team Project - [See here for list of teams](https://docs.google.com/spreadsheets/d/1vtETcx_vf6j0Zsbn_oMWnx-3LTDF7-3jtWKeBoBPFWs/edit)


### **This Repository is for web development.[The repository for Android development on principally the same application is managed at the follow repository](https://github.com/violetaria/MartaForEveryone).**


Thank You to #martaionic !



# Quickstart

**In Terminal**

1. Clone the repository `https://github.com/kfranklin93/martahack13.git`
2. Install necessary dependencies with NodeJS `npm install`
3. Start the NodeJS server `npm start`
4. Navigate to `localhost:5000`
5. Peruse our prototype! (Or open an issue, make a pull request!)



## Features
marta.io displays realtime MARTA API results for trains, updated every 10s. It breaks this data down into three views:

1. Dashboard

  The main view, a list of stations shows when you first launch the app. If location access is granted, the three closest stations stick to the top. Dragging left on a station lets you star it, which will put it at the very top of your list for quick access.

  ![img](http://i.imgur.com/cILuvvp.gif)

2. Station View

  Tap a station on the dashboard and you can see its upcoming trains, with schedule data mixed in if no realtime data is present for a given direction.
  By tapping a station you can see the buses that are attached and their direction of travel.

3. Train View

  After drilling down to station view, a second tap on a train takes you to that train's estimates. This is useful if you want to know when your train is estimated to arrive at a future station.

# martahack13
