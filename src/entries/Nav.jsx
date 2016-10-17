import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';
import './less/nav0.less';
const Item = Menu.Item;

class Header extends React.Component {
  render() {
    const { logo, menu1, menu2, menu3, menu4 } = this.props.dataSource.block1;
    const props = { ...this.props };
    delete props.dataSource;
    delete props.name;

    const navArr = [menu1,menu2,menu3,menu4];
    const navToRender = navArr.map((item, i) => {
      const _item = (<Item key={item.key} >
        <a href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a>
      </Item>);
      return _item;
    });

    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
      >
        <img height="33" src={logo} />
      </TweenOne>
      <TweenOne className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu mode="horizontal" defaultSelectedKeys={["a"]}
          style={{ lineHeight: `${parseFloat(this.props.style.height) - 2}px` }}>
          {navToRender}
        </Menu>
      </TweenOne>
    </TweenOne>);
  }
}

Header.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  dataSource: PropTypes.object,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
