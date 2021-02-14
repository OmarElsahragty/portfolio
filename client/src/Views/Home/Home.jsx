import React from "react";
import { Grid } from "@material-ui/core";
import { ImagesSrc } from "../../utilities/Helpers";
import { Image } from "../../Components/Atoms";
import { Navbar, Footer } from "../../Components/Organisms";
import { Projects, Services, About, Contact } from "../../Components/Templates";

import styles from "./Home.module.css";

const HomePage = () => (
  <Grid item className={styles.home}>
    <Navbar />

    <Image src={ImagesSrc.wallpaper} className={styles.wallpaper} />

    <Projects />

    <Services />

    <About />

    <Contact />

    <Footer />
  </Grid>
);

export default HomePage;
