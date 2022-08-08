import { FC, useState } from "react";
import { LinkMaterial } from "./Material/LinkMaterial";
import { Status } from "./Verification/Status";

import { ThemeProvider, createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#65ba77",
    },
  },
});
export enum Statuses {
  success = "success",
  error = "error",
  noVerified = "noVerified",
}

export const Start: FC = () => {
  const [status, setStatus] = useState<Statuses>(Statuses.noVerified);
  return (
    <div>
      <Status status={status} setStatus={setStatus} />
      <ThemeProvider theme={theme}>
        <LinkMaterial />
      </ThemeProvider>
    </div>
  );
};
