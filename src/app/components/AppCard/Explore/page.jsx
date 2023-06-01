import React from "react";
import { string } from "prop-types";
import { Card, CardContent } from "@mui/material";
import { LinkButton } from "@components";
import { NavLink } from "react-bootstrap";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: `3rem`,
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

const ExploreCard = ({ imageUrl, title, description }) => {
  const styles = useStyles();

  return (
    <Card elevation={0} className={styles.root}>
      <NavLink className="p-0 rounded img-hover">
        <img src={imageUrl} alt="" className="w-100 rounded -trans" />
      </NavLink>
      <CardContent className={styles.cardContent}>
        <h5 className="card-title mb-3 text-black p-0 ibm-font-22 text-bold">
          <NavLink className="p-0 text-black hover-text-black">{title}</NavLink>
        </h5>
        <p className="text-black ibm-font-18 text-bold">{description}</p>
        <LinkButton link="#" linkText={`more`} />
      </CardContent>
    </Card>
  );
};

ExploreCard.propTypes = {
  imageUrl: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
};

export default ExploreCard;
