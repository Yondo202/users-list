import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap'

class Users extends Component {
    render() {
        return (
            <div className="cardFlex">







                <div className="container-fluid">

                    <Row style={{ marginTop: "18px;" }}>
                        
                        <Col md={4}>
                            <div className="co">
                                <div style={{ padding: "10px 10px", marginTop:"30px" }}>


                                    <Row >
                                        <Col md={3} className="col-md-3">
                                            <div className="usersHeader" style={{ paddingTop: "6px;" }} >
                                                <span style={{ fontSize: "16px;" }}>Profile</span>
                                                <div id="line"></div>
                                            </div>

                                            <div>
                                                <img src={require('../img/pro1.jpg')} alt="" width="90%" height="120px" style={{ objectFit: "cover;" }} />
                                            </div>
                                            <div>
                                                <span className="ProName" >Баасан Самбууу</span>
                                            </div>
                                        </Col>

                                        <Col md={9} style={{ paddingLeft: 0 }} className="commPar">
                                            <div style={{ paddingTop: "6px;" }} >
                                                <span style={{ fontSize: "16px;" }}> ИЛГЭЭСЭН ЧАТ</span>
                                                <div id="line"></div>
                                            </div>
                                            <div className="crollBar" id="comment">
                                                <textarea class="scrollbar-width-auto">hahahah h ah ha hah ah ah ha ha dfgdfgh ah hah Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias quis at enim facere deleniti velit, commodi minus ab totam?
                                                dolor si hahahah h ah ha hah ah ah ha ha dfgdfgh ah hah Lorem ipsum dolor sit amet consectetur adipisi hahahah h ah ha hah ah ah ha ha dfgdfgh ah hah Lorem ipsum dolor sit amet consectetur adipisi
                                                 </textarea>
                                            </div>
                                        </Col>
                                    </Row>

                                          </div>
                                     </div>
                            </Col>
                        


                    </Row>
                </div>

            </div>
        );
    }
}

export default Users;