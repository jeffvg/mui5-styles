import React, { useEffect } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";

const notifications = [
  {
    id: 1,
    label: "Notification 1",
  },
  {
    id: 2,
    label: "Notification 2",
  },
  {
    id: 3,
    label: "Notification 3",
  },
  {
    id: 4,
    label: "Notification 4",
  },
];

const NotificationBell = ({ iconColor }) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const divRef = React.useRef();
  function handleClick() {
    setAnchorEl(divRef.current);
    setOpen(true);
  }

  function handleClose() {
    setAnchorEl(null);
    setOpen(false);
  }

  useEffect(() => {
    setAnchorEl(divRef.current);
  }, [divRef]);

  const newNotifications = `You have ${notifications.length} new notifications!`;
  const noNotifications = "No new notifications";

  return (
    <div>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}
      >
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleClick : null}
          ref={divRef}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        menuItems={notifications}
      />
    </div>
  );
};

export default NotificationBell
