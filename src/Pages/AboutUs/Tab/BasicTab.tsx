import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Cards from "../../../Components/Cards/Cards";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTab = () => {
  const [value, setValue] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const [head, setHead] = React.useState('');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleClick = (e?:any) => {
    if(!isOpen){
      setHead(e);
    }
    
    setIsOpen((prevState) => !prevState);
    
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Info" {...a11yProps(0)} />
            <Tab label="Faq" {...a11yProps(1)} />
            <Tab label="Complaints & Feedback" {...a11yProps(2)} />
            <Tab label="Privacy policy" {...a11yProps(3)} />
            <Tab label="Terms & Conditions" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "",
            }}
          >
            <div>
              <Cards name="Contact" onClick={()=>handleClick('Contact')} />
            </div>
            <div>
              <Cards name="Address" onClick={()=>handleClick('Address')}/>
            </div>
            <div>
              <Cards name="Hours of Operation" onClick={()=>handleClick('Hours of Operation')}/>
            </div>
            <div>
              <Cards name="Social Media & Links" />
            </div>
            <div>
              <Cards name="Statement" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Faq
        </TabPanel>
        <TabPanel value={value} index={2}>
          Complaints & Feedback
        </TabPanel>
        <TabPanel value={value} index={3}>
          Privacy policy"
        </TabPanel>
        <TabPanel value={value} index={4}>
          Terms & Conditions
        </TabPanel>
      </Box>
      <Drawer
        open={isOpen}
        onClose={handleClick}
        direction="right"
        className="bla bla bla"
        style={{width: "500px"}}
      >
        <div style={{ width: "500px" }}>{head}</div>
      </Drawer>
    </>
  );
};

export default BasicTab;
