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
import UserEnregistrement from "./UserEnregistrement";
import { useState , useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
}));

function Deee() {

  const classes = useStyles();

  useEffect(()=> {
    fetch("http://localhost/projets/api/enregistrement_deees/deees.php")
        .then((response) => response.json())
        .then((reponse) => {
            if(reponse.message)
              setdata([])
            else
              setdata(reponse["enregistrement_deees"])
        })
        .catch((error) => alert(error.stack));
    } , [])
  
  const [data , setdata] = useState([])

  const AllUserEnregistrement = data.map((item) => {
    return <UserEnregistrement {...item} />;
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
                style={{ backgroundColor: "#00a34c60", textAlign: "center",fontSize:'18px',fontWeight:'bold' }}
              >
                Nom
              </TableCell>
              <TableCell style={{ textAlign: "center",fontSize:'18px',fontWeight:'bold' }}>
                Prénom
              </TableCell>
              <TableCell
              
                style={{ backgroundColor: "#00a34c60", textAlign: "center",fontSize:'18px',fontWeight:'bold' }}
              >
                Quantité
              </TableCell>
              <TableCell style={{ textAlign: "center",fontSize:'18px',fontWeight:'bold' }}>Repère</TableCell>
              <TableCell
              
                style={{ backgroundColor: "#00a34c60", textAlign: "center",fontSize:'18px',fontWeight:'bold' }}
              >
                Contact
              </TableCell>
              <TableCell style={{ textAlign: "center",fontSize:'18px',fontWeight:'bold' }}>
                Ville
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#00a34c60", textAlign: "center",fontSize:'18px',fontWeight:'bold' }}
              >
                Quartier
              </TableCell>
              <TableCell
                align="center"
                style={{  textAlign: "center",fontSize:'18px',fontWeight:'bold' }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          {AllUserEnregistrement}
        </Table>
      </TableContainer>
    </div>
  );
}
export default Deee;
