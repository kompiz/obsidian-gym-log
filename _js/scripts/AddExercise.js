let obsidian = null;

module.exports = async function listFiles(params) {
    console.log("Script: Add exercise to workout.");

    obsidian = params.obsidian;
    const templater = app.plugins.plugins["templater-obsidian"].templater;
    const cache = this.app.metadataCache;
    let allFiles = this.app.vault.getMarkdownFiles();

    const activeFile = app.workspace.getActiveFile();
    let metadata = cache.getFileCache(activeFile);
    let workoutId = metadata.frontmatter['id'];

    // Filter to get all exercise files
    const exercises = filterFiles((fm, tags) => tags.includes('#exercise'), allFiles);

    // Display exercises to select
    let notesDisplay = await params.quickAddApi.suggester(
        (file) => file.basename,
        exercises
    );

    if(notesDisplay == null) {
        params.variables = { notePath: "" };
        return;
    }

    // Create a new exercise note from the selected template
    let templateFile = app.vault.getAbstractFileByPath(notesDisplay.path);
    let targetFolder = app.vault.getAbstractFileByPath('Exercises/');
    let fileName = workoutId + " - " + notesDisplay.basename + ".md";
    let newNote = await templater.create_new_note_from_template(templateFile, targetFolder, fileName, false);

    // Add workout_id to frontmatter of new file
    let content = await app.vault.read(newNote);
    const regex = /---\n+/m;
    const subst = '---\nworkout_id: ' + workoutId + '\n';
    content = content.replace(regex, subst);
    await app.vault.modify(newNote, content);

    // Pass selected note's path to notes variable
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

function generateGuid() {
    let result = '';
    for(let j = 0; j < 32; j++) {
        if(j === 8 || j === 12 || j === 16 || j === 20)
            result += '-';
        result += Math.floor(Math.random()*16).toString(16).toUpperCase();
    }
    return result;
}
