import React from "react";
import {Card,CardContent,Stack,Grid, Button, Typography,Box, List, ListItem,Divider,ListItemText,Avatar,ListItemAvatar,ThemeProvider, CardMedia} from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WifiIcon from '@mui/icons-material/Wifi';
import AddIcon from '@mui/icons-material/Add';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#263238",
    },
  },
});



export const Page=()=>{
    return(
        <div style={{marginLeft:5+'vh'}}>
       <ThemeProvider theme={theme}>
       <Box sx={{height:8+'vh',width:176+'vh'}}></Box>
      <Stack direction="row">
        {/* <Card sx={{height:65+'vh',width:115+'vh'}}> */}
       <Box>
         <Stack direction="row">
            <Card sx={{height:30+'vh',width:54+'vh',background: `url('https://th.bing.com/th/id/OIP.87BqfKaW1w4gN5z5ZgKTTQHaHa?pid=ImgDet&w=191&h=191&c=7&dpr=1.5')`,textAlign:"left",color:"white"}}><CardContent>
             <WifiIcon sx={{color:"white"}} fontSize="large" />
             <Typography variant="h5" sx={{marginTop:4+'vh'}}>4562 1122 4594 7852</Typography>
             <Stack direction="row" sx={{marginTop:3+'vh'}}>
             <Typography>Card Holder </Typography> <Typography sx={{marginLeft:5+'vh'}}>Expires</Typography>
             <img style={{marginLeft:15+'vh'}} src="https://th.bing.com/th/id/OIP.QrZbOM39RRdwzAEedIVjWgHaE8?w=299&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7" height="30" />
            </Stack>
             <Stack direction="row">
             <Typography>Jack Peterson</Typography> <Typography sx={{marginLeft:3+'vh'}}>11/22</Typography>
             <CardMedia height="5+'vh" width="5+'vh" src="https://th.bing.com/th/id/OIP.6LS-2-zY0OZ04naA9yVRPwHaHa?pid=ImgDet&rs=1" />
             </Stack>
           </CardContent></Card>
            <Card sx={{width:26+'vh',height:30+'vh',marginLeft:2+'vh'}}><CardContent>
            <Button variant="contained" sx={{height:8+'vh',bgcolor:"#2196f3"}} >
            <AccountBalanceIcon/>
            </Button>   
            <Typography marginTop={2}>Salary</Typography>  
            <Typography  variant="subtitle2">Belong Interactive</Typography>  
            <Divider sx={{marginTop:2+'vh'}}/> 
            <Typography variant="h5" marginTop={2}>+$2000</Typography>
            </CardContent></Card>

            <Card sx={{width:26+'vh',marginLeft:2+'vh',height:30+'vh'}}><CardContent>
            <Button variant="contained" sx={{height:8+'vh',bgcolor:"#2196f3"}}>
            <FormatTextdirectionRToLIcon/>
            </Button>   
            <Typography marginTop={2}>paypal</Typography>  
            <Typography  variant="subtitle2">Freelance payment</Typography>  
            <Divider sx={{marginTop:2+'vh'}}/>
            <Typography variant="h5" marginTop={2}>$455.00</Typography>
            </CardContent></Card>
        </Stack>

        <Card sx={{height:28+'vh',marginTop:3+'vh'}}><CardContent>
        <Stack direction="row">
        <Typography >Payment Method</Typography>
        <Button variant="contained" sx={{marginLeft:65+'vh'}} startIcon={<AddIcon/>}> ADD NEW CARD</Button>  
        </Stack>  
        <Stack direction="row" sx={{marginTop:4+'vh'}}>
            <Card sx={{height:12+'vh',width:53+'vh'}}><CardContent>
            <Stack direction="row">
            <img src="https://th.bing.com/th/id/OIP.uy4UMgnbxCbfkXRAomCdVwHaFw?w=260&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Mastercard" height="35" width="30" />
        <Typography variant="h6" sx={{marginLeft:2+'vh'}}>**** **** **** 7852</Typography>
        < EditIcon sx={{marginLeft:15+'vh'}}/>  
        </Stack>
            </CardContent></Card>
            <Card sx={{marginLeft:2+'vh',height:12+'vh',width:53+'vh'}}><CardContent>
            <Stack direction="row">
            <img src="https://th.bing.com/th/id/OIP.5erBUY9ZX1nqYpDuw27QJgHaCa?w=347&h=114&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Mastercard" height="30" />
        <Typography variant="h6">**** **** **** 7852</Typography>
        < EditIcon sx={{marginLeft:12+'vh'}}/>  
        </Stack>
              </CardContent></Card>
        </Stack>
        </CardContent></Card>
       </Box>
        {/* </CardContent>
        </Card> */}
        <Card sx={{height:65+'vh',width:60+'vh',marginLeft:4+'vh'}}>
            <CardContent>
            <List><ListItem>
                  <Typography  variant="subtitle1" >Invoices</Typography>
                  <Button variant="outlined"sx={{marginLeft:25+'vh',color:"#2196f3"}}>view all</Button>
                </ListItem>
                <ListItem>
                <Stack direction="row">
                <Box>
                  <Typography variant="h6">March,01,2020</Typography>
                  <Typography variant="substitle2">#MS-415646</Typography>
                </Box>
                  <Typography variant="substitle2" sx={{marginLeft:18+'vh',marginTop:2+'vh'}}>$180</Typography>
                  <Button variant="text" startIcon={<PictureAsPdfIcon/>} sx={{marginLeft:2+'vh'}}>PDF</Button>
                    </Stack> 
                </ListItem>

                <ListItem>
              <Stack direction="row">
                <Box>
                  <Typography variant="h6">Februvary,10,2021</Typography>
                  <Typography variant="substitle2">#RV-126749</Typography>
                </Box>
                  <Typography variant="substitle2" sx={{marginLeft:12+'vh',marginTop:2+'vh'}}>$180</Typography>
                   <Button variant="text" startIcon={<PictureAsPdfIcon/>} sx={{marginLeft:2+'vh'}}>PDF</Button>
                </Stack> 
                </ListItem>

                <ListItem>
                <Stack direction="row">
                  <Box>
                  <Typography variant="h6">April,05,2020</Typography>
                  <Typography variant="substitle2">#QW-103578</Typography>
                 </Box>
                 <Typography variant="substitle2" sx={{marginLeft:19+'vh',marginTop:2+'vh'}}>$180</Typography>
                 <Button variant="text" startIcon={<PictureAsPdfIcon/>} sx={{marginLeft:2+'vh'}}>PDF</Button>
                 </Stack> 
                </ListItem>

                <ListItem>
                <Stack direction="row">
                  <Box>
                  <Typography variant="h6">June,25,2019</Typography>
                  <Typography variant="substitle2">#MS-415646</Typography>
                 </Box>
                 <Typography variant="substitle2" sx={{marginLeft:18+'vh',marginTop:2+'vh'}}>$180</Typography>
                 <Button variant="text" startIcon={<PictureAsPdfIcon/>} sx={{marginLeft:2+'vh'}}>PDF</Button>
                </Stack> 
                </ListItem>

                <ListItem>
               <Stack direction="row">
                  <Box>
                  <Typography variant="h6">March,01,2019</Typography>
                  <Typography variant="substitle2">#AR-803481</Typography>
                 </Box>
                 <Typography variant="substitle2" sx={{marginLeft:16+'vh',marginTop:2+'vh'}}>$180</Typography>
                 <Button variant="text" startIcon={<PictureAsPdfIcon/>} sx={{marginLeft:2+'vh'}}>PDF</Button>
                    </Stack> 
                </ListItem></List>
            </CardContent>
            </Card>
      </Stack>

      <Stack direction="row" sx={{marginTop:3+'vh',textAlign:"left"}}>
        <Card sx={{height:70+'vh',width:100+'vh'}}>
            <CardContent>
            <Typography variant="h6">Billing information</Typography>
            <Card sx={{height:20+'vh',marginTop:4+'vh',bgcolor:"#f5f5f5"}}><CardContent>
             <Stack direction="row">
              <Typography variant="h6">Oliver Liam</Typography>  
              <Button variant="text" color="warning" startIcon={<DeleteIcon/>} sx={{marginLeft:45+'vh'}}>Delete</Button>
              <Button variant="text" color="warning"  startIcon={<EditIcon/>} sx={{marginLeft:5+'vh'}}>edit</Button>
             </Stack>  
             <Typography variant="subtitle2">Company name:Viking Burrito</Typography>  
             <Typography variant="subtitle2">Email Address:Oliver@burrito.com</Typography> 
             <Typography variant="subtitle2">Vat Number:FRB1235476</Typography> 
            </CardContent></Card>
            <Card sx={{height:20+'vh',marginTop:4+'vh',bgcolor:"#f5f5f5"}}><CardContent>
            <Stack direction="row">
              <Typography variant="h6">Lucas Harper</Typography>  
              <Button variant="text" color="warning" startIcon={<DeleteIcon/>} sx={{marginLeft:42+'vh'}}>Delete</Button>
              <Button variant="text" color="warning"  startIcon={<EditIcon/>} sx={{marginLeft:5+'vh'}}>edit</Button>
             </Stack> 
            <Typography variant="subtitle2">Company name:Stone Tech zone</Typography>  
             <Typography variant="subtitle2">Email Address:Lucas@stone-tech.com</Typography> 
             <Typography variant="subtitle2">Vat Number:FRB1235476</Typography>     
            </CardContent></Card>
            </CardContent>
        </Card> 
      
        <Card sx={{height:70+'vh',width:75+'vh',marginLeft:4+'vh'}}>
            <CardContent>
              <Stack direction="row">
              <Typography variant="h6">Your Transaction's</Typography> 
              <Button color="inherit" startIcon={<DateRangeIcon />} sx={{marginLeft:20+'vh'}}>23-30 March 2020</Button> 
              </Stack>
              <List>Newest
              <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:"white",color:"orange"}} >
         < ExpandMoreIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Netflix" secondary="27 March 2020,at 12:30 pm" />
        <Typography sx={{color:"orange"}}>- $ 2,500</Typography>
      </ListItem>
      <ListItem >
      <Avatar sx={{bgcolor:"white",color:"greenyellow"}} >
           <ExpandLessIcon/>
          </Avatar>
        <ListItemText primary="Apple" secondary="27 March 2020,at 4:30 pm" />
        <Typography sx={{color:"green"}}>+ $ 2,000</Typography>
      </ListItem>
      YESTERDAY
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:"white",color:"greenyellow"}} >
           <ExpandLessIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Stripe" secondary="26 March 2020,at 13:45 pm" />
        <Typography sx={{color:"green"}}>+ $ 750</Typography>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:"white",color:"greenyellow"}} >
            <ExpandLessIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Hubspot" secondary="26 March 2020,at 12:30 pm" />
        <Typography sx={{color:"green"}} >+ $ 1000</Typography>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:"white",color:"greenyellow"}}>
          <ExpandLessIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Creative Tim" secondary="26 March 2020,at 8:30 am" />
        <Typography sx={{color:"green"}}>+ $ 750</Typography>
      </ListItem>
              </List>
            </CardContent>
        </Card>
       
      </Stack>
      </ThemeProvider>
        </div>
    )
}