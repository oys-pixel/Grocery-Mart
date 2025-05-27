import { Button, Checkbox } from "@mui/material";

function MaterialButtons({ variant, className, onClick, nameOf }) {
  return (
    <Button variant={variant} onClick={onClick} className={className}>
      {nameOf}
    </Button>
  );
}
export default MaterialButtons;

