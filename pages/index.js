import Spline from '@splinetool/react-spline';
import Layout from '../components/layout';
import About from '../components/about';
import Skills from '../components/skill';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Layout />
      <div id="spline">
        <Spline
          scene="https://prod.spline.design/mnFPl7kj1S3MoEkk/scene.splinecode"
        />
      </div>
      <About />
      <Skills />
    </div>
  );
}
