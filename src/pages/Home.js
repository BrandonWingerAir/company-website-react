import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Content from '../components/Content/Content';
import { contentOne, contentTwo, contentThree } from '../data/content';

const Home = () => {
  return (
      <>
            <Hero/>
            <Features/>
            <Content {...contentOne}/>
            <Content {...contentTwo}/>
            <Content {...contentThree}/>
      </>
  )
}

export default Home