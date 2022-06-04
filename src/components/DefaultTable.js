import React from "react";
import { Container, Table } from "react-bootstrap";
import mockData from "./MockData/mockData";
const defData = mockData.shippers;

function DefaultTable() {
  return (
    <div>
      <Container style={{ boxShadow: "3px 2px 3px 2px #9e9e9e" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>shipperID</th>
              <th>companyName</th>
              <th>phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {defData.map((data) => (
              <tr key={data.shipperID}>
                <td>{data.shipperID}</td>
                <td> {data.companyName}</td>
                <td>{data.phone}</td>

                <td>
                  <button>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default DefaultTable;
