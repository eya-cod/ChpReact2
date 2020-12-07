import logo from './logo.svg';
import './App.css';
import './style.css';
import imageInSrc from "./imageInSrc.jpg"

function App() {
  return (
    <div className="App">
      <div>
  <div style={{border: 'solid 3px gray', maxWidth: '100vw'}}>
    <h1 className="title red">Eya Sahli</h1>
    <br />
    <img src={imageInSrc}  />
    <br />
    <img src="/imageInPublic.jpg" className="image" />
  </div>
  <video width={900} height={500} controls>
    <source src="myVideo.mp4" type="video/mp4"  />
  </video>
</div>
    </div>
  );
}

export default App;
