import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Joindeveloper from './Joindeveloper';
import Joinmarketing from './Joinmarketing';
import Joinoperations from './Joinoperations';
import Joinyounglearders from './Joinyoungleaders';
import Joinyoungambassadors from './Joinyoungambassadors';
import SwipeableViews from 'react-swipeable-views';
import {useTheme } from '@material-ui/core/styles';
import './Text.css';



 function TabPanel(props)
 
 {
  const {children,value,index}=props;
   return(
     <div>
      {
        value===index && (<h5>{children}</h5>
        )
 }
     </div>
   )
 }
 
  

export default function Jointabbar(){

  const theme = useTheme();
  
const handleChange = (event, newValue) => {
  console.warn(newValue)
  setValue(newValue);
};
const handleChangeIndex = (index) => {
    setValue(index);
  };

  
  const [newValue,setValue]=React.useState(0)
    
    return(
        <>
        <div className="container" id="tabbar">
            
                
      {/* <AppBar position="static" >
       */}
      <Tabs value={newValue} onChange={handleChange} aria-label="simple tabs example"  indicatorColor="primary"
        textColor="primary"   variant="scrollable"
        scrollButtons="on" 
        >
          <Tab label="DEVELOPERS" />
          <Tab label="MARKETING" />
          <Tab label="OPERATIONS" />
          <Tab label="Youngleaders" />
          <Tab label="Youngambassadors" />
        </Tabs>
      
{/*        
      </AppBar> */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={newValue}
        onChangeIdex={handleChangeIndex}
      >
      <TabPanel value={newValue} index={0}> <Joindeveloper /></TabPanel>
      <TabPanel value={newValue} index={1}> <Joinmarketing/></TabPanel>
      <TabPanel value={newValue} index={2}> <Joinoperations /></TabPanel>
      <TabPanel value={newValue} index={3}> <Joinyounglearders /></TabPanel>
      <TabPanel value={newValue} index={4}> <Joinyoungambassadors /></TabPanel>
      </SwipeableViews>
    

               
        </div>
         
        </>
    );
}