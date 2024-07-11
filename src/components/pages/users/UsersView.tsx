import { Grid, Tooltip } from "@mui/material"; 
import Switch from '@mui/material/Switch';
import { useState } from "react";
import ReactDataTable from "../../atoms/tables/ReactDataTable"; 
import UserList from "../../../dataFiles/UserList.json"
import ReactColumnAsRowsDataTable from '../../atoms/tables/ReactColumnAsRowsDataTable';
import { Column, RowData } from '../../atoms/tables/types';

export default function ManageUsersView(props: any) {
  const [isResponsiveView, setIsResponsiveView] = useState(true);

  //This is to enable/disable responsive view
  const [enableResponsiveView, setEnableResponsiveView] = useState(false);

  const toggleEnableResponsiveView = () => {
    setEnableResponsiveView(!enableResponsiveView);
  };

  const toggleView = () => {
    setIsResponsiveView(!isResponsiveView);
  };

const columns:Column[] = [
  {
    name: "Email ",
    selector: (row: { emailAddress: string }) => row.emailAddress,
    cell: (row: { emailAddress: string }) => (
      <a href={`mailto:${row.emailAddress}`} style={{ color: "#1976D0" }} className="ellipsis">
        {row.emailAddress}
      </a>
    ),
  //adjustWidthOnSmallerDevice: true,
  //  showOnMobileDevice: false,
  //  showOnTabletDevice: false,
  },
  {
    name: "Name ",    
    selector: (row: { firstName: string; lastName: string }) => row.firstName + " " + row.lastName,
    //adjustWidthOnSmallerDevice: true,
    //showOnMobileDevice: false,
    //showOnTabletDevice: false,
  }, 
  
  
  
  {
    name: "Role",
    selector: (row: { userRoleName: string }) => row.userRoleName,
    //adjustWidthOnSmallerDevice: true,    
    showOnMobileDevice: false,
    showOnTabletDevice: false,
  },
  {
    name: "Status",
    selector: (row: { userStatusName: string }) => row.userStatusName,  
    showOnMobileDevice: false,
    showOnTabletDevice: false,
  },
  {
    name: "Address",
    selector: (row: { Address: string }) => row.Address,
    cell: (row: { Address: string }) => (
      <Tooltip title={row.Address} placement="top" arrow>
        <div className="ellipsis">{row.Address}</div>
      </Tooltip>
    ),
    width: "300px",  
    showOnMobileDevice: false,
    showOnTabletDevice: true,
    //adjustWidthOnSmallerDevice: true,
  },
  {
    name: "Contact",
    selector: (row: { Contact: string }) => row.Contact,
    cell: (row: { Contact: string }) => (
      <Tooltip title={row.Contact} placement="top" arrow>
        <div className="ellipsis">{row.Contact}</div>
      </Tooltip>
    ),   
    showOnMobileDevice: true,
    showOnTabletDevice: true,
  },
  {
    name: "Gender",
    selector: (row: { Gender: string }) => row.Gender,
    cell: (row: { Gender: string }) => (
      <Tooltip title={row.Gender} placement="top" arrow>
        <div className="ellipsis">{row.Gender}</div>
      </Tooltip>
    ),   
    showOnMobileDevice: false,
    showOnTabletDevice: false,
  },
];


return (
    <div className="dashboard" >
      <h1>Optimizing React Data Tables for All Devices</h1>

     <p>Enable Responsive View: <Switch   onClick={toggleEnableResponsiveView}/></p> 
      <p>Switch Layout: <Switch    onClick={toggleView}/></p>

      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {isResponsiveView ? (
            UserList && <ReactDataTable enableResponsiveView={enableResponsiveView} columns={columns} data={UserList} />
          ) : (
            UserList && <ReactColumnAsRowsDataTable columns={columns} data={UserList} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
