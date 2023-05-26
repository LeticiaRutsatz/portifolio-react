import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../../config/style.css";
import { CardHabilidades } from "../Card/habilidades";

function Habilidades() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        height: { xs: "100%", sm: "100%" },
        backgroundColor: "#290743",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        color={theme.letter.primary.main}
        id="Habilidades"
        className="title"
      >
        Habilidades
      </Typography>

      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={5} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/html.png"
            texto={"HTML"}
          />
        </Grid>

        <Grid item xs={5} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/css.png"
            texto={"CSS"}
          />
        </Grid>

        <Grid item xs={5} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/javascript.png"
            texto={"JavasCript"}
          />
        </Grid>

        <Grid item xs={5} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/typescript.png"
            texto={"Typescript"}
          />
        </Grid>

        <Grid item xs={5} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/bootstrap.png"
            texto={"Bootstrap"}
          />
        </Grid>

        <Grid item xs={5} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/react.png"
            texto={"React"}
          />
        </Grid>

        <Grid item xs={5} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/material.png"
            texto={"MUI"}
          />
        </Grid>

        <Grid item xs={5} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/node.png"
            texto={"Node"}
          />
        </Grid>

        <Grid item xs={6} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/postgresql.png"
            texto={"PostgreSQL"}
          />
        </Grid>

        <Grid item xs={6} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/jest.png"
            texto={"Jest"}
          />
        </Grid>

        <Grid item xs={6} md={3} className="gridCards">
          <CardHabilidades
            image="./Assets/images/tecnologias/typeorm.png"
            texto={"TypeOrm"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export { Habilidades };
