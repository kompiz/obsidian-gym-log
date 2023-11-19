---
id: 1003
date: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
time: <% tp.date.now("HH:mm") %>
weight: <% await tp.system.prompt("Weight", "", true) %>
RPE: <% await tp.system.suggester(["1 (Easiest)", "2", "3", "4", "5", "6", "7", "8", "9", "10 (Nothing left in the tank)"], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]) %>
exercise: Jefferson Curls
muscle_group: Back
note: <% await tp.system.prompt("Note", "", true) %>
reps: 10
sets: 2
tags: [exercise]
---

```dataviewjs

const {exercise} = customJS;
const note = {dv: dv, container: this.container, window: this.window};

exercise.renderDescription(note);

```



```dataviewjs

const {exercise} = customJS;
const note = {dv: dv, container: this.container, window: window};

exercise.renderRPEWeightChart(note);

```