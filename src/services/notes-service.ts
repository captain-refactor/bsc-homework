import { computed, observable, runInAction } from "mobx";
import {
  ApiNewNote,
  ApiNote,
  ApiUpdateNote,
  NotesClient,
} from "./notes-client";

export class NotesService {
  constructor(private notesClient: NotesClient) {}

  @computed
  get notes(): ApiNote[] {
    return Object.keys(this.notesMap).map(
      (noteId) => this.notesMap[noteId as any]
    );
  }

  @observable
  notesMap: Record<number, ApiNote> = {};

  note(noteId: number) {
    return this.notesMap[noteId];
  }

  async loadNotes() {
    const notes = await this.notesClient.fetchNotes();
    runInAction(() => {
      this.notesMap = notes.reduce((map: Record<number, ApiNote>, note) => {
        map[note.id] = note;
        return map;
      }, {});
    });
  }

  async createNote(note: ApiNewNote) {
    const newNote = await this.notesClient.createNote(note);
    runInAction(() => {
      // unshift to show it at start of the list
      this.notesMap[newNote.id] = newNote;
    });
  }

  async updateNote(note: ApiUpdateNote) {
    const updatedNote = await this.notesClient.updateNote(note);
    runInAction(() => {
      this.notesMap[updatedNote.id] = updatedNote;
    });
  }

  async reloadNote(noteId: number) {
    const note = await this.notesClient.fetchNote(noteId);
    runInAction(() => {
      this.notesMap[note.id] = note;
    });
  }

  async deleteNote(noteId: number) {
    await this.notesClient.removeNote(noteId);
    runInAction(() => {
      delete this.notesMap[noteId];
    });
  }
}
