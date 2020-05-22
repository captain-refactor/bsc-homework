import { useAppService } from "../services/AppServiceProvider";
import List from "@material-ui/core/List";
import React, { useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import { observer } from "mobx-react";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import Link from "@material-ui/core/Link";

export const NotesList = observer(function () {
  const app = useAppService();
  const cls = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    app.notesService.loadNotes();
  }, []);

  return (
    <>
      <Grid container item xs={12} justify="space-between">
        <Typography variant="h2" className={cls.title}>
          {t("notesListHeading")}
        </Typography>
        <IconButton
          color="primary"
          component={Link}
          onClick={() => history.push("/notes/new")}
          title={t("addNote")}
        >
          <Add />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <List>
            {app.notesService?.notes?.map((note) => (
              <ListItem
                key={note.id}
                button
                onClick={() => history.push(`/notes/${note.id}`)}
              >
                <ListItemText>{note.title}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>
    </>
  );
});

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));
