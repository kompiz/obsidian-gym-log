module.exports = async function showFilesWithTag(params) {
    const {app, quickAddApi: {suggester}} = params;
    const allTags = Object.keys(app.metadataCache.getTags());
    const tag = await suggester(allTags, allTags);
    if (!tag) return;

    const cache = app.metadataCache.getCachedFiles();
    let filesWithTag = [];
    
    cache.forEach(key => {
        const fileCache = app.metadataCache.getCache(key);
        let hasTag = fileCache?.tags?.some(t => t.tag === tag);

        if (hasTag) filesWithTag.push(key);
    });

    // Display the list of files with the selected tag
    console.log("Files with tag " + tag + ":");
    filesWithTag.forEach(file => console.log(file));
}
