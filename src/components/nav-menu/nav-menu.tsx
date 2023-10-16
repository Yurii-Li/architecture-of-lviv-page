// import React from 'react';
// import Link from 'next/link';
// import { Layout, Menu } from 'antd';
//
// import { CategoriesEnum } from '@/enums/categories.enum';
//
// const { Sider } = Layout;
// export default function NavMenu() {
//   return (
//     <Sider breakpoint="lg" collapsedWidth="0" theme="light">
//       <div className="demo-logo-vertical" />
//       <Menu
//         items={[
//           {
//             key: '1',
//             label: (
//               <Link
//                 href={{
//                   pathname: `/architecture/${CategoriesEnum.TEMPLES}`,
//                   query: { page: 1 }
//                 }}
//               >
//                 Храми
//               </Link>
//             )
//           },
//           {
//             key: '2',
//             label: (
//               <Link
//                 href={{
//                   pathname: `/architecture/${CategoriesEnum.DEFENSE_STRUCTURES}`,
//                   query: { page: 1 }
//                 }}
//               >
//                 Оборонні споруди
//               </Link>
//             )
//           },
//           {
//             key: '3',
//             label: (
//               <Link
//                 href={{
//                   pathname: `/architecture/${CategoriesEnum.MUSEUMS}`,
//                   query: { page: 1 }
//                 }}
//               >
//                 Музеї
//               </Link>
//             )
//           }
//         ]}
//       />
//     </Sider>
//   );
// }

import Link from 'next/link';
import { Menu } from 'antd';

import { CategoriesEnum } from '@/enums/categories.enum';

export default function NavMenu() {
  return (
    <Menu
      mode="horizontal"
      items={[
        {
          key: '1',
          label: (
            <Link
              href={{
                pathname: `/architecture/${CategoriesEnum.TEMPLES}`,
                query: { page: 1 }
              }}
            >
              Храми
            </Link>
          )
        },
        {
          key: '2',
          label: (
            <Link
              href={{
                pathname: `/architecture/${CategoriesEnum.DEFENSE_STRUCTURES}`,
                query: { page: 1 }
              }}
            >
              Оборонні споруди
            </Link>
          )
        },
        {
          key: '3',
          label: (
            <Link
              href={{
                pathname: `/architecture/${CategoriesEnum.MUSEUMS}`,
                query: { page: 1 }
              }}
            >
              Музеї
            </Link>
          )
        }
      ]}
    />
  );
}
