import React from "react";
import { Grid, _ } from "gridjs-react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import wire from "../../../assets/images/demo/wire.jpg";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FeatherIcon from "feather-icons-react";
import activity1 from "../../../assets/images/brands/slack.png";
import activity2 from "../../../assets/images/brands/dribbble.png";
import activity3 from "../../../assets/images/brands/dropbox.png";
import activity4 from "../../../assets/images/brands/bitbucket.png";
import activity5 from "../../../assets/images/brands/mail_chimp.png";

const data = [
  [
    1,
    "Learn to earn",
    "Learn a technology to earn points",
    "12/09/2022",
    500,
    "4358",
  ],
  [
    2,
    "Refer a friend",
    "Refer a friend to earn points",
    "11/10/2022",
    34,
    "8358",
  ],
  [
    3,
    "Attend an event",
    "Attend events to earn points",
    "15/12/2022",
    243,
    "8658",
  ],
  [
    4,
    "Make training data public",
    "Upload data and make it public",
    "21/09/2022",
    354,
    "5358",
  ],
  [
    5,
    "Appear for  test",
    "Take a test to earn points",
    "13/08/2022",
    232,
    "1234",
  ],
  [
    6,
    "Make training data public",
    "Upload data and make it public",
    "22/09/2022",
    500,
    "2358",
  ],
  [
    7,
    "Appear for  test",
    "Take a test to earn points.",
    "23/08/2022",
    321,
    "4334",
  ],
];

const scanLink = `https://etherscan.io/tx/0xfa430d80e107aeb588cf54f8112af0e5bccf5019a957222998a37715e1a015c4`;

export const ActivityHistory = () => {
  document.title = "Dashboard | Mindplex ";
  return (
    <Card>
      <CardHeader>
        <h4 className="card-title mb-0 flex-grow-1">
          {" "}
          <i className="bx bx-history"></i> Activities History
        </h4>
      </CardHeader>
      <CardBody>
        <div id="table-gridjs">
          <Grid
            data={data}
            columns={[
              { name: "S.No.", width: "70px" },
              {
                name: "Activity",
                width: "200px",
                formatter: (cell) =>
                  _(
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center">
                        {cell == "Learn to earn" && (
                          <img
                            src={activity1}
                            alt=""
                            className="avatar-xxs rounded-circle me-2"
                          />
                        )}
                        {cell == "Refer a friend" && (
                          <img
                            src={activity2}
                            alt=""
                            className="avatar-xxs rounded-circle me-2"
                          />
                        )}
                        {cell == "Attend an event" && (
                          <img
                            src={activity3}
                            alt=""
                            className="avatar-xxs rounded-circle me-2"
                          />
                        )}
                        {cell == "Make training data public" && (
                          <img
                            src={activity4}
                            alt=""
                            className="avatar-xxs rounded-circle me-2"
                          />
                        )}
                        {cell == "Appear for  test" && (
                          <img
                            src={activity5}
                            alt=""
                            className="avatar-xxs rounded-circle me-2"
                          />
                        )}
                        {`${cell}`}
                      </div>
                    </div>
                  ),
              },
              { name: "Description", width: "270px" },
              { name: "Date", width: "100px" },
              {
                name: "Points Earned",
                width: "150px",
                formatter: (cell) =>
                  _(
                    <div
                      style={{ fontWeight: "bold" }}
                      className=" text-success"
                    >
                      {cell}{" "}
                    </div>
                  ),
              },
              {
                name: "Trx Hash",
                width: "250px",
                formatter: (cell) =>
                  _(
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center">
                        <img
                          src={wire}
                          alt=""
                          className="avatar-xs rounded-circle me-2"
                        />
                        <a href={scanLink} className="text-info p-0">
                          {`0X${cell}.....${cell}`}
                          {/* {`${cell}`} */}
                        </a>
                      </div>

                      <span
                        role="button"
                        className="fa-layers text-gray fa-fw p-0"
                      >
                        <FontAwesomeIcon icon={faCopy} />
                        {/* <FontAwesomeIcon icon="fa-solid fa-copy" /> */}
                        {/* <i className="fa-light fa-copy"></i> */}
                      </span>
                    </div>
                  ),
              },
            ]}
            search={true}
            sort={true}
            pagination={{ enabled: true, limit: 5 }}
          />
        </div>
      </CardBody>
    </Card>
  );
};
