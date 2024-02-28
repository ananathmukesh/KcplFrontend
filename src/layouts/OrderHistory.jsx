import React, { useState } from "react";
import "../Styles/OrderHistory.css";
import auto from "../assets/images/Auto-3D.png";
import Auto from "../assets/images/Auto-Anime.png";

const OrderHistory = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="OrderHistory">
      <div className="card ">
        <h3 className="mb-3">Order History</h3>
        <div className="card p-2 mb-3" onClick={toggleExpanded}>
          <div className="row py-2 m-0">
            <div className="col-3">
              <div className="title">
                <h3>Order Placed</h3>
                <p>March 14 ,2024</p>
              </div>
            </div>
            <div className="col-3">
              <div className="title">
                <h3>Total</h3>
                <p>104.75</p>
              </div>
            </div>
            <div className="col-3">
              <div className="title">
                <h3>Ship To</h3>
                <p>Ying shang</p>
              </div>
            </div>
            <div className="col-3">
              <div className="title">
                <h3>Order Placed</h3>
                <p>March 14 ,2024</p>
              </div>
            </div>
          </div>
          {expanded && (
            <div
              className="content p-2"
              style={{ borderTop: "2px solid #e6e6e682" }}
            >
              <div className="row">
                <div className="col-10">
                  <div className="d-flex">
                    <img src={auto} alt="" style={{ width: "8rem" }} />
                    <div className="">
                      <h5>e-Rickshaws</h5>
                      <p>
                        Sold Buy : <span>Karthick</span>
                      </p>
                      <div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: "&#8377 1,20,000",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="d-flex flex-column">
                    <button className="btn btn-primary">View Detail</button>
                    <button className="btn btn-secondary mt-2">Invoice</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="card p-2" onClick={toggleExpanded}>
          <div className="row py-2 m-0">
            <div className="col-3">
              <div className="title">
                <h3>Order Placed</h3>
                <p>March 14 ,2024</p>
              </div>
            </div>
            <div className="col-3">
              <div className="title">
                <h3>Total</h3>
                <p>104.75</p>
              </div>
            </div>
            <div className="col-3">
              <div className="title">
                <h3>Ship To</h3>
                <p>Ying shang</p>
              </div>
            </div>
            <div className="col-3">
              <div className="title">
                <h3>Order Placed</h3>
                <p>March 14 ,2024</p>
              </div>
            </div>
          </div>
          {expanded && (
            <div
              className="content p-2"
              style={{ borderTop: "2px solid #e6e6e682" }}
            >
              <div className="row">
                <div className="col-10">
                  <div className="d-flex">
                    <img src={Auto} alt="" style={{ width: "8rem" }} />
                    <div className="">
                      <h5>Rickshaws</h5>
                      <p>
                        Sold Buy : <span>Karthick</span>
                      </p>
                      <div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: "&#8377 1,20,000",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="d-flex flex-column">
                    <button className="btn btn-primary">View Detail</button>
                    <button className="btn btn-secondary mt-2">Invoice</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
