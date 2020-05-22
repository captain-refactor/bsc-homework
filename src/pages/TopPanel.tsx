import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";

export function TopPanel() {
  const { i18n, t } = useTranslation();
  const cls = useStyle();
  return (
    <AppBar className={cls.appBar} position="relative" color="secondary">
      <Container>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={cls.title} variant="h1">
              {t("title")}
            </Typography>
          </Grid>
          <Grid item>
            <Select
              value={i18n.language}
              onChange={(event) =>
                i18n.changeLanguage(event.target.value as any)
              }
            >
              <MenuItem value="cs">Čeština</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
const useStyle = makeStyles((theme) => ({
  title: {
    fontSize: theme.spacing(5),
  },
  appBar: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(2, 1),
  },
}));
