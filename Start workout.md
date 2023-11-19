```button
name Start Workout
type command
action QuickAdd: Start workout
color green
```

```dataviewjs
let pages = dv.pages('"Workout Logs" and #workout').sort(p => p.date, "desc");

dv.header(3, "Total number of workouts: " + pages.length.toString());

dv.table(["Last workouts", "Date", "Workout type"], pages.slice(0,5)
	.map(e => [e.file.link, moment(e['date']).format('YYYY-MM-DD'), e['workout']]))
```
