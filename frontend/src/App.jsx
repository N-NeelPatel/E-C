import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from "react-bootstrap"

function App() {

  return (
    <>
      <Header />
        <main>
          <Container className="py-3">
            <h1>Welcome</h1>
          </Container>
        </main>
      <Footer />
    </>
  )
}

export default App
