import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap'

class Users extends Component {

    state = {
        search: '',
        dataLoaded: false,
        data: []
    }

    setSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    render() {
        return (

            <div>
                <div className="headPar">
                    <div class="wrapper">
                        <div className="header">
                            <div className="title">
                                Хайлт Test2
                           </div>
                            <div className="search_box">
                                <input type="text" id="search_input" onChange={this.setSearch} value={this.state.search} placeholder="Нэр, утас эсвэл гэрийн хаягаар хайна уу... ↓" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="table_body">
                    <ul>
                        {this.state.search == '' ?
                            people.map((el, i) => {
                                return (
                                    <Col md={6} key={i}>
                                        <div className="co">
                                            <div className="buttons" >
                                                <div className="linkCount">LINK</div>
                                                <div className="chatCount">25</div>
                                            </div>
                                            <div style={{ padding: "10px 10px", marginTop: "0px" }}>
                                                <Row >
                                                    <div>
                                                        <Col md={3}>
                                                            <div >
                                                                <div>
                                                                    <img src={require('../img/pro1.jpg')} />
                                                                </div>
                                                                <div>
                                                                    <span className="name">{el.name}</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md={9} >
                                                            <div className="scrollBar">
                                                                <ul >
                                                                    <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                                    </li>
                                                                    <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                                    </li>
                                                                    <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                                    </li>
                                                                    <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                                    </li>
                                                                    <li>{el.phone}
                                                        <div className="dateHover">2019/05/30</div>
                                                                    </li>
                                                                    <li>{el.address}
                                                        <div className="dateHover">2019/05/30</div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </Row>

                                            </div>
                                        </div>
                                    </Col>

                                    )
                            })
                            :
                            people.map((el, i) => {
                                let tmp = this.state.search.toLowerCase();
                                let name = el.name.toLowerCase()
                                let phone = el.phone.toLowerCase()
                                let address = el.address.toLowerCase()
                                if (name.includes(tmp) || phone.includes(tmp) || address.includes(tmp)) {
                                    return (
                                        <Col md={6}>
                                <div className="co">
                                    <div className="buttons" >
                                        <div className="linkCount">LINK</div>
                                        <div className="chatCount">25</div>

                                    </div>

                                    <div style={{ padding: "10px 10px", marginTop: "0px" }}>

                                        <Row >
                                            <div>
                                                <Col md={3}>
                                                    <div >
                                                        <div>
                                                            <img src={require('../img/pro1.jpg')} />
                                                        </div>
                                                        <div>
                                                            <span className="name">{el.name}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={9} >

                                                    <div className="scrollBar">
                                                        <ul >
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha skdgnjslk ngjdsflk gndlfkn gdf
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>{el.phone}
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>{el.address}
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Row>

                                    </div>
                                </div>
                            </Col>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
































                <div className="cardFlex">
                    <div className="container-fluid">

                        <Row style={{ marginTop: "18px" }}>





                            {/* <Col md={6}>
                                <div className="co">
                                    <div className="buttons" >
                                        <div className="linkCount">LINK</div>
                                        <div className="chatCount">25</div>

                                    </div>

                                    <div style={{ padding: "10px 10px", marginTop: "0px" }}>

                                        <Row >
                                            <div>
                                                <Col md={3}>
                                                    <div >
                                                        <div>
                                                            <img src={require('../img/pro1.jpg')} />
                                                        </div>
                                                        <div>
                                                            <span className="name">Баасан Самбууу</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={9} >

                                                    <div className="scrollBar">
                                                        <ul >
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha skdgnjslk ngjdsflk gndlfkn gdf
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>ahhahahahahhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfhdfha
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>hovd
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                            <li>ulaanbaatar
                                                        <div className="dateHover">2019/05/30</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Row>

                                    </div>
                                </div>
                            </Col> */}

                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;








const people = [
    { name: 'John', phone: '+99752438', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Brad', phone: '+99354128', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Hunkey', phone: '+88245637', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Punk', phone: '+99747148', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Hassle', phone: '+9914516514', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Bashe', phone: '+99354128', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Lynkhua', phone: '+88245637', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Shoonii', phone: '+90662202', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Mongol', phone: '+99752438', address: 'Ховд' },
    { name: 'Borjigin', phone: '+99354128', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Sukhbaatar', phone: '+88245637', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Choijil', phone: '+90662202', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Lhagva', phone: '+99752438', address: 'Баянхонгор 15-р хороо' },
    { name: 'Suren', phone: '+99354128', address: 'Ховд 15-р хороо' },
    { name: 'Jamts', phone: '+88245637', address: 'Сүхбаатар 15-р хороо' },
    { name: 'Hutsart', phone: '+90662202', address: 'Сүхбаатар 15-р хороо' },
]