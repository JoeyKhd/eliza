import {
    getActiveNoteAction,
    summarizeActiveNoteAction,
} from "./actions/activeNote";
import { createKnowledgeAction } from "./actions/createKnowledge";
import { readFileAction } from "./actions/file";
import { listNotesAction } from "./actions/listNotes";
import { getNoteAction } from "./actions/note";
import { noteTraversalAction } from "./actions/noteTraversal";
import { openFileAction } from "./actions/openFile";
import { saveFileAction } from "./actions/saveFile";
import { searchAction } from "./actions/search";
import { updateFileAction } from "./actions/updateFile";
import { listAllFilesAction } from "./actions/vault";
import { listDirectoryAction } from "./actions/vaultDirectory";

export const obsidianPlugin = {
    name: "obsidian",
    description:
        "Integration with Obsidian vault using Omnisearch / Deep traversal search and memoryknowledge base",
    actions: [
        searchAction,
        listNotesAction,
        listAllFilesAction,
        listDirectoryAction,
        summarizeActiveNoteAction,
        getActiveNoteAction,
        getNoteAction,
        readFileAction,
        createKnowledgeAction,
        noteTraversalAction,
        saveFileAction,
        openFileAction,
        updateFileAction,
    ],
    evaluators: [],
    services: [],
    providers: [],
};

export default obsidianPlugin;
