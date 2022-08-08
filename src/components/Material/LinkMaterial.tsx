import { FC } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

let style = {
  padding: "20px 40px",
};

export const LinkMaterial: FC = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        startIcon={ <AutoAwesomeIcon />}
        endIcon={<AutoAwesomeIcon />}
        style={style}>
        <Link to="/ui">Awesome Material UI</Link>
      </Button>
    </div>
  );
};
