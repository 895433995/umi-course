
import styles from './index.less';
import { connect } from 'dva';
import { Row, Col, Card, Radio } from 'antd';

const RadioGroup = Radio.Group;
const itemType = [
  { key: 0, value: '全部' },
  { key: 1, value: '攻击' },
  { key: 2, value: '法术' },
  { key: 3, value: '防御' },
  { key: 4, value: '移动' },
  { key: 5, value: '打野' },
  { key: 7, value: '辅助' },
]
function Item({ item, dispatch }) {
  const { items, filterKey } = item;
  console.log(items);
  
  const onChange = e => {
    dispatch({
      type: 'item/save',
      payload: {
        filterKey: e.target.value, 
      }
    })
  }
  return (
    <div>
      <Card className={styles.radioPanel}>
        <RadioGroup defaultValue={filterKey} onChange={onChange}>
        {itemType.map(item => (
          <Radio key={`filter-item-${item.key}`} value={item.key}>
            {item.value}
          </Radio>
        ))}
        </RadioGroup>
      </Card>
      <Row>
        {(items || []).filter(item => (filterKey === 0 || item.item_type === filterKey)).reverse().map(item => (
          <Col key={item.item_id} span={3} className={styles.heroitem}>
            <img src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`} alt='英雄图片'/>
            <p>{item.item_name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default connect(({ item }) => ({ item }))(Item);