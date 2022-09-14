import Button from '../components/Button';
import BannerDoctor from '../components/BannerDoctor';

const Dokter = () => {
    return(
        <section id="cari-dokter" className="px-2 pt-12 lg:pt-16 lg:px-20 dokterBG">
          <div className="container">
          <h1 data-aos="fade-up" className="text-center font-semibold text-darkblue lg:text-lg pt-2 aos-init aos-animate">-Layanan kami.</h1>
            <div data-aos="fade-up" className='lg:flex lg:justify-center aos-init aos-animate'>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Temukan Dokter</h1>
              <h1 className="text-4xl lg:text-5xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue">Gigimu</h1>
            </div>
            <p data-aos="fade-up" className='mt-4 aos-init aos-animate'>Pilih dokter gigi yang kamu inginkan dan konsultasikan gigimu.</p>
            <div data-aos="fade-up" className="flex flex-wrap lg:px-24 pt-8 pb-4 aos-init aos-animate">
            <div className="carousel rounded-box py-3">
              <div className="carousel-item mx-2 lg:mx-3">
                <BannerDoctor
                  id= {"1"}
                  profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                  name= {"Drg. Alex"}
                  address= {"Jl. Kenangan, Denpasar, Bali"}
                />
              </div> 
              <div className="carousel-item mx-2 lg:mx-3">
                <BannerDoctor
                  id= {"1"}
                  profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                  name= {"Drg. Alex"}
                  address= {"Jl. Kenangan, Denpasar, Bali"}
                />
              </div> 
              <div className="carousel-item mx-2 lg:mx-3">
                <BannerDoctor
                  id= {"1"}
                  profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                  name= {"Drg. Alex"}
                  address= {"Jl. Kenangan, Denpasar, Bali"}
                />
              </div> 
              <div className="carousel-item mx-2 lg:mx-3">
                <BannerDoctor
                  id= {"1"}
                  profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                  name= {"Drg. Alex"}
                  address= {"Jl. Kenangan, Denpasar, Bali"}
                />
              </div> 
            </div>
            </div>
            <div data-aos="fade-up" className='aos-init aos-animate'>
              <Button button={"Lihat Dokter Lainnya"} link={"/cari-dokter"}/>
            </div>
          </div>
        </section>
    );
};

export default Dokter;
