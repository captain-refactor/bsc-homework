import { mount } from "enzyme";
import { ThemeProvider } from "../ThemeProvider";
import React from "react";
import { AppServiceProvider } from "../services/AppServiceProvider";
import { NewNote } from "./NewNote";
import { createAppService } from "../services/app-service";
import { ApiNewNote } from "../services/notes-client";
import { I18N } from "../i18n";
import { I18nextProvider } from "react-i18next";
import { act } from "react-dom/test-utils";
import { AppButton } from "../components/AppButton";
import TextField from "@material-ui/core/TextField";
import { MemoryRouter } from "react-router-dom";

describe("New note component", () => {
  it("should create new note", async () => {
    const appService = createAppService();

    let createdNote: ApiNewNote | undefined;

    appService.notesService.createNote = async (note) => {
      createdNote = note;
    };

    const wrapper = mount(
      <ThemeProvider>
        <I18nextProvider i18n={I18N}>
          <MemoryRouter>
            <AppServiceProvider appService={appService}>
              <NewNote />
            </AppServiceProvider>
          </MemoryRouter>
        </I18nextProvider>
      </ThemeProvider>
    );
    expect(wrapper.find(NewNote).html()).toMatchSnapshot();
    act(() => {
      wrapper
        .find(NewNote)
        .find(TextField)
        .find("textarea")
        .first()
        .simulate("change", { target: { value: "Test value" } });
    });
    act(() => {
      wrapper.find(NewNote).find(AppButton).simulate("click");
    });
    expect(createdNote?.title).toBe("Test value");
    wrapper.unmount();
  });
});
