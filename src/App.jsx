import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  return (
    <div className="bg-retro-screen h-screen font-lcd font-bold text-primary-dark p-4">
      <Header />
      <Tasks />
    </div>
  )
}

export default App
