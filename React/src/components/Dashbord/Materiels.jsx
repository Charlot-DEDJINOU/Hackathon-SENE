import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Materiel from "./Materiel"

import { useState , useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
}));

function Deee() {

  const classes = useStyles();

  useEffect(()=> {
    fetch("http://localhost/projets/api/materiel/materiels.php")
        .then((response) => response.json())
        .then((reponse) => {
            if(reponse.message)
              setdata([])
            else
              setdata(reponse["materiels"])
        })
        .catch((error) => alert(error.stack));
    } , [])
  
  const [data , setdata] = useState([])

  const Allproduits = data.map((item) => {
    return <Materiel {...item} />;
  });

  return (
    <div>
      <TableContainer
        component={Paper}
        style={{
          width: "100%",
          height : "100%" ,
          overflowY: "auto",
          "::webkit-scrollbar": {
            width: "0px",
          },
        }}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead >
            <TableRow style={{ backgroundColor: "#00a34c60" }}>
              <TableCell
                style={{ backgroundColor: "#00a34c60", textAlign: "center",fontSize:'15px',fontWeight:'bold' }}
              >
                Designation
              </TableCell>
              <TableCell style={{ textAlign: "center",fontSize:'15px',fontWeight:'bold' }}>
                Prix unitaire
              </TableCell>
              <TableCell
              
                style={{ backgroundColor: "#00a34c60", textAlign: "center",fontSize:'15px',fontWeight:'bold' }}
              >
                Etat
              </TableCell>
              <TableCell
              
                style={{ textAlign: "center",fontSize:'15px',fontWeight:'bold' }}
              >
                Type
              </TableCell>
              <TableCell style={{ backgroundColor: "#00a34c60", textAlign: "center",fontSize:'15px',fontWeight:'bold' }}>
                Url Image
              </TableCell>
              <TableCell
                style={{textAlign: "center",fontSize:'15px',fontWeight:'bold' }}
              >
                Quantité Stock
              </TableCell>
              <TableCell style={{backgroundColor: "#00a34c60", textAlign: "center",fontSize:'15px',fontWeight:'bold' }}>Publier</TableCell>
              <TableCell
                align="center"
                style={{  textAlign: "center",fontSize:'15px',fontWeight:'bold'}}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          {Allproduits}
        </Table>
      </TableContainer>
    </div>
  );
}
export default Deee;
