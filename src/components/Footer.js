export default function Footer(){
    return(
        <footer>
            <div id="footer">
                <dl>
                    <dt>C / S</dt>
                    <dd>010 - 1234 - 1234</dd>
                    <dd>AM 9:00 - PM 6:00 <span>(주말 및 공휴일 휴무)</span></dd>
                </dl>
                <dl>
                    <dt>COMPANY</dt>
                    <dd>
                        <ul>
                            <li>
                                <dl>
                                    <dt>상호</dt>
                                    <dd>(주)주식회사</dd>
                                </dl>
                                <dl>
                                    <dt>대표</dt>
                                    <dd>홍길동</dd>
                                </dl>
                                <dl>
                                    <dt>사업자등록번호</dt>
                                    <dd>123-12-12345</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>통신판매업 신고</dt>
                                    <dd>제 1234-서울-1234호</dd>
                                    <dd>[사업자정보확인]</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>전화</dt>
                                    <dd>010-1234-5678</dd>
                                </dl>
                                <dl>
                                    <dt>주소</dt>
                                    <dd>서울특별시</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>개인정보관리책임자</dt>
                                    <dd>김길동</dd>
                                    <dd>(abcdefg@gmail.com)</dd>
                                </dl>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>BANK</dt>
                    <dd>**은행 01234-5678</dd>
                    <dd>예금주 (주)식회사</dd>
                </dl>
            </div>
            <div className="mfooter">
                <ul>
                    <li>
                        <dl>
                            <dt>COMPANY NAME : </dt>
                            <dd>&nbsp;(주)주식회사</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>CEO : </dt>
                            <dd>&nbsp;홍길동</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>ADDRESS : </dt>
                            <dd>&nbsp;서울특별시</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>COMPANY REG.NO : </dt>
                            <dd>&nbsp;123-12-12345</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>CPO : </dt>
                            <dd>&nbsp;김길동</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

