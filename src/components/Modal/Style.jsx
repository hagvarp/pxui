import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  paperModal: {
    position: "absolute",
    width: "60%",
    height: "70%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll",
    itemAlign: "center"
  }
}));

export const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
};
