---
date: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
workout_title: Strength block
exercises: [1001, 1002, 1003]
workout_order: [1001, 1002, 1003]
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
workout.renderRPEChart(note);

```
