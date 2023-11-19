---
id: 293271
date: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
time: <% tp.date.now("HH:mm") %>
weight: <% await tp.system.prompt("Weight", "", true) %>
RPE: <% await tp.system.suggester(["1 (Easiest)", "2", "3", "4", "5", "6", "7", "8", "9", "10 (Nothing left in the tank)"], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]) %>
exercise: Hammercurls
muscle_group: Biceps
note: <% await tp.system.prompt("Note", "", true) %>
reps: 6
sets: 6
video_url: "https://www.youtube.com/embed/xb6XLeWUVr8?feature=oembed"
instructions: 'This is the instruction for this workout'
tags:
 - exercise
---

```dataviewjs

const {exercise} = customJS;
const note = {dv: dv, container: this.container, window: window};

exercise.renderDescription(note);
exercise.renderRPEWeightChart(note);

```