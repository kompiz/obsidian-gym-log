let obsidian = null;

module.exports = async function addExerciseToWorkout(params) {
    console.log("Script: Add exercise to workout.");

    obsidian = params.obsidian;
    const templater = app.plugins.plugins["templater-obsidian"].templater;
    const cache = app.metadataCache;
    let allFiles = app.vault.getMarkdownFiles();

    const activeFile = app.workspace.getActiveFile();
    let metadata = cache.getFileCache(activeFile);

    // Assuming the active file is the workout log
    if (!metadata.frontmatter || !metadata.frontmatter['date']) {
        console.error("Active file is not a valid workout log.");
        return;
    }

    // Filter to get all exercise template files
    const exercises = filterFiles((fm, tags) => tags.includes('#exercise'), allFiles);

    // Display exercises to select
    let exerciseDisplay = await params.quickAddApi.suggester(
        (file) => file.basename,
        exercises
    );

    if (exerciseDisplay == null) {
        params.variables = { notePath: "" };
        return;
    }

    // Create a new exercise log entry from the selected template
    let templateFile = app.vault.getAbstractFileByPath(exerciseDisplay.path);
    let newNote = await templater.create_new_note_from_template(templateFile, activeFile.parent, "Exercise - " + exerciseDisplay.basename);

    // Add exercise details to the workout log
    let logContent = await app.vault.read(activeFile);
    logContent += "\n- [ ] " + newNote.basename; // This adds a checkbox item for the exercise
    await app.vault.modify(activeFile, logContent);

    params.variables = { notePath: newNote.path };
}

function filterFiles(filterFunction, files) {
    const cache = app.metadataCache;
    const result = [];
    for(let f of files) {
        const metadata = cache.getFileCache(f);
        const tags = obsidian.getAllTags(metadata);
        if(filterFunction(metadata.frontmatter, tags))
            result.push(f);
    }
    return result;
}

