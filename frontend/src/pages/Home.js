import Header from '../Containers/Header';
import Action from '../Containers/Action';
import Form from '../Containers/Form';
import Marketing from '../Containers/Marketing';
import Time from '../Containers/Time';
import Services from '../Containers/Services';
import Clients from '../Containers/Clients';
import Footer from '../Containers/Footer';

function Home() {
  return (
      <main className='home'>
        <Header/>
        <Action/>
        <Form/>
        <Marketing/>
        <Time/>
        <Services/>
        <Clients/>
        <Footer/>
      </main>
  );
}

export default Home;
