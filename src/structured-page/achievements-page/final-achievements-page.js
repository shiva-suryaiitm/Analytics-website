
import pic from '../../images/igem image.jpg'
import img from '../../images/analytics club.jpg'
import './achievements.css'

// Carousel component here


const Carousel=() =>{
  return (
    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval='5000' data-bs-pause='hover'>
      <div class="carousel-inner">

        <div class="carousel-item active">
          <img class="d-block w-100 h-10" src={img} alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5 className='img-1-c'>First slide label</h5>
            <p className='img-1-c'>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100 h-10" src={pic} alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5>second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100 h-10" src={pic} alt="Third slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5 className='img-3-c'>third slide label</h5>
            <p className='img-3-c'>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

      </div>

      <button class="carousel-control-prev bt-1" href="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next bt-2" href="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}



// achievements section starts here


const Achievements = () => {
  return (

    <div className="container border c1">

        <br></br>
        <div className='row'>

          <div className='col-lg-auto col1'>
          <img src={img} className="img-fluid border border-end img-1 border-5" width="60%" alt=""/>
          </div>

          <div className='col col2'>
              <p className="fs-6 content-ach">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
              </p> 
              <a href="https://google.com" className="link-info fs-6 content-ach"> Hello Click here to go to the link ; place some link here </a>
          </div>

        </div>
    </div>

  )
}

// Inter IIT starts here


const Interiit = () => {
  return (
    <div className='outer-cover'>
        <div className='row rows'>

            <div className='col-lg col-inter-iit-1 r1'>
              <h3>para1</h3>
              <p className="fs-6 content-ii">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
              </p> 
              <a href="https://google.com" className="link-info fs-6 content-ii"> Hello Click here to go to the link ; place some link here </a>
            </div>

            <div className='col-lg col-inter-iit-2 r1'>
              <h3>para2</h3>
              <p className="fs-6 content-ii">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
              </p> 
              <a href="https://google.com" className="link-info fs-6 content-ii"> Hello Click here to go to the link ; place some link here </a>
            </div>

            <div className='col-lg col-inter-iit-3 r1'>
              <h3>para3</h3>
              <p className="fs-6 content-ii">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
              </p> 
              <a href="https://google.com" className="link-info fs-6 content-ii"> Hello Click here to go to the link ; place some link here </a>
            </div>

        </div>
    </div>
  )
}

// Final Implementation here

const AchievementsAndInteriit = () => {
  return (
    <div>
        <div className='box1'>
          <br></br>
          <h1><i>Achievements</i></h1>
          <div className="b-1">
              <Achievements />
              <Achievements />
          </div>
        </div>

        <div className='box2'>
              <br></br>
              <h1><i>Inter-IIT</i></h1>
              <div className="b-2">
                  <div className='innercover-1'>
                      <Carousel />
                  </div>
                  <Interiit />
              </div>
        </div>

    </div>
  )
}


export default AchievementsAndInteriit 
