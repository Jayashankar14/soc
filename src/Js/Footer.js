/**import React from 'react'

function Footer() {
  return (
    <div>Footer</div>
  )
}

export default Footer**/
import React from 'react';
import { Pagination } from 'antd';
const Pages = () => <Pagination defaultCurrent={1} total={50} />;
export default Pages;