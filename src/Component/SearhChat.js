import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap'
import { FaSearch, FaCommentAlt, FaRegComments } from 'react-icons/fa'
import { RiUserSharedLine } from 'react-icons/ri'
import { BsFillChatDotsFill, BsChatQuoteFill } from 'react-icons/bs'
import { RiWechat2Line, RiFolderTransferLine } from 'react-icons/ri'
import { AiFillProfile } from 'react-icons/ai'
import {FcOpenedFolder} from 'react-icons/fc'

class UserList extends Component {


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
                    <Col md={2} className="side1">
                        <div className="mainMenu">
                            <p className="pageName" ><AiFillProfile />Page name here</p>
                            <p><BsFillChatDotsFill />Message</p>
                            <p><FaCommentAlt /> Comment</p>
                            <div className="dropDown">
                                 <p ><FcOpenedFolder /> Filter People</p>
                                <p><RiFolderTransferLine /> Good</p>
                                <p><RiFolderTransferLine /> Between</p>
                                <p><RiFolderTransferLine /> Bad</p>
                            </div>  
                        </div>
                    </Col>
                    <Col md={3} className="side2">

                        <div className="searchInp">
                            <label><FaSearch /></label>
                            <input type="text" placeholder="Бүх хайлтыг эндээс ..." onChange={this.setSearch} value={this.state.search} />
                        </div>
                                          <form onSubmit={this.handleSubmit}>
                                                    <label>
                                                        Ангилах Төрөлөө сонгоно уу?:
                                                        <select value={this.state.value} onChange={this.handleChange}>
                                                            <option value="grapefruit">all</option>
                                                            <option value="lime">Good</option>
                                                            <option value="coconut">Between</option>
                                                            <option value="mango">Bad</option>
                                                        </select>
                                                        </label>
                                                        <input type="submit" value="Нэмэх" />
                                                    </form>
                        <div className="usersMenu">
                            {this.state.search == '' ?
                                people.map((el, i) => {
                                    return (
                                        <div className="users" key={i}>
                                            <div className="people"><RiUserSharedLine />
                                                {el.name}
                                                <p>{el.phone}</p>
                                            </div>
                                        </div>

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
                                            <div className="users" key={i}>
                                                
                                                <div className="people"><RiUserSharedLine />
                                                    {el.name}
                                                    <p>{el.phone}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </Col>
                    <Col md={7} className="side3">
                        <div className="top">
                        <div className="head">
                            <p><FaRegComments /> ЯВУУЛСАН ЧАТ (ALL)</p>
                            <div className="searchInp">
                                <label><FaSearch /></label>
                                <input type="text" placeholder="Бүх хайлтыг эндээс ..." onChange={this.setSearch} value={this.state.search} />
                            </div>
                        </div>


                        {this.state.search == '' ?
                            people.map((el, i) => {
                                return (
                                    <div className="Main" key={i}>
                                        <p><BsChatQuoteFill />{el.address}</p>
                                    </div>

                                )
                            })
                            :
                            people.map((el, i) => {
                                let tmp = this.state.search.toLowerCase();
                                let name = el.name.toLowerCase()
                                let phone = el.phone.toLowerCase()
                                let address = el.address.toLowerCase()
                                // let myChat = el.chat.myChat.toLowerCase()
                                
                                if (name.includes(tmp) || phone.includes(tmp) || address.includes(tmp)) {
                                    return (
                                    <div className="Main" key={i}>
                                        <p><BsChatQuoteFill />{el.address}</p>
                                    </div>
                                    )
                                }
                            })
                        }
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserList;


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
