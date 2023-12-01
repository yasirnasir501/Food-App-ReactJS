import React from 'react';
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1';
import '../../styles/HomeStyle.css'
import Section2 from './Section2';

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section 1 Hero Banner  */}
        <Section1/>
        {/* Section # 2 */}
        <Section2 />
      </Layout>
    </>
  )
}

export default Home