import './App.css'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  const greeting = "Hello World, I'm learning React";

  return (
    <>
      <Header className="sticky top-0" />
      <NavBar />
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
