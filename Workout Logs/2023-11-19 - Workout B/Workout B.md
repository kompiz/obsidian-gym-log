---
id: 74C8-89
date: 2023-11-19 12:26:56
workout_title: Strength block
exercises: [1004, 1001, 1002, 1003]
workout_order: [1004, 1001, 1002, 1003]
workout: Strength block
type: 1
sub_type: 1
tags:
 - workout
---

```dataviewjs

const {workout} = customJS;
const note = {dv: dv, container: this.container, window: window};

workout.renderHeader(note);

```

## Remaining Exercises
```dataviewjs

const {workout} = customJS;
const note = {dv: dv, container: this.container, window: window};

workout.renderRemaining(note);

```

## Performed Exercises
```button
name Log
type command
action QuickAdd: Log
color green
```
^button-2vzj
```dataviewjs

const {workout} = customJS;
const note = {dv: dv, container: this.container, window: window};

workout.renderPerformed(note);
workout.renderEffortChart(note);

```

```dataviewjs
class SimpleTimer {
    constructor(duration) {
        this.duration = duration;
        this.timer = null;
    }

    start() {
        this.remainingTime = this.duration;
        console.log(`Starting timer for ${this.duration} seconds...`);
        this.timer = setInterval(() => this.tick(), 1000);
    }

    tick() {
        if (this.remainingTime > 0) {
            console.log(`Time Remaining: ${this.remainingTime} seconds`);
            this.remainingTime--;
        } else {
            this.stop();
            console.log("Timer finished!");
        }
    }

    stop() {
        clearInterval(this.timer);
        console.log("Timer stopped.");
    }
}

let simpleTimer = new SimpleTimer(10);

// Delay the execution until the DOM is fully loaded document.addEventListener('DOMContentLoaded', () => { document.getElementById('startTimerButton').addEventListener('click', () => simpleTimer.start()); });
```

```button 
name Start 
type command 
action QuickAdd: Start timer
color green
```


```button
name Add Current Time
type line(1) text
action 12:26:56
replace [1,1]
templater true
```
