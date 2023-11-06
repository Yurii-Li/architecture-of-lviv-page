import { Inter } from 'next/font/google';
import { ThemeConfig } from 'antd';

const inter = Inter({ subsets: ['latin'] });

const customTheme: ThemeConfig = {
  token: {
    fontFamily: inter.toString()
  },
  components: {
    Menu: {
      itemBg: 'transparent',
      itemHoverColor: '#1677FF'
    }
  }
};

export default customTheme;
