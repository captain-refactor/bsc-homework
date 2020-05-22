import Container from "@material-ui/core/Container";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { NotesList } from "./NotesList";
import { NoteDetail } from "./NoteDetail";
import { TopPanel } from "./TopPanel";
import { Suspense } from "react";
import { NewNote } from "./NewNote";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    marginTop: theme.spacing(2),
  },
}));

export function MainPage() {
  const cls = useStyles();
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <TopPanel />
        <Container>
          <Grid className={cls.content} container spacing={5}>
            <Grid item md={4}>
              <NotesList />
            </Grid>
            <Grid item md={8}>
              <Switch>
                <Redirect from="/" to="/notes" exact />
                <Route path="/notes" exact/>
                <Route path="/notes/new" exact>
                  <NewNote />
                </Route>
                <Route path="/notes/:id">
                  {({ match }) => <NoteDetail noteId={match?.params?.id} />}
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Suspense>
    </BrowserRouter>
  );
}
