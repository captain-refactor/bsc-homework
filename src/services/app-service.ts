import { NotesService } from "./notes-service";
import { ApiClient } from "./api-client";
import { NotesClient } from "./notes-client";

export class AppService {
  constructor(public notesService: NotesService) {}
}

export function createAppService() {
  let apiService = new ApiClient();
  return new AppService(new NotesService(new NotesClient(apiService)));
}
