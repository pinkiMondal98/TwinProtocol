import React from 'react';
import { Grid, _ } from 'gridjs-react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import wire from "../assets/images/demo/wire.jpg"
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FeatherIcon from "feather-icons-react";
import activity1 from "../assets/images/brands/slack.png";
import activity2 from "../assets/images/brands/dribbble.png";
import activity3 from "../assets/images/brands/dropbox.png";
import activity4 from "../assets/images/brands/bitbucket.png";
import activity5 from "../assets/images/brands/mail_chimp.png";
import { Link } from 'react-router-dom';

// const data = [
//     [1,"AI Code", "Write an AI code to fetch last 5 transactions to earn points","12/09/2022",500, '4358'],
//     [2,"Tell us about Mindplex", "Let us know about the different dimensions they work on","11/10/2022",34, '8358'],
//     [3,"Awareness", "Build something to spread the awareness of Mindplex magazine","15/12/2022",243, '8658'],
//     [4,"Join our business", "Help people to interact or collaborate here.","21/09/2022",354,'5358'],
//     [5,"Watch a Video", "Help people to get the right information.", "13/08/2022",232,'1234'],
//     [6, "Join our business", "Help people to interact or collaborate here.", "22/09/2022",500, '2358'],
//     [7,"Watch a Video", "Help people to get the right information.", "23/08/2022",321,'4334'],

// ];
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

export const ActivityTable = () => {
    document.title = 'Dashboard | Mindplex '
  return (
    <Col className='m-2'>
    <Card>
        <CardHeader>
            <h4 className="card-title mb-0 flex-grow-1"> <i className='bx bx-history'></i> Activities
              <button type="button" className="btn btn-soft-info btn-sm float-end">
                <i className="ri-file-list-3-line align-bottom"></i> Export
                Report
              </button>
            </h4>
            
        </CardHeader>
        <CardBody>
            <div id="table-gridjs">
             <Grid data={data}  columns={[
                {name:"S.No.",width:"70px"},
                {name:"Activity",
                width:"200px",
                formatter : (cell) => _(<a href="/activities/activity-detail" style={{pointerEvents:'auto'}}><div className="d-flex align-items-center gap-2">
                                            <div className="d-flex align-items-center">
                                                {cell=="Learn to earn" && <img src={activity1} alt="" className="avatar-xxs rounded-circle me-2" /> }
                                                {cell=='Refer a friend' && <img src={activity2} alt="" className="avatar-xxs rounded-circle me-2" />  }
                                                {cell=='Appear for  test' && <img src={activity3} alt="" className="avatar-xxs rounded-circle me-2" />  }
                                                {cell=='Make training data public' && <img src={activity4} alt="" className="avatar-xxs rounded-circle me-2" />  }
                                                {cell=='Attend an event' && <img src={activity5} alt="" className="avatar-xxs rounded-circle me-2" />  }
                                                {`${cell}`}
                                            </div>
                                        </div></a>)
                },
                {name:"Description",width:"270px"},
                {name:"Date",width:"100px",formatter : (cell) => _(<div style={{fontWeight:"bold"}} className="btn btn-soft-primary">{cell} </div>) },
                {name:"Points Earned",width:"150px" ,formatter : (cell) => _(<div style={{fontWeight:"bold"}} className=" text-success">{cell} </div>) },
                ]}
                search={true}
                sort={true}
                pagination={{ enabled: true, limit: 5, }}
                />
            </div>
        </CardBody>
      </Card>
    </Col>
  )
}
