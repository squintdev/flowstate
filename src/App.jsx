import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="bg-retro-screen h-screen font-lcd font-bold text-primary-dark py-4 w-full">
      <Header />
      <Tasks />
      <Footer />
    </div>
  )
}

export default App
