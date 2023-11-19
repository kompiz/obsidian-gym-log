class exercise {

    renderDescription(n) {
        let metadata = app.metadataCache.getFileCache(n.file);

        // Extracting exercise details from frontmatter
        let name = metadata.frontmatter['name'];
        let reps = metadata.frontmatter['reps'];
        let sets = metadata.frontmatter['sets'];
        let rpe = metadata.frontmatter['RPE'];
        let weight = metadata.frontmatter['weight']; // Adding weight field

        // Displaying exercise details
        n.dv.header(2, name + " Exercise Details");
        if (reps != null) {
            n.dv.paragraph("**Reps:** " + reps);
        }
        if (sets != null) {
            n.dv.paragraph("**Sets:** " + sets);
        }
        if (rpe != null) {
            n.dv.paragraph("**RPE (Rate of Perceived Exertion):** " + rpe);
        }
        if (weight != null) {
            n.dv.paragraph("**Weight:** " + weight + " kg"); // Displaying weight
        }
    }
}
