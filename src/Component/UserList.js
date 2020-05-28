import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap'
import {FaSearch, FaCommentAlt, FaRegComments} from 'react-icons/fa'
import {RiUserSharedLine} from 'react-icons/ri'
import {BsFillChatDotsFill, BsChatQuoteFill} from 'react-icons/bs'
import {RiWechat2Line} from 'react-icons/ri'
import {AiFillProfile} from 'react-icons/ai'

class UserList extends Component {
    render() {
        return (
            <div className="userPar">
               

                <Row className="userRow">
                    <Col md={2} className="side1">
                            <div className="mainMenu">
                                <p className="pageName" ><AiFillProfile />Page name here</p>
                                <p><BsFillChatDotsFill />Message</p>
                                <p><FaCommentAlt /> Comment</p>
                            </div>
                    </Col>
                    <Col md={3} className="side2">

                        <div className="searchInp">
                            <label><FaSearch /></label>
                               <input type="text" placeholder="Бүх хайлтыг эндээс ..." />
                        </div>

                        <div className="usersMenu">
                                <div className="users">
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    <div className="people"><RiUserSharedLine /> 
                                        БааасанСүрэн Даваа
                                        <p>BaasanDark@gmail.com</p>   
                                    </div>
                                    
                                </div>
                        </div>
                    </Col>
                    <Col md={7} className="side3">
                           <div className="head">
                               <p><FaRegComments /> ЯВУУЛСАН ЧАТ (ALL)</p>
                               <div className="searchInp">
                            <label><FaSearch /></label>
                               <input type="text" placeholder="Бүх хайлтыг эндээс ..." />
                             </div>
                           </div>
                           
                           <div className="Main">
                                <p><BsChatQuoteFill /> Түүнчлэн COVID-19 өвчний тархалт болон аяллын хязгаарлалтуудаас болж дэлхийн зорчигч тээврийн компаниуд 2023 он хүртэл зогсонги байдалтай байна гэдгийг Олон улсын агаарын тээврийн холбоо</p>
                                <p><BsChatQuoteFill />  hhahahahha</p>
                                <p><BsChatQuoteFill />  Египетийн аялал жуулчлалын компанийн үүсгэн байгуулагч</p>
                                <p><BsChatQuoteFill />  Египетийн аялал жуулчлалын компанийн үүсгэн байгуулагч</p>
                                <p><BsChatQuoteFill />  hhahahahha</p>
                                <p><BsChatQuoteFill />  hhahahahha</p>
                                <p><BsChatQuoteFill />  Өнгөрсөн долоо хоногт зочид буудлын хоёр сүлжээ болон орон сууц түрээслэх үйлчилгээ үзүүлдэг сайт дэлхий олон оронд байгаа салбарууддаа өргөн хэмжээний ариутгал цэвэрлэгээ хийсэн байна.</p>
                                <p><BsChatQuoteFill />  hhahahahha</p>
                                <p><BsChatQuoteFill />  Өнгөрсөн долоо хоногт зочид буудлын хоёр сүлжээ болон орон сууц түрээслэх үйлчилгээ үзүүлдэг сайт дэлхий олон оронд байгаа салбарууддаа өргөн хэмжээний ариутгал цэвэрлэгээ хийсэн байна.</p>
                                <p><BsChatQuoteFill />  hhahahahha</p>
                                <p><BsChatQuoteFill />  Өнгөрсөн долоо хоногт зочид буудлын хоёр сүлжээ болон орон сууц түрээслэх үйлчилгээ үзүүлдэг сайт дэлхий олон оронд байгаа салбарууддаа өргөн хэмжээний ариутгал цэвэрлэгээ хийсэн байна.</p>
                                <p><BsChatQuoteFill />  hhahahahha</p>
                                <p><BsChatQuoteFill />  Өнгөрсөн долоо хоногт зочид буудлын хоёр сүлжээ болон орон сууц түрээслэх үйлчилгээ үзүүлдэг сайт дэлхий олон оронд байгаа салбарууддаа өргөн хэмжээний ариутгал цэвэрлэгээ хийсэн байна.</p>
                                <p><BsChatQuoteFill />  hhahahahha</p>
                                <p><BsChatQuoteFill />  Өнгөрсөн долоо хоногт зочид буудлын хоёр сүлжээ болон орон сууц түрээслэх үйлчилгээ үзүүлдэг сайт дэлхий олон оронд байгаа салбарууддаа өргөн хэмжээний ариутгал цэвэрлэгээ хийсэн байна.</p>
                                <p><BsChatQuoteFill />  hhahahahha</p>
                                <p><BsChatQuoteFill />  Өнгөрсөн долоо хоногт зочид буудлын хоёр сүлжээ болон орон сууц түрээслэх үйлчилгээ үзүүлдэг сайт дэлхий олон оронд байгаа салбарууддаа өргөн хэмжээний ариутгал цэвэрлэгээ хийсэн байна.</p>
                                <p><BsChatQuoteFill />  hhahahahha</p>
                                
                           </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserList;