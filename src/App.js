import Nav from './components/nav';
import Unit from './components/unit';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div class="page_wrapper">
        <navigation>
          <Nav />
        </navigation>
        <div class="page_container_wrapper container">
          <Unit />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
