/* 정보 입력 */

const TourItem = ({article}) => {
    const {MAIN_TITLE,      /* 콘텐츠 이름 */
           TITLE,           /* 제목 */
           GUGUN_NM,        /* 구군 */
           HOMEPAGE_URL,    /* 홈페이지 */
           MAIN_IMG_NORMAL  /* 이미지 URL */
    } = article;

    return (
        <div className = 'item'>
            <div className = 'title'>
                <div className="name">
                    <strong>{MAIN_TITLE}</strong>
                    <span>{GUGUN_NM}</span>
                </div>

                <div className="info">
                    <h4>{TITLE}</h4>
                    {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target='_blank' rel="noreferrer">더 알아보기 ▶</a>}
                </div>
            </div> {/* title end */}

            <figure>
                <img src={MAIN_IMG_NORMAL} alt={TITLE} />
            </figure>
            {/* noreferrer : 해당 페이지로 넘어가기 위해 http에게 요청함 */}
        </div> /* item end */
    )
}

export default TourItem;