import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <div>
        <h1>Is Loading</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Infected Card */}
      <Grid container spacing={3} justify="center">
        {/* className={cx(styles.card, styles.infected)} */}
        <Grid item component={Card} className={styles.card}>
          <CardContent className={styles.infected}>
            <Typography color="textSecondary" gutterBottom>
              Infected
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography variant="body2">
              `Number of active cases of COVID 19` ${confirmed.value}
            </Typography>
          </CardContent>
        </Grid>

        {/* Recovered Card */}
        <Grid item component={Card} className={styles.card}>
          <CardContent className={styles.recovered}>
            <Typography color="textSecondary" gutterBottom>
              Recovered
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography variant="h5">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>

        {/* Deaths Card */}
        <Grid item component={Card} className={styles.card}>
          <CardContent className={styles.deaths}>
            <Typography color="textSecondary" gutterBottom>
              Deaths
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography variant="h5">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
