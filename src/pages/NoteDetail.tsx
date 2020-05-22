import { useAppService } from "../services/AppServiceProvider";
import Card from "@material-ui/core/Card";
import { observer } from "mobx-react";
import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { AppButton } from "../components/AppButton";
import { runInAction } from "mobx";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";

export const NoteDetail = observer(function (props: { noteId: number }) {
  const app = useAppService();
  const { t } = useTranslation();
  const history = useHistory();
  const cls = useStyles();
  app.notesService.reloadNote(props.noteId);
  const note = app.notesService.note(props.noteId);

  let changeTitle = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    runInAction(() => {
      note.title = event.target.value;
    });
  };
  return (
    <Card className={cls.root}>
      <CardContent>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography className={cls.title} variant="h2">
              {t("noteDetailHeading")}: {note?.title}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={cls.textField}
              variant="outlined"
              multiline
              value={note?.title}
              onChange={changeTitle}
            />
          </Grid>
          <Grid container item xs={12} justify="flex-end">
            <Button
                onClick={() => {
                  app.notesService.deleteNote(note.id);
                  history.push("/notes")
                }}
            >
              {t("deleteNoteButton")}
            </Button>
            <AppButton onClick={() => app.notesService.updateNote(note)}>
              {t("updateNoteButton")}
            </AppButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
});

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: theme.spacing(4),
  },
  textField: {
    margin: theme.spacing(3, 0),
    width: "100%",
  },
}));
