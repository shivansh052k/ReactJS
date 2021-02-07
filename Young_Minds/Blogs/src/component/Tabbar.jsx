import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Science from './Science';
import Technology from './Technology';
import Engineering from './Engineering';
import Arts from './Arts';
import Mathematics from './Mathematics';
import Entrepreneurship from './Entrepreneurship';
import Featured from './Featured';
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
          <Tab label="FEATURED" />
          <Tab label="SCIENCE" />
          <Tab label="TECHNOLOGY" />
          <Tab label="ENGINEERING" />
          <Tab label="ARTS" />
          <Tab label="MATHEMATICS" />
          <Tab label="ENTREPRENEURSHIP" />
        </Tabs>
      
{/*        
      </AppBar> */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={newValue}
        onChangeIdex={handleChangeIndex}
      >
      <TabPanel value={newValue} index={0}> <Featured /></TabPanel>
      <TabPanel value={newValue} index={1}> <Science /></TabPanel>
      <TabPanel value={newValue} index={2}> <Technology /></TabPanel>
      <TabPanel value={newValue} index={3}> <Engineering /></TabPanel>
      <TabPanel value={newValue} index={4}> <Arts /></TabPanel>
      <TabPanel value={newValue} index={5}> <Mathematics /></TabPanel>
      <TabPanel value={newValue} index={6}> <Entrepreneurship /></TabPanel>
      </SwipeableViews>
    

               
        </div>
         
        </>
    );
}