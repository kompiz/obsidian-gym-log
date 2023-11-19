module.exports = async function listFiles(params) {
    console.log("Script: Create new workout.")

    const templater = app.plugins.plugins["templater-obsidian"].templater;
    const files = this.app.vault.getMarkdownFiles();
    let workoutTemplates = [];

    // Filter to get workout templates
    for(const file of files) {
        const file_cache = app.metadataCache.getFileCache(file);
        const tags = params.obsidian.getAllTags(file_cache);

        if (tags.includes("#workout")) {
            workoutTemplates.push(file);
        }
    }

    // Display workout templates to select
    const notesDisplay = await params.quickAddApi.suggester(
        (file) => file.basename,
        workoutTemplates
    );

    if(!notesDisplay) {
        params.variables = { notePath: "" };
        return;
    }

    // Create new workout note from selected template
    console.log("Creating note from template: " + notesDisplay.path);
    let templateFile = app.vault.getAbstractFileByPath(notesDisplay.path);
    let now = moment(new Date());
    let targetPath = 'Workout Logs/' + now.format("YYYY-MM-DD") + ' - ' + notesDisplay.basename.replace('.md', '');
    let targetFolder = app.vault.getAbstractFileByPath('Workout Logs/');
    
    // Ensure the Workout Logs folder exists
    if(! await app.vault.exists('Workout Logs/')) {
        await app.vault.createFolder('Workout Logs/');
    }

    let fileName = targetPath + ".md";
    let newNote = await templater.create_new_note_from_template(templateFile, targetFolder, fileName, false);

    // Add date to frontmatter of new file
    let content = await app.vault.read(newNote);
    const regex = /---\n+/m;
    const subst = '---\ndate: ' + now.format("YYYY-MM-DD") + '\n';
    content = content.replace(regex, subst);
    await app.vault.modify(newNote, content);

    // Pass selected note's path to notes variable
    params.variables = { notePath: newNote.path };
}

function generateGuid() {
    let result = '';
    for(let j = 0; j < 32; j++) {
        if( j == 8 || j == 12 || j == 16 || j == 20)
            result += '-';
        result += Math.floor(Math.random()*16).toString(16).toUpperCase();
    }
    return result;
}

