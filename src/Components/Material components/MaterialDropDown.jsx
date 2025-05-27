import * as React from "react";
import {
  Button,
  ButtonGroup,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MaterialSplitDropdown({
  options = [],
  defaultIndex = 0,
  onOptionClick = () => {},
  disabledIndex = null,
  variant = "contained",
  className = "",
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);
  const handleMainClick = () => {
    onOptionClick(options[selectedIndex], selectedIndex);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    onOptionClick(options[index], index);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };
  return (
    <>
      <ButtonGroup variant={variant} className={className} ref={anchorRef}>
        <Button onClick={handleMainClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          onClick={handleToggle}
          aria-haspopup="menu"
          aria-expanded={open ? "true" : undefined}
          aria-controls={open ? "split-button-menu" : undefined}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        sx={{ zIndex: 1300 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      disabled={index === disabledIndex}
                      onClick={(e) => handleMenuItemClick(e, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
export default MaterialSplitDropdown;
