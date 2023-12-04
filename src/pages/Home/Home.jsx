import React from 'react';
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1';
import '../../styles/HomeStyle.css'
import Section2 from './Section2';
import Section3 from './Section3';

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section 1 Hero Banner  */}
        <Section1/>
        {/* Section # 2 */}
        <Section2 />
        {/* Section # 3 */}
        <Section3 />
      </Layout>
    </>
  )
}

export default Home