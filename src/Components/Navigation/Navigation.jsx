import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import MyCarouselChild from "../Body/MyCarouselChild"


export const Navigation = () => {
  const [navData, setNavData] = useState([]);
  const [name, setName] = useState();
  const [link, setLink] = useState();
  const [show, setShow] = useState(false);
   

  const finalResult = useSelector((state) => state.navReducer.navData);
  useEffect(() => {
    setNavData(finalResult);
  }, [finalResult]);

  const dispatch = useDispatch();
  const handleAddLink = () => {
    dispatch({ type: "ADD_NAV_LINK", navData: { name, link} });
    // OR
    // dispatch(NavigationAction(name, link, target));
  };
  return (
    <div>
      <nav>
        {navData.map((elemnets) => {
          return (
            <a href={elemnets.link}  >
              {elemnets.name}
            </a>
          );
        })}
      </nav>
      <div style={{ float: "right", margin: "15px" }}>
        <input
          className="m-2"
          type="text"
          placeholder="Add New Shop Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="m-2"
          type="text"
          placeholder="Add New Shop Link URL"
          onChange={(e) => setLink(e.target.value)}
        />
        
        <button onClick={handleAddLink}>Add Shop </button>

        {/* Modal Start From <Here className=""></Here> */}

        <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>DASHBOARD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <h4>Add Carousels</h4>
          <MyCarouselChild />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};
