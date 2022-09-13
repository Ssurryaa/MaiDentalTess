import Button from '../components/Button';
import CardDoctor from '../components/CardDoctor';

const Dokter = () => {
    return(
        <section id="cari-dokter" className="px-2 pt-12 lg:pt-16 lg:px-20 dokterBG">
          <div className="container">
          <h1 className="text-center font-semibold text-darkblue lg:text-lg pt-2">-Layanan kami.</h1>
            <div className='lg:flex lg:justify-center'>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Temukan Dokter</h1>
              <h1 className="text-4xl lg:text-5xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue">Gigimu</h1>
            </div>
            <p className='mt-4'>Pilih dokter gigi yang kamu inginkan dan konsultasikan gigimu.</p>
            <div className="flex flex-wrap lg:px-24 pt-8 pb-4">
            <div className="carousel rounded-box">
              <div className="carousel-item mx-2 lg:mx-3">
                <CardDoctor
                  id= {"1"}
                  profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                  name= {"Drg. Alex"}
                  address= {"Jl. Kenangan, Denpasar, Bali"}
                />
              </div> 
              <div className="carousel-item mx-2 lg:mx-3">
                <CardDoctor
                  id= {"1"}
                  profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                  name= {"Drg. Alex"}
                  address= {"Jl. Kenangan, Denpasar, Bali"}
                />
              </div> 
              <div className="carousel-item mx-2 lg:mx-3">
                <CardDoctor
                  id= {"1"}
                  profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                  name= {"Drg. Alex"}
                  address= {"Jl. Kenangan, Denpasar, Bali"}
                />
              </div> 
              <div className="carousel-item mx-2 lg:mx-3">
                <CardDoctor
                  id= {"1"}
                  profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                  name= {"Drg. Alex"}
                  address= {"Jl. Kenangan, Denpasar, Bali"}
                />
              </div> 
            </div>
            </div>
              <Button button={"Selengkapnya"} link={"/cari-dokter"}/>
          </div>
        </section>
    );
};

export default Dokter;
