import { Layout, Menu } from 'antd';
import styles from './index.css';
import Link from 'umi/link';

const { Header, Content, Footer } = Layout;
const menuData = [
  { route: 'hero', name: '英雄' },
  { route: 'item', name: '局内道具' },
  { route: 'summoner', name: '召唤师技能' }
]
function BasicLayout(props) {
  // console.log(props);
  const { location } = props;
  const { pathname } = location;
  return (
    <Layout>
      <Header>
        <div className={styles.logo} style={{ color: 'white' }}>王者荣耀资料库</div>
        <Menu 
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={[pathname]}
          style={{lineHeight: '64px'}}>
          {(menuData || []).map(menu => (
            <Menu.Item key={`/${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          { props.children }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Umi 入门教程 Created by chentao(learn from xiaohuoni)</Footer>
    </Layout>
  );
}

export default BasicLayout;
