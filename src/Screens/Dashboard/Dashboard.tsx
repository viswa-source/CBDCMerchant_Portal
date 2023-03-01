import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Chart from "./Chart";
import Graph from "./Graph";
import { Colors } from "../../Utils/Colors";
import Avatar from "@mui/material/Avatar";
import STRINGS from "../../Strings/STRINGS";
import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks/hooks";
import DashBoardCard from "../../Components/Card/DashboardCard";
import { getTransactionList } from "../../Redux/DashboardSlice/Dashboardslice";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const ProfileData = useAppSelector(
    (state) => state.dashBoardState.WalletInfo
  );
  console.log(ProfileData);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  React.useEffect(() => {
   dispatch(
      getTransactionList({
        customerid: ProfileData?.mobilenumber,
        fromdate: "2023-01-21",
        todate: "2023-02-16",
        username: "olive1",
      })
    );
  }, []);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{
          backgroundColor: "white",
          boxShadow: "2px 2px rgb(243, 243, 243)",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              color: Colors.PRIMARY,
              bgcolor: Colors.BTN_SELECTED,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color={"black"}>
            CBDC Merchant Dashboard
          </Typography>

          <Avatar
            sx={{
              bgcolor: Colors.PRIMARY,
              marginLeft: "auto",
              textTransform: "capitalize",
              marginRight: "0.5%",
            }}
          >
            {ProfileData?.merchantName.slice(0, 1)}
          </Avatar>
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            color={"black"}
            textTransform="capitalize"
          >
            {ProfileData?.merchantName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ justifyContent: "space-between" }}>
          <Typography ml={3}>Viswa</Typography>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            "& .MuiListItemButton-root:hover": {
              bgcolor: Colors.BTN_SELECTED,
            },
          }}
        >
          {STRINGS.Dashboard.DRAWER_MENU.map(({ text }, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                className="list_item_btn"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: Colors.PRIMARY,
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: Colors.DASHBOARD }}>
        <DrawerHeader />
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        bgcolor={Colors.DASHBOARD}
        height="100vh"
        pt="10vh"
      >
        <Grid
          item
          xs={12}
          // columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {[1, 2, 3].map((el) => (
            <DashBoardCard />
          ))}
        </Grid>
        <Grid item xs={8}>
          <Graph />
        </Grid>
        <Grid item xs={4}>
          <Chart />
        </Grid>
      </Grid>
    </Box>
  );
}
