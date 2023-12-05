import React from 'react';
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1';
import '../../styles/HomeStyle.css'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

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
        {/* Section # 4 */}
        <Section4 />
        {/* Section # 5 */}
        <Section5 />
      </Layout>
    </>
  )
}

export default Home