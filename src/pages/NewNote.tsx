import { observer } from "mobx-react";
import Card from "@material-ui/core/Card";
import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useAppService } from "../services/AppServiceProvider";
import { useTranslation } from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ApiNewNote } from "../services/notes-client";
import TextField from "@material-ui/core/TextField";
import { AppButton } from "../components/AppButton";
import { useHistory } from "react-router";

export const NewNote = observer(function () {
  const app = useAppService();
  const { t } = useTranslation();
  const history = useHistory();
  const cls = useStyles();
  const [note, setNote] = useState<ApiNewNote>({ title: "" });

  return (
    <Card>
      <CardContent>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography className={cls.title} variant="h2">
              {t("newNoteHeading")}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={cls.textField}
              variant="outlined"
              multiline
              value={note.title}
              onChange={(event) => setNote({ title: event.target.value })}
            />
          </Grid>
          <Grid container item xs={12} direction="row-reverse">
            <AppButton
              onClick={() => {
                app.notesService.createNote(note);
                history.push("/notes");
              }}
            >
              {t("createNoteButton")}
            </AppButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
});

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: theme.spacing(4),
  },
  textField: {
    margin: theme.spacing(3, 0),
    width: "100%",
  },
}));
