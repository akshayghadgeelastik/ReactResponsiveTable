import DataTable from "react-data-table-component";
 

function DatatableBase<T>(props: any): JSX.Element {
  const customStyles = {
    headRow: {
      style: {
        fontSize: "14px",
        minHeight: "50px",
        fontWeight: 600,
        borderBottomWidth: "5px",
        borderBottomColor: "#f0f0f0",
        borderBottomStyle: "solid",
        paddingRight: "0px!important",
               
      },
    },
    rows: {
      style: {
        fontSize: "16px",
        paddingTop: "12px",
        paddingBottom: "12px",
        lineheight: "23.52px",
        height: "48px",
        fontweight: 400,
        borderBottom:"1px solid rgba(0, 0, 0, 0.12)",
                
      },
    },
  };

  return (
    <DataTable  {...props} customStyles={customStyles} />
  );
}

export default DatatableBase;
