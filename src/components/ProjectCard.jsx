import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./ProjectCards.scss";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "2em",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  MuiCardContent: {
    height: "40px",
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const [expandedId, setExpandedId] = useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  const handleClose = (i) => {
    setExpandedId(-1);
  };

  let projects = [];

  const projectsEN = [
    {
      _id: "1",
      name: "FreshBsQt",
      date: "January, 2021",
      shortDesc:
        "LHL Bootcamp final team project. A grocery delivery app that helps users shop local according to their location",
      techStack_f: "ReactJS, CSS, Material-UI, Axios",
      techStack_b: "Node.JS, Express, Google Maps JS API, Stripe API, SQL",
      personnalWork:
        "Lot of front-end work with React and Material-UI, Google Map API/geolocation, Stripe implementation",
      image: "/images/freshbsqt.gif",
      github: "https://github.com/raphpaquet/FreshBsQt",
    },
    {
      _id: "2",
      name: "Jungle-Rails",
      date: "January, 2021",
      shortDesc:
        "A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails by example.",
      techStack_f: "Rails, SASS, HTML",
      techStack_b: "Ruby, PostGreSQL, Stripe API",
      personnalWork:
        "self-learning Ruby/Rails, learn how to navigate an existing code-base, bug-fix requests",
      image: "/images/jungle.png",
      github: "https://github.com/raphpaquet/jungle-rails",
    },
    {
      _id: "3",
      name: "Scheduler",
      date: "December, 2020",
      shortDesc:
        "The scheduler is a single page application, built using React, that allows users to book and cancel interviews.",
      techStack_f: "React, Axios, Webpack, Babel",
      techStack_b:
        "Node.JS, Express, PostgreSQL [testing: Storybook, @testing-library/react-hooks, Jest, Cypress]",
      personnalWork:
        "First project using React, creating components using Storybook, lot of testing",
      image: "/images/SchedulerREC.gif",
      github: "https://github.com/raphpaquet/scheduler",
    },
    {
      _id: "4",
      name: "Burgers-R-Us",
      date: "November, 2020",
      shortDesc:
        "LHL Bootcamp midterm team project. A food ordering experience for a single restaurant",
      techStack_f: "HTML, SASS, JS, EJS",
      techStack_b: "Node.JS, Express, SQL, JQuery, Twilio API",
      personnalWork: "Front-end focused",
      image: "/images/burger.png",
      github: "https://github.com/raphpaquet/burgers-r-us",
    },
    {
      _id: "5",
      name: "Tweeter",
      date: "November 2020",
      shortDesc:
        "Tweeter is a simple, single-page Twitter clone based on responsive design.",
      techStack_f: "HTML, CSS, JS, jQuery, AJAX",
      techStack_b: "Node.JS, Express and MongoDB ",
      personnalWork: "First project front-end focused",
      image: "/images/tweeter.png",
      github: "https://github.com/raphpaquet/tweeter",
    },
  ];

  const projectsFR = [
    {
      _id: "1",
      name: "FreshBsQt",
      date: "Janvier, 2021",
      shortDesc:
        "Projet final de LHL Bootcamp. Application permettant aux usagers de se créer un panier de produits locaux dépendamment de leur localisation.",
      techStack_f: "ReactJS, CSS, Material-UI, Axios",
      techStack_b: "Node.JS, Express, Google Maps JS API, Stripe API, SQL",
      personnalWork:
        "Beaucoup de travail front-end avec React et Material-UI, implémentation des API Google Map/geolocation et Stripe.",
      image: "/images/freshbsqt.gif",
      github: "https://github.com/raphpaquet/FreshBsQt",
    },
    {
      _id: "2",
      name: "Jungle-Rails",
      date: "Janvier, 2021",
      shortDesc:
        "Mini application de commerce électronique construite avec Rails 4.2 dans le but d'apprendre Rails par l'exemple.",
      techStack_f: "Rails, SASS, HTML",
      techStack_b: "Ruby, PostGreSQL, Stripe API",
      personnalWork:
        "auto-apprentissage Ruby/Rails, apprendre à naviguer dans une base de code existante, requêtes de correction de bogues.",
      image: "/images/jungle.png",
      github: "https://github.com/raphpaquet/jungle-rails",
    },
    {
      _id: "3",
      name: "Scheduler",
      date: "Décembre, 2020",
      shortDesc:
        "scheduler est une application monopage, construite à l'aide de ReactJS, qui permet aux utilisateurs de réserver, d'annuler et modifier des entretiens. ",
      techStack_f: "React, Axios, Webpack, Babel",
      techStack_b:
        "Node.JS, Express, PostgreSQL [testing: Storybook, @testing-library/react-hooks, Jest, Cypress]",
      personnalWork:
        "Premier projet avec React, création de composants avec StoryBook, beaucoup de tests.",
      image: "/images/scheduler.png",
      github: "https://github.com/raphpaquet/scheduler",
    },
    {
      _id: "4",
      name: "Burgers-R-Us",
      date: "Novembre, 2020",
      shortDesc:
        "Projet de mi-parcours du Bootcamp LHL. Expérience de commande en ligne pour un seul restaurant.",
      techStack_f: "HTML, SASS, JS, EJS",
      techStack_b: "Node.JS, Express, SQL, JQuery, Twilio API",
      personnalWork: "Mon implication était très axée sur le front-end.",
      image: "/images/burger.png",
      github: "https://github.com/raphpaquet/burgers-r-us",
    },
    {
      _id: "5",
      name: "Tweeter",
      date: "Novembre 2020",
      shortDesc: "Application monopage reproduisant le modèle de Twitter.",
      techStack_f: "HTML, CSS, JS, jQuery, AJAX",
      techStack_b: "Node.JS, Express and MongoDB ",
      personnalWork:
        "Premier projet axé sur le front-end, utilisation HTML, CSS, AJAX.",
      image: "/images/tweeter.png",
      github: "https://github.com/raphpaquet/tweeter",
    },
  ];

  props.language === "English"
    ? (projects = projectsEN)
    : (projects = projectsFR);

  return (
    <Fragment>
      {projects.map((project, i) => (
        <Card className="MuiCard-root" key={project._id}>
          <div className="card-header">
            <CardHeader title={project.name} subheader={project.date} />
          </div>
          <CardMedia
            className="media"
            image={project.image}
            title={project.name}
            onMouseOver={() => handleExpandClick(i)}
            onMouseLeave={() => handleClose(i)}
          />
          <CardContent>
            <Typography
              onMouseOver={() => handleExpandClick(i)}
              onMouseLeave={() => handleClose(i)}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {project.shortDesc}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="see on GitHub">
              <a href={project.github} rel="noreferrer" target="_blank">
                <GitHubIcon />
              </a>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expandedId,
              })}
              onClick={() => handleExpandClick(i)}
              // onMouseLeave={() => handleClose(i)}
              aria-expanded={expandedId === i}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
            <CardContent>
              <div className="card-content">
                <div className="card-stack">
                  <div className="typo-title" paragraph>
                    Tech Stack
                  </div>
                  <span className="typo-type" paragraph>
                    Front-End:{" "}
                  </span>
                  <br></br>
                  <span className="typo-text" paragraph>
                    {project.techStack_f}
                  </span>
                  <br></br>
                  <span className="typo-type" paragraph>
                    Back-End:{" "}
                  </span>
                  <br></br>
                  <span className="typo-text" paragraph>
                    {project.techStack_b}
                  </span>
                </div>
                <div className="card-work">
                  <div className="typo-title" paragraph>
                    Implication
                  </div>
                  <div className="typo-text" paragraph>
                    {project.personnalWork}
                  </div>
                </div>
              </div>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Fragment>
  );
}
