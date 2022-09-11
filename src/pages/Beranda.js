import Teeth from '../assets/images/teeth.png';
import Doctor from '../assets/images/Doctor3.png';
import Navbar from "../components/Navbar";
import CardDoctor from '../components/CardDoctor';
import CardBlogSmall from '../components/CardBlogSmall';
import Footer from '../components/Footer';

const Beranda = (props) => {
  const buttonName = "Daftar"
  const buttonLink ="/regis"

    return (
      <div>
      <div className='bg-background'>
        <Navbar/>
        <section id="beranda" className="pt-6 lg:pt-20 px-4 lg:px-20 heroBG bg-background">
          <div className="container">
            <div className="w-full flex flex-wrap">
              <div className="w-full lg:w-1/2 self-start mt-20">
                <h1 className="text-start font-semibold text-darkblue lg:text-lg">-Konsultasikan gigimu bersama kami.</h1>
                <h1 className="text-start text-4xl lg:text-6xl font-bold text-black mt-1">Lindungi Kesehatan</h1>
                <div className='flex flex-wrap mt-1 lg:mt-4'>
                  <h1 className="text-start text-4xl lg:text-6xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue mr-2 lg:mr-4">Gigimu</h1>
                  <h1 className="text-start text-4xl lg:text-6xl font-bold text-black">Sekarang!</h1>
                </div>
                <p className="text-start mt-6 lg:mt-8 text-md">Gigi merupakan salah satu bagian yang sangat penting pada tubuh manusia, jika gigi Anda bermasalah (sakit gigi) maka Anda akan mengalami kesulitan berbicara, makan dan menyebabkan hari-hari Anda terganggu. Dapatkan informasi kesehatan gigi akurat langsung dari Pakarnya!</p>
                <div className="flex justify-start">
                  <a href="#" className="py-3 px-6 mt-6 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                    Mulai Analisis
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/2 mt-2 lg:mt-0">
                <img src={Teeth} alt="Teeth" className='scale-90'/>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="absolute -bottom-20 card card-compact w-full lg:w-4/5 z-10 bg-white bg-opacity-40 backdrop-blur-md shadow-md">
                <div className="py-5 grid grid-cols-4 divide-x-2 divide-slate-100">
                  <div>
                    <h1 className='text-xl lg:text-4xl text-darkblue font-bold py-2'>2.000</h1>
                    <h1 className='text-sm lg:text-lg text-black font-semibold'>Pengguna</h1>
                    <p className='text-sm'>sistem pakar</p>
                  </div>
                  <div>
                    <h1 className='text-xl lg:text-4xl text-darkblue font-bold py-2'>99.8%</h1>
                    <h1 className='text-sm lg:text-lg text-black font-semibold'>Ulasan Positif</h1>
                    <p className='text-sm'>dari pengguna</p>
                  </div>
                  <div>
                    <h1 className='text-xl lg:text-4xl text-darkblue font-bold py-2'>15</h1>
                    <h1 className='text-sm lg:text-lg text-black font-semibold'>Diagnosa Penyakit</h1>
                    <p className='text-sm'>penyakit gigi</p>
                  </div>
                  <div>
                    <h1 className='text-xl lg:text-4xl text-darkblue font-bold py-2'>125</h1>
                    <h1 className='text-sm lg:text-lg text-black font-semibold'>Dokter Gigi</h1>
                    <p className='text-sm'>seluruh Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 pt-40 lg:pt-20 lg:px-20 bg-background">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="hidden lg:w-1/2 lg:flex">
                <div className="relative">
                  <img src={Doctor} alt="Teeth" className='scale-90'/>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:mt-36">
                <h1 className="text-start font-semibold text-darkblue lg:text-lg">-Tentang kami.</h1>
                <div className='flex flex-wrap'>
                  <h1 className="text-start text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Kenapa</h1>
                  <h1 className="text-start text-4xl lg:text-5xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue">Mai Dental</h1>
                  <h1 className="text-start text-4xl lg:text-5xl font-bold text-black">?</h1>
                </div>
                <p className="text-start mt-8 pr-4">Mai Dental merupakan website berbasis Sistem Pakar yang bertujuan untuk meningkatkan kesadaran masyarakat sekaligus memfasilitasi masyarakat agar dapat melakukan pemeriksaan gigi dan mulut secara rutin sesuai dengan prosedur yang ada</p>
                <div className="flex justify-start">
                  <a href="#" className="py-3 px-6 mt-8 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                    Coba Sekarang!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cari-dokter" className="px-2 pt-24 lg:pt-12 lg:px-20 dokterBG">
          <div className="container">
          <h1 className="text-center font-semibold text-darkblue lg:text-lg">-Layanan kami.</h1>
            <div className='lg:flex lg:justify-center'>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Temukan Dokter</h1>
              <h1 className="text-4xl lg:text-5xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue">Gigimu</h1>
            </div>
            <p className='mt-4'>Pilih dokter gigi yang kamu inginkan dan konsultasikan gigimu.</p>
            <div className="lg:px-24 pt-8 pb-8">
                <CardDoctor/>
            </div>
            <a href="#" className="py-3 px-6 mt-8 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
              Selengkapnya
            </a>
          </div>
        </section>

        <section id="artikel" className="px-2 pt-24 pb-16 lg:pt-12 lg:px-20">
          <div className="container">
          <h1 className="text-center font-semibold text-darkblue lg:text-lg">-Artikel.</h1>
            <div className='lg:flex lg:justify-center'>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Temukan Hal Menarik Seputar</h1>
              <h1 className="text-4xl lg:text-5xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue">Gigi</h1>
            </div>
            <p className='mt-4'>Kesehatan gigi dan mulut memiliki dampak yang besar untuk kesehatan tubuh secara keseluruhan.</p>
            <div className="lg:px-24 pt-8 pb-8">
              <div className="carousel w-full rounded-3xl">
                <div id="slide1" className="carousel-item relative w-full">
                  <img src="https://placeimg.com/800/200/arch" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                  <img src="https://placeimg.com/800/200/arch" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                  <img src="https://placeimg.com/800/200/arch" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                  <img src="https://placeimg.com/800/200/arch" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="py-3 px-6 mt-8 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
              Lihat Artikel Lainnya
            </a>
          </div>
        </section>

        <section id="kontak" className="px-2 py-24 lg:pt-12 lg:px-20">
          <div className="container">
          <h1 className="text-center font-semibold text-darkblue lg:text-lg">-Hubungi kami.</h1>
            <h1 className="text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Ada Pertanyaan, Keluhan, atau Saran?</h1>
            <p className='mt-4'>Pesan Anda akan dijawab melalui email. Yuk jangan ragu untuk diskusi dengan kami!</p>
            <div className="flex justify-center mt-12">
              <form>
                <div class="relative">
                  <input type="text" class="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs pr-20" placeholder="Tuliskan pesanmu disini" required/>
                  <button type="submit" class="absolute right-2 lg:right-2.5 bottom-1.5 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl">Kirim</button>
                </div>
              </form>
            </div>
          </div>
        </section>

      </div>
        <Footer/>
      </div>
    );
  };
  
  export default Beranda;
  