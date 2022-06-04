import React, { useEffect, useState } from "react";
import mockData from "./MockData/mockData";

import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Button,
  NavDropdown,
  Table,
  Dropdown,
} from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import TextBox from "./TextBox";
import DefaultTable from "./DefaultTable";

function Home() {
  const [show, setShow] = useState(false); //TO SHOW THE OFFCANVAS COMPONENT
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [country, setCountry] = useState(); //USED IN FITERING THE DATA "shipCountry" (orders table) and "country"(customers table) while "Find By Couontry"(in the offcanvas ) gets clicked.

  const [oid, setOid] = useState(""); // USED IN ADDING THE "orderID" (orders table)  after opening ADD DATA dropdown (present in the offcanvas)
  const [ona, setOna] = useState(""); //SAME WITH "customerID" ......
  const [osn, setOsn] = useState(""); // shipName
  const [osc, setOsc] = useState(""); //shipCountry (ie: adding a new row)

  const [did, setDid] = useState("SELECT"); //  when a table is selected from the dropdown on the home page

  const [new1, setNew1] = useState({
    //After giving orderID,customerID etc etc the new row is new1.
    orderID: "",
    customerID: "",
    shipName: "",
    shipCountry: "",
  });
  const addData = () => {
    setNew1({ orderID: oid, customerID: ona, shipName: osn, shipCountry: osc }); //after clicking ADD button(menu button-->offcanvas-->ADDdata Dropdown --> putting new data-->ADD button ) this function gets called by onclick methond present in ADD button
  };

  const [deftable, setDeftable] = useState(false); // default table, when RunQuery is clicked, this variable becomes true and the default table gets displayed.
  const onRun = () => {
    // gets called when RUNQUERY BUTTON IS CLICKED
    setDeftable(true);
  };
  const ord = mockData.orders; //only the orders table, stored in an array called ord
  const cus = mockData.customers; //only the customers table, stored in an array called ord

  const ordersData = ord.filter((er) => er.shipCountry === country); // filter funtion used when a country name(in orders table) is selected (menu button-->Find By Coountry dropdown-->country name ie:USA,France,Brazil) to select the rows where shipCountry is similar with the selected values
  const customerData = cus.filter((er) => er.country === country); // same but using customers table , findind the rows where country value is similar with the selected value
  // const orders = mockData.orders;
  const [text, setText] = useState("Write Your Query Here...");
  // const changeText =
  //   "SELECT orderID, customerID, shipName, shipCountry FROM orders WHERE shipCountry = USA";
  // console.log(ord.length);
  // const [ordn, setOrdn] = useState(ord);

  useEffect(() => {
    // console.log(new1);
    ord.splice(0, 0, new1); //splice method is used to add the new row to the first position of the table array to make is easily visible to the user
  }, [ord, new1]);

  return (
    <div>
      {/* // navbar // */}
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        className="fixed-top"
        style={{ boxShadow: "3px 5px 3px #9e9e9e" }}
      >
        <Container>
          <div>
            <Button onClick={handleShow} variant="outline">
              <span>
                <FaBars />
              </span>
            </Button>
            {/* offcanvas starts */}
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>SELECT QUERIES</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <NavDropdown title="Find By Country" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    onClick={() => {
                      setCountry("USA");
                      did === "orders" //if the selected table is orders it will show the text inside the state below
                        ? setText(
                            //the predefined query for findind rows for a specific data will be shown in the text area.
                            "SELECT orderID, customerID, shipName, shipCountry FROM orders WHERE shipCountry = USA"
                          )
                        : setText(
                            //else it will show this text
                            "SELECT customerID, contactName, city, country FROM customers WHERE country = USA"
                          );
                      setDeftable(false); //to show the filtered table,making the default table false
                    }}
                  >
                    <b>USA</b>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      setCountry("France");
                      did === "orders"
                        ? setText(
                            "SELECT orderID, customerID, shipName, shipCountry FROM orders WHERE shipCountry = France"
                          )
                        : setText(
                            "SELECT customerID, contactName, city, country FROM customers WHERE country = France"
                          );
                      setDeftable(false);
                    }}
                  >
                    <b>France</b>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      setCountry("Brazil");
                      did === "orders"
                        ? setText(
                            "SELECT orderID, customerID, shipName, shipCountry FROM orders WHERE shipCountry = Brazil"
                          )
                        : setText(
                            "SELECT customerID, contactName, city, country FROM customers WHERE country = Brazil"
                          );
                      setDeftable(false);
                    }}
                  >
                    <b>Brazil</b>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Add New Data" id="basic-nav-dropdown">
                  <input
                    type="text"
                    placeholder="Enter orderID"
                    onChange={(e) => setOid(e.target.value)} // the data given here will the the oid variable(orderID) mentioned in the state
                  />
                  <input
                    type="text"
                    placeholder="Enter customerID"
                    onChange={(e) => setOna(e.target.value)} // the data given here will the the ona variable(customerID) mentioned in the state
                  />
                  <input
                    type="text"
                    placeholder="Enter shipName"
                    onChange={(e) => setOsn(e.target.value)} // the data given here will the the osn variable(shipName) mentioned in the state
                  />
                  <br />
                  <br />
                  <select onChange={(e) => setOsc(e.target.value)}>
                    {/* // the data given here will the the osc variable(shipCountry)
                    mentioned in the state */}{" "}
                    <option value="SELECT">SELECT</option>
                    <option value="USA">USA</option>
                    <option value="France">France</option>
                    <option value="Brazil">Brazil</option>
                  </select>
                  <br />
                  <br />

                  <button
                    onClick={() => {
                      addData(); //addData function is getting called//

                      setDeftable(false);

                      setText("");
                    }}
                  >
                    ADD
                  </button>
                </NavDropdown>
              </Offcanvas.Body>
            </Offcanvas>

            {/* //offcanvas ends// */}
          </div>
          <Navbar.Brand style={{ marginLeft: "40px" }}>SQL EDITOR</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto"></Nav>
          <div className="d-flex justify-content-end gap-2">
            <Button
              variant="outline-success"
              className="btn ml-auto"
              onClick={() => {
                onRun();
                setDid({});
                setText(""); //on clicking runquery the default table will be shown, if a table selected from the home page dropdown ,it will not be shown as did is an empty object
              }}
            >
              Run Query
            </Button>
            <Button variant="outline-success" className="btn ml-auto">
              {/* button for importing file  */}
              Import File
            </Button>

            <Dropdown>
              <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                Export File
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Export file dropdown where diff types of files are there as options// */}
                <Dropdown.Item>.CSV</Dropdown.Item>
                <Dropdown.Item>XML</Dropdown.Item>
                <Dropdown.Item>pdf</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      <TextBox text={text} />
      {/* //textbox component imported , where text is a property , and {text} is a variable which is getting updated with setText and is shown in the place holder of the textbox component */}
      <div
        style={{
          margin: "5px",
          maxHeight: "45vh",
          overflowY: "auto",
        }}
      >
        <select //by selecting a table updating the value of did mentioned in the state
          onChange={(e) => {
            setDid(e.target.value);
            setText(""); //when a table is selected from the dropdown of the home page the predefined query will not be visible in the textbox
            setDeftable(false);
          }}
        >
          <option value="SELECT TABLE">SELECT TABLE</option>
          <option value="orders">orders</option>
          <option value="customers">customers</option>
        </select>
        {deftable && <DefaultTable />}
        {/* //if deftable is true (means the RUNQUERY button is clicked, the default table will be displayed) */}
        {/* if the selected table is orders then this table will be displayed */}

        {did === "orders" && (
          <Container style={{ boxShadow: "3px 2px 3px 2px #9e9e9e" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>orderID</th>
                  <th>customerID</th>
                  <th>shipName</th>
                  <th>shipCountry</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* mapping in the ordersData array(which is the filtered by country array) */}
                {ordersData.map((data) => (
                  <tr key={data.orderID}>
                    <td>{data.orderID}</td>
                    <td> {data.customerID}</td>
                    <td>{data.shipName}</td>
                    <td>{data.shipCountry}</td>
                    <td>
                      {" "}
                      <button>DELETE</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        )}
        {did === "customers" && (
          <Container style={{ boxShadow: "3px 2px 3px 2px #9e9e9e" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>customerID</th>
                  <th>contactName</th>
                  <th>city</th>
                  <th>country</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {customerData.map((data) => (
                  <tr key={data.customerID}>
                    <td>{data.customerID}</td>
                    <td> {data.contactName}</td>
                    <td>{data.city}</td>
                    <td>{data.country}</td>
                    <td>
                      {" "}
                      <button>DELETE</button>
                      {/* delete button to delete a specific row */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        )}
      </div>
    </div>
  );
}

export default Home;
