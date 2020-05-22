import { ApiClient } from "./api-client";

export class NotesClient {
  constructor(private apiService: ApiClient) {}

  async fetchNotes(): Promise<ApiNote[]> {
    const response = await this.apiService.fetch("/notes", {});
    return await response.json();
  }

  async createNote(note: ApiNewNote): Promise<ApiNote> {
    const response = await this.apiService.fetch("/notes", {
      method: "POST",
      body: JSON.stringify(note),
    });
    return await response.json();
  }

  async fetchNote(noteId: number): Promise<ApiNote> {
    const response = await this.apiService.fetch(`/notes/${noteId}`, {});
    return await response.json();
  }

  async removeNote(noteId: number): Promise<void> {
    await this.apiService.fetch(`/notes/${noteId}`, {
      method: "DELETE",
    });
  }

  async updateNote(note: ApiUpdateNote): Promise<ApiNote> {
    const { id, ...body } = note;
    const response = await this.apiService.fetch(`/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    return await response.json();
  }
}

interface ApiId {
  id: number;
}

interface ApiNoteData {
  title: string;
}

export interface ApiNote extends ApiId, ApiNoteData {}

export interface ApiNewNote extends ApiNoteData {}

export interface ApiUpdateNote extends ApiNoteData, ApiId {}
