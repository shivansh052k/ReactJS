import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Developers from './Developers';
import Marketing from './Marketing';
import Operations from './Operations';
import Youngambassador from './Youngambassadors';
import Youngleaders from './Younglearders';
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
 
  

export default function Tabbar(){

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
          <Tab label="Young leaders" />
          <Tab label="Young ambassadors" />
        </Tabs>
      
{/*        
      </AppBar> */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={newValue}
        onChangeIdex={handleChangeIndex}
      >
      <TabPanel value={newValue} index={0}> <Developers /></TabPanel>
      <TabPanel value={newValue} index={1}> <Marketing/></TabPanel>
      <TabPanel value={newValue} index={2}> <Operations /></TabPanel>
      <TabPanel value={newValue} index={3}> <Youngleaders /></TabPanel>
      <TabPanel value={newValue} index={4}> <Youngambassador /></TabPanel>
      </SwipeableViews>
    

               
        </div>
         
        </>
    );
}