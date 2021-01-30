
import './style.css';
import FormBackground from './FormBackground.jpg'




function App() {
  return (
<div className="App">
  
<div style={{border:'solid 1px black',maxWidth:'vw'}}>


<h1 class="title red">Mahdi Hachem</h1>
<br/>

<img style={{width:600}} src={FormBackground} alt="tuniShop" />


 <br/>

 <img src="/image/tuniShop.jpg" alt='mm'/>

 </div>




 <video width="320" height="240" controls>

 <source src="video.mp4" type="video/mp4" />

</video>

</div>


  );
}

export default App
