import '../App.css'
import Nav from './navbar'
function Home(){
    return(
    <>
        <div className='topBar'>
          <h1 className='titleText' id = 'title'> Prem Predictor </h1>
          <h3 className='titleText'> Welcome to your new favorite football game!</h3>
          <Nav></Nav>
        </div>
    </>    
    )
}
export default Home