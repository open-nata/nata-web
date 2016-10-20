import React from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';
import './less/common.less';
import Nav0 from './Nav';
import Banner0 from './Banner0';
import Content3 from './Content3';
import Content5 from './Content5';
import Footer1 from './Footer';

const props = [
  // nav_0_0 区域
  {
    style: {
      height: '64px',
    },
    dataSource: {
      block1: {
        logo:'http://7pun7p.com1.z0.glb.clouddn.com/nata/light.png',
        menu1:{
          name: 'NATA',
          key: 'nata'
        },
        menu2:{
          name: '设计',
          href: 'https://github.com/open-nata/nata-x/blob/master/docs/nata.md',
          key: 'design'
        },
        menu3:{
          name:'GITHUB',
          href: 'https://github.com/open-nata/nata',
          key: 'github'
        },
        menu4:{
          name: '关于',
          key: 'about'
        },
      },
    },
  },
  // banner_0_1 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top:'25%',
        // logo:'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        title:'NATA',
        content:'一个高效的安卓测试自动化解决方案',
        button:'Learn More',
        bgImg:'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
      },
    },
  },
  // content_3_2 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        video:'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
        title:'NATA团队提供专业的服务',
        content:'自动化测试,高效测试',
      },
    },
  },
  // content_5_3 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'NATA提供专业的服务',
        content:'基于南京大学重点实验室强大的测试资源',
      },
      img: {
        img:'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
      },
      block1: {
        img:'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title:'技术',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
      },
      block2: {
        img:'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title:'融合',
        content:'解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。\n解放业务及技术生产力，推动金融服务底层创新。',
      },
      block3: {
        img:'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title:'开发',
        content:'符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
      },
    },
  },
  // footer_1_4 区域
  {
    style: {
      height: '400px',
    },
    dataSource: {
      logo: {
        logo:'http://7pun7p.com1.z0.glb.clouddn.com/nata/light.png',
        content:'Nju Android Test Automator',
      },
      block1: {
        title:'产品',
        content:'产品更新记录\nAPI文档\n快速入门\n参考指南',
        contentLink:'#\n#\n#\n#',
      },
      block2: {
        title:'关于',
        content:'FAQ\n联系我们',
        contentLink:'#\n#',
      },
      block3: {
        title:'资源',
        content:'Apkparser\nNata-dfs\nNata-device\nNata-monkey',
        contentLink:'https://github.com/open-nata/apkparser\nhttps://github.com/open-nata/nata-dfs\nhttps://github.com/open-nata/nata-device\nhttps://github.com/open-nata/nata-monkey',
      },
      block4: {
        title:'关注',
        content:'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\nhttps://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\nhttps://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg\nhttps://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg',
        contentLink:'#\nhttps://github.com/open-nata/nata\n#\n#',
      },
      copyright: {
        content:'Copyright © 2016 The Project by <a href=\'#\'>NATA</a>. All Rights Reserved',
      },
    },
  },
];

export default class Home extends React.Component {
  componentDidMount() {
  }

  render() {
    const children = [
      <Nav0 key="nav_0_0" name="nav_0_0" {...props[0]} />,
      <Banner0 key="banner_0_1" name="banner_0_1" {...props[1]} />,
      <Content3 key="content_3_2" name="content_3_2" {...props[2]} />,
      <Content5 key="content_5_3" name="content_5_3" {...props[3]} />,
      <Footer1 key="footer_1_4" name="footer_1_4" {...props[4]} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
