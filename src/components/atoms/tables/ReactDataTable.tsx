 
import DatatableBase from './DatatableBase'
import  { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ReactDataTable(props: any) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 900,
        lg: 1200,
        xl: 1920,
      },
    },
  });
  const isMobileDevice = useMediaQuery(theme.breakpoints.between('xs', 'md'));;
  const isTabletDevice = useMediaQuery(theme.breakpoints.between('md', 'lg'));;
  const [visibleColumns, setVisibleColumns] = useState(props.columns);
  const [originalColumnWidths, setOriginalColumnWidths] = useState({});
 
  let { data  } = props; 
 

  useEffect(() => {
    if (isMobileDevice && props.enableResponsiveView) {
      // Adjust columns for smaller devices
      adjustColumnsForSmallDevice();
    } else  if (isTabletDevice && props.enableResponsiveView) {
      // Adjust columns for smaller devices
      adjustColumnsForSmallDevice();
    } else {
      // Restore original column widths for larger devices
      restoreOriginalColumnWidths();
    }
    
  }, [isMobileDevice,isTabletDevice, props.columns]);

  // Function to adjust columns for smaller devices
  const adjustColumnsForSmallDevice = () => {
    let totalAdjustedColumns = 0;let adjustedColumns;

    if(isMobileDevice)
      adjustedColumns = (props.columns.filter((column: any) => column.showOnMobileDevice !== false));
    else if(isTabletDevice)
      adjustedColumns = (props.columns.filter((column: any) => column.showOnTabletDevice !== false));
    
    adjustedColumns.forEach((column: { adjustWidthOnSmallerDevice: any; }) => {
      if ((isMobileDevice && column.adjustWidthOnSmallerDevice) || 
          (isTabletDevice && column.adjustWidthOnSmallerDevice)) {
          totalAdjustedColumns++;
      }
  });

    // Calculate column width for smaller devices
    const columnWidth = calculateColumnWidth(totalAdjustedColumns);
    adjustedColumns = adjustedColumns.map((column: any) => {
      if (isMobileDevice && column.adjustWidthOnSmallerDevice) {
        return { ...column, width: columnWidth };
      }else if (isTabletDevice && column.adjustWidthOnSmallerDevice) {
        return { ...column, width: columnWidth };
      }
      return column;
    });

  setVisibleColumns(adjustedColumns);
  };

  // Function to calculate column width for smaller devices
  const calculateColumnWidth = (totalAdjustedColumns: number) => {
    const totalWidth = isTabletDevice ?  70 : isMobileDevice ? 60:0;  
    const columnWidth = totalAdjustedColumns > 1 ? (totalWidth / totalAdjustedColumns) : totalWidth;
    return (columnWidth) + "%";
  };

// Function to restore original column widths for larger devices
const restoreOriginalColumnWidths = () => {
  const restoredColumns = props.columns.map((column: any) => {
    if (originalColumnWidths[column.name as keyof typeof originalColumnWidths] !== undefined) {
      return { ...column, width: originalColumnWidths[column.name as keyof typeof originalColumnWidths] };
    }
    return column;
  });
  setVisibleColumns(restoredColumns);
};
 
  return (
    <>
      {   
       <DatatableBase
        columns={visibleColumns}
        className={"react-data-table"} //Custom class for the data table
        data={data}
                 
      ></DatatableBase>}
    </>
  );
}
