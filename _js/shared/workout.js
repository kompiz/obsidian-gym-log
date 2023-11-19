class workout {

    renderHeader(n) {
        let metadata = app.metadataCache.getFileCache(n.file);
        let date = metadata.frontmatter['date'] ? moment(metadata.frontmatter['date']) : moment(new Date());
        let diff_days = date.diff(moment(), "days");

        let headerText = date.format('YYYY-MM-DD');
        if(diff_days === 0) headerText += " (today)";
        else if(diff_days === -1) headerText += " (yesterday)";
        else if(diff_days === -2) headerText += " (day before yesterday)";

        n.dv.header(1, headerText);
    }

    renderExercises(n) {
        let metadata = app.metadataCache.getFileCache(n.file);
        let exerciseLinks = metadata.frontmatter['exercises']; // Assuming an array of links to exercise notes

        if (exerciseLinks && Array.isArray(exerciseLinks)) {
            n.dv.header(2, "Exercises");
            exerciseLinks.forEach(link => {
                let exerciseMetadata = app.metadataCache.getFileCache(link);
                if (exerciseMetadata && exerciseMetadata.frontmatter) {
                    n.dv.paragraph(`**${exerciseMetadata.frontmatter['name']}**`);
                    n.dv.paragraph(`- Reps: ${exerciseMetadata.frontmatter['reps']}`);
                    n.dv.paragraph(`- Sets: ${exerciseMetadata.frontmatter['sets']}`);
                    n.dv.paragraph(`- RPE: ${exerciseMetadata.frontmatter['RPE']}`);
                    n.dv.paragraph(`- Weight: ${exerciseMetadata.frontmatter['weight']} kg`);
                }
            });
        }
    }

}
