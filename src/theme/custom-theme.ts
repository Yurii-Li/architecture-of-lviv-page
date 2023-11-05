import { Inter } from 'next/font/google';
import { ThemeConfig } from 'antd';

const inter = Inter({ subsets: ['latin'] });

const customTheme: ThemeConfig = {
  token: {
    fontFamily: inter.toString()
  }
};

export default customTheme;
