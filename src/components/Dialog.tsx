import DialogMui from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";

interface DialogPropsExit {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DialogExit = ({ open, setOpen }: DialogPropsExit) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DialogMui open={open} onClose={handleClose}>
        <DialogTitle>Tem certeza?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja mesmo encerrar sua sessão?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button small autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            small
            scheme="secondary"
            onClick={() => {
              handleClose();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Sair
          </Button>
        </DialogActions>
      </DialogMui>
    </>
  );
};

export const Dialog = {
  Exit: DialogExit,
};
