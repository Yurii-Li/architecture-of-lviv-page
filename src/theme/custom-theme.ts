import { Inter } from 'next/font/google';
import { ThemeConfig } from 'antd';

const inter = Inter({ subsets: ['latin'] });

const customTheme: ThemeConfig = {
  token: {
    fontFamily: inter.toString()
  },
  components: {
    Menu: {
      itemHoverColor: '#1677FF'
    }
  }
};

export default customTheme;
