
import pic from '../../images/igem image.jpg'
import img from '../../images/analytics club.jpg'
import './box2.css'

const Carousel = () => {
  return (
      <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval='5000' data-bs-pause='hover'>
      <div class="carousel-inner">

        <div class="carousel-item active">
          <img class="d-block w-100 h-10" src={img} alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
                <h5 className='img-1-c'>First slide label</h5>
                <p className='img-1-c'>Some representative placeholder content for the first slide.</p>
            </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100 h-10" src={pic} alt="Second slide"/>
            <div class="carousel-caption d-none d-md-block">
                <h5>second slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100 h-10" src={pic} alt="Third slide"/>
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
  )
}

export default Carousel            
