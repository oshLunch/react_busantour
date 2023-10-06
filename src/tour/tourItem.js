/* 정보 입력 */

const TourItem = ({article}) => {
    const {MAIN_TITLE,      /* 콘텐츠 이름 */
           SUBTITLE,        /* 부제목 */
           GUGUN_NM,        /* 구군 */
           ADDR1,           /* 주소 */
           CNTCT_TEL,       /* 연락처 */
           MAIN_IMG_NORMAL  /* 이미지 URL */
    } = article;

    return (
        <div className = 'item'>
            <div className = 'title'>
                <h4>{SUBTITLE}</h4>
                <strong><span>{GUGUN_NM}</span> {MAIN_TITLE}</strong>
            </div> {/* title end */}

            <figure>
                <img src={MAIN_IMG_NORMAL} alt={SUBTITLE} />
            </figure>

            <div className="info">
                <span>{ADDR1}</span>
                <span>{CNTCT_TEL}</span>
            </div>
            {/* noreferrer : 해당 페이지로 넘어가기 위해 http에게 요청함 */}
        </div> /* item end */
    )
}

export default TourItem;