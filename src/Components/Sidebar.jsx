import React from "react";
import { Card,CardContent,Button, Toolbar } from "@mui/material";
import List from '@mui/material/List';
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';
import TableViewIcon from '@mui/icons-material/TableView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import ListItem from '@mui/material/ListItem';
import PersonIcon from '@mui/icons-material/Person';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LoginIcon from '@mui/icons-material/Login';
import {common} from "./Common.css";

const Sidebar = () => {
  return (
  
    <Card sx={{height:150+'vh',width:35+'vh',bgcolor:"#263238",color:"white"}}>
             <CardContent>
             <UnfoldMoreDoubleIcon/>   Material Dashboard2
             <br/><hr />
         <List >
       <ListItem button>
        <ListItemIcon>
        <DashboardIcon className="icon"/>
        </ListItemIcon>
        <ListItemText primary="  Dashboard"  />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
     < TableViewIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem sx={{textAlign:"left"}}>
          <Button variant="contained" startIcon={< ReceiptLongIcon  />} sx={{width:30+'vh'}} size="large"> Billing</Button>
          </ListItem>
        </List>
      <ListItem button>
          <ListItemIcon>
            <FormatTextdirectionRToLIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="RTL" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
      </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LoginIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Sign in" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            < AssignmentIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Sign Up" />
        </ListItem>
        <Button variant="contained"  sx={{bgcolor:"#29b6f6",marginTop:75+'vh',width:30+'vh'}}>Upgrade to pro</Button>
    </CardContent>
            </Card>
  );
};

export default Sidebar;
