import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap'
import { FaSearch, FaCommentAlt, FaRegComments } from 'react-icons/fa'
import { RiUserSharedLine } from 'react-icons/ri'




class FilterAll extends Component {




    
    state = {
        search: '',
    }

    setSearch = (e) => {
        this.setState({ search: e.target.value });
    }



    render() {
        return (
            <div className="userPar">
                <Row className="userRow">
                    

                    <Col md={4} className="side2" style={{paddingLeft:15}}>
                        <div style={{paddingTop: "10px"}}>
                           <p style={{lineHeight:"40px", textAlign:"center", fontSize:"40px", color:"darkgreen"}}>Good</p> 
                        </div>
                        <div className="searchInp">
                            <label><FaSearch /></label>
                            <input type="text" placeholder="Бүх хайлтыг эндээс ..." onChange={this.setSearch} value={this.state.search} />
                        </div>
                        <div className="usersMenu">

                            <div className="users" >
                                <div className="people"><RiUserSharedLine />
                                    Ганбаатар Цогт
                                    <p>+976 99503855</p>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col md={4} className="side2" style={{paddingLeft:15, paddingRight:15}}>
                        <div style={{paddingTop: "10px"}}>
                           <p style={{lineHeight:"40px", textAlign:"center", fontSize:"40px", color:"orange"}}>Between</p> 
                        </div>
                        <div className="searchInp">
                            <label><FaSearch /></label>
                            <input type="text" placeholder="Бүх хайлтыг эндээс ..." onChange={this.setSearch} value={this.state.search} />
                        </div>
                        <div className="usersMenu">

                            <div className="users" >
                                <div className="people"><RiUserSharedLine />
                                    Ганбаатар Цогт
                                    <p>+976 99503855</p>
                                </div>
                            </div>
                        </div>
                    </Col>



                    <Col md={4} className="side2" style={{paddingLeft:"0px", paddingRight:"15px"}}>
                        <div style={{paddingTop: "10px"}}>
                           <p style={{lineHeight:"40px", textAlign:"center", fontSize:"40px", color:"darkred"}}>Bad `saddd</p> 
                        </div>
                        <div className="searchInp">
                            <label><FaSearch /></label>
                            <input type="text" placeholder="Бүх хайлтыг эндээс ..." onChange={this.setSearch} value={this.state.search} />
                        </div>
                        <div className="usersMenu">

                            <div className="users" >
                                <div className="people"><RiUserSharedLine />
                                    Ганбаатар Цогт
                                    <p>+976 99503855</p>
                                </div>
                            </div>
                        </div>
                    </Col>




                </Row>
            </div>
        );
    }
}

export default FilterAll;








const people = [
    {
        name: 'Larry Doank', phone: '+90662202', address: 'Түүнчлэн COVID-19 өвчний тархалт болон аяллын хязгаарлалтуудаас болж дэлхийн зорчигч тээврийн компаниуд 2023 он хүртэл зогсонги байдалтай байна гэдгийг Олон улсын агаарын тээврийн холбоо',
       chat: [
            {
                myChat: 'Египетийн аялал жуулчлалын компанийн үүсгэн байгуулагч',
            },
            {
                myChat: 'hhahahahha',
            },
            {
                myChat: 'Харин түүний дүү Б.Ганхөлөг эгч шигээ нийслэлийн',
            },
            {
                myChat: 'Египетийн аялал жуулчлалын компанийн үүсгэн байгуулагч',
            },
            {
                myChat: 'Ташрамд хэлэхэд Шунхлай групп шингэн хүнс, хэвлэл  Сайн2 ',
            },
        ],
    },
    {
        name: 'John Prank', phone: '+99752438', address: 'Египетийн аялал жуулчлалын компанийн үүсгэн байгуулагч',
    },
    {
        name: 'Brad Pitt', phone: '+99354128', address: 'hhahahahha',
    },
    {
        name: 'Hunkey Jotsan', phone: '+88245637', address: 'Түүнчлэн COVID-19 өвчний тархалт болон аяллын хязгаарлалтуудаас болж дэлхийн зорчигч тээврийн компаниуд 2023 он хүртэл зогсонги байдалтай байна гэдгийг Олон улсын агаарын тээврийн холбоо',
    },
    {
        name: 'Punk John', phone: '+99747148', address:'Харин түүний дүү Б.Ганхөлөг эгч шигээ нийслэлийн', 
    },
    {
        name: 'Hassle', phone: '+9914516514', address: 'Ташрамд хэлэхэд Шунхлай групп шингэн хүнс, хэвлэл   ',
    },
    {
        name: 'Bashe', phone: '+99354128', address: 'Харин түүний хадам аав, Ц.Цэрэнпунцаг гарьд Завхан аймгаас МАН-аас нэр дэвшиж байна. Тэрээр GEM группийн үүсгэн байгуулагч, ерөнхийлөгчөөр ажилладаг.',
    },
    {
        name: 'Lynkhua', phone: '+88245637', address: 'Түүнчлэн COVID-19 өвчний тархалт болон аяллын хязгаарлалтуудаас болж дэлхийн зорчигч тээврийн компаниуд 2023 он хүртэл зогсонги байдалтай байна гэдгийг Олон улсын агаарын тээврийн холбоо',
    },
    {
        name: 'Larry Larry', phone: '+90662202', address: 'УИХ-ын гишүүн А.Сүхбат хууль тогтоох байгууллагад ажилласан цөөн бөхийн нэг. Тэрээр 2016-2020 оны УИХ-д Төв аймгаас сонгогдон ',
    },
    {
        name: 'John Prank', phone: '+99752438', address: 'Ташрамд хэлэхэд Ш.Сайхансамбуугийн охин С.Эрдэнэтуул 2016 оноос хойш Үндэсний цэцэрлэгт хүрээлэнгийн даргаар ажиллаж байна.   ',
    },
    {
        name: 'Brad Pitt', phone: '+99354128', address: 'Сайн байна, Амжилт',
    },
    {
        name: 'Hunkey Jotsan', phone: '+88245637', address: 'Түүнчлэн COVID-19 өвчний тархалт болон аяллын хязгаарлалтуудаас болж дэлхийн зорчигч тээврийн компаниуд 2023 он хүртэл зогсонги байдалтай байна гэдгийг Олон улсын агаарын тээврийн холбоо',
    },
    {
        name: 'Punk John', phone: '+99747148', address:'УИХ-ын гишүүн А.Сүхбат хууль тогтоох байгууллагад ажилласан цөөн бөхийн нэг. Тэрээр 2016-2020 оны УИХ-д Төв аймгаас сонгогдон ',
    },
    {
        name: 'Hassle', phone: '+9914516514', address: 'Мэргэжлээр нь ангилбал энэ удаагийн сонгуульд хуульч, эдийн засагч, сэтгүүлчид олноороо өрсөлдөх нь. Харин инженер, зохион бүтээгч, багш,, эмч нар цөөн байна. ',
    },
    {
        name: 'Bashe', phone: '+99354128', address: 'Ташрамд хэлэхэд Шунхлай амжилт ',
    },
    {
        name: 'Lynkhua', phone: '+88245637', address: 'Шунхлай группийн эзэд болох П.Батчимэг, Б.Ганхөлөг нар хамтдаа нэр дэвшив. Болиооо гаруудаа',
    },
]
