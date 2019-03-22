
import styles from './index.less';
import { connect } from 'dva';
import { Row, Col, Card } from 'antd';

function Summoner({ summoner, dispatch }) {
  const { summoners, summonerDetail, firstCheck } = summoner;

  console.log(summoners);

  const onClick = summonerDetail => {
    dispatch({
      type: 'summoner/save',
      payload: {
        summonerDetail: summonerDetail,
        firstCheck: false,
      }
    })
  }

  if (summoners[0] === undefined) {
    return null;
  }

  return (
    <div>
      <Row>
        <Col span={12}>
          <Row className={styles.row}>
            {(summoners || []).map((item, key) => {
              if (key === 0) {
                return (
                  <Col className={`${styles.col} ${(summonerDetail.summoner_id === item.summoner_id || firstCheck) ? styles.onSelect : null}`} key={item.summoner_id} span={6} onClick={onClick.bind(this, item)}>
                    <img src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${item.summoner_id}.jpg`} alt='技能图片' />
                    <p>{item.summoner_name}</p>
                  </Col>
                )
              } else {
                return (
                  <Col className={`${styles.col} ${(summonerDetail.summoner_id === item.summoner_id) ? styles.onSelect : null}`} key={item.summoner_id} span={6} onClick={onClick.bind(this, item)}>
                    <img src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${item.summoner_id}.jpg`} alt='技能图片' />
                    <p>{item.summoner_name}</p>
                  </Col>
                )
              }
            })}
          </Row>
        </Col>
        <Col span={12}>
          {firstCheck ? <Card className={styles.card}>
              <img src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${summoners[0].summoner_id}-big.jpg`} alt='技能展示图' />
              <h2>{summoners[0].summoner_name}</h2>
              <span>{summoners[0].summoner_rank}</span>
              <p>{summoners[0].summoner_description}</p>
            </Card> : <Card className={styles.card}>
              <img src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${summonerDetail.summoner_id}-big.jpg`} alt='技能展示图' />
              <h2>{summonerDetail.summoner_name}</h2>
              <span>{summonerDetail.summoner_rank}</span>
              <p>{summonerDetail.summoner_description}</p>
            </Card>
          }
        </Col>
      </Row>
    </div>
  );
}

export default connect(({ summoner }) => ({ summoner }))(Summoner);