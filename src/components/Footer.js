import React from "react";

function Footer(){
    return(
        <div className="Footer">
            <footer>
                <div className="left_wrapper">
                    <a className="footer_logo" style={{fontWeight:"bold",fontSize:"27px"}}>
                        DeVin
                    </a>
                    <div className="ul_wrapper">
                        <ul>
                            <li>1:1 문의</li>
                            <li>제휴 문의</li>
                        </ul>
                        <ul style={{color:"black",fontWeight:"550"}}>
                            <li>DeVin 카카오톡 채널</li>
                            <li>abcde@mail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="right_wrapper">
                    <div>
                        <p>바로가기</p>
                        <ul>
                            <li><a>프로젝트</a></li>
                            <li><a>스터디</a></li>
                            <li><a>Q&A</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>이용안내</p>
                        <ul>
                            <li><a>공지사항</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>서비스약관</p>
                        <ul>
                            <li><a>서비스 이용약관</a></li>
                            <li><a>개인정보취급방침</a></li>
                            <li><a>전자금융거래약관</a></li>
                            <li><a>결제/환불약관</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}


export default Footer;