import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        title: "Notes app",
        noteDetailHeading: "Note detail",
        notesListHeading: "Your notes",
        addNote: "Add note",
        newNoteHeading: "Create note",
        createNoteButton: "Create note",
        updateNoteButton: "Update note",
        deleteNoteButton: "Delete note",
      },
    },
    cs: {
      translation: {
        title: "Aplikace na poznámky",
        noteDetailHeading: "Detail poznámky",
        notesListHeading: "Vaše poznámky",
        addNote: "Přidat poznámku",
        newNoteHeading: "Vytvořit poznámku",
        createNoteButton: "Vytvořit poznámku",
        updateNoteButton: "Uložit poznámku",
        deleteNoteButton: "Smazat poznámku",
      },
    },
  },
});

export const I18N = i18next;
