import React, { useState } from "react";
import Card from "../../components/card";
import Navbar from "../../components/navbar";
import { data } from "../../data";
import { Form, Button } from "react-bootstrap";
import "./styles.scss";
import axios from "axios";
export default function Home() {
  const [list, setList] = useState(data);
  const [search, setSearch] = useState([]);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState();

  // useEffect(() => {
  //   console.log("ham nay chay dau tien");
  //   fecthAPI();
  // }, []);
  // const fecthAPI = () => {
  //   fetch("https://reqres.in/api/users/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };
  axios
    .get("https://lap-center.herokuapp.com/api/product")
    .then(function (response) {
      // handle success
      console.log("Success:",response.data);
      setList("Success:",response.data.products);
    })
    .catch(function (error) {
      // handle error
      console.log("Error:",error);
    })
    .then(function () {
      // always executed
    });

  const handleChange = (val) => {
    setSearch(val);
    setList(
      data.filter((item) =>
        item?.name?.toLowerCase()?.includes(val.toLowerCase())
      )
    );
  };

  const onSubmitSearch = () => {
    setList(
      data.filter((item) =>
        item?.name?.toLowerCase()?.includes(search.toLowerCase())
      )
    );
  };
  const handleSelectChange = (e) => {
    const val = e.target.value;
    setBrand(val);
    setList(
      data.filter((item) =>
        item?.brand?.toLowerCase()?.includes(val.toLowerCase())
      )
    );
  };
  const sortPrice = (e) => {
    const val = e.target.value;
    setPrice(val);
    // setList(
    //   data.filter((item) =>
    //     item?.price?.toLowerCase()?.includes(val.toLowerCase())

    //   )
    // );
    if (val === "1") {
      setList(data.sort((a, b) => a.price - b.price));
    } else {
      setList(data.sort((a, b) => b.price - a.price));
    }
  };
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="content">
        <div className="menu_left">
          <Form.Label htmlFor="inputPassword5">Search</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="text"
              id="hi"
              value={search}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              aria-describedby="passwordHelpBlock"
              placeholder="Search"
            />
            <Button variant="primary" onClick={onSubmitSearch}>
              Search
            </Button>{" "}
          </div>
          <div className="selectForm d-flex">
            <p>H??ng</p>
            <select
              className="selectBox"
              value={brand}
              onChange={handleSelectChange}
            >
              <option selected value=""></option>
              <option value="Asus">ASUS</option>
              <option value="Dell">DELL</option>
              <option value="Acer">ACER</option>
              <option value="Lenovo">LENOVO</option>
            </select>
          </div>
          <div className="selectForm d-flex">
            <p>Gi??</p>
            <select className="selectBox" value={price} onChange={sortPrice}>
              <option selected value=""></option>
              <option value="1">T??? th???p ?????n cao</option>
              <option value="2">T??? cao ?????n th???p</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around list-products">
          {list.map((item) => (
            <Card product={item} />
          ))}
          {/* {list.map((item) => (
            <Card product={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
