import Teeth from '../assets/images/teeth.png';
import Doctor from '../assets/images/Doctor3.png';
import Navbar from "../components/Navbar";
import CardDoctor from '../components/CardDoctor';
import Footer from '../components/Footer';

const Beranda = (props) => {
  const buttonName = "Daftar"
  const buttonLink ="/regis"

    return (
      <div>
      <div className='bg-background'>
        <Navbar/>
        <section id="beranda" className="pt-6 lg:pt-20 px-4 lg:px-20 heroBG">
          <div className="container">
            <div className="w-full flex flex-wrap">
              <div className="w-full lg:w-1/2 self-start mt-20">
                <h1 className="text-start font-semibold text-darkblue lg:text-lg">-Konsultasikan gigimu bersama kami.</h1>
                <h1 className="text-start text-4xl lg:text-6xl font-bold text-black mt-1">Lindungi Kesehatan</h1>
                <div className='flex flex-wrap mt-1 lg:mt-4'>
                  <h1 className="text-start text-4xl lg:text-6xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue mr-2 lg:mr-4">Gigimu</h1>
                  <h1 className="text-start text-4xl lg:text-6xl font-bold text-black">Sekarang!</h1>
                </div>
                <p className="text-start mt-6 lg:mt-8 text-md">Gigi merupakan salah satu bagian yang sangat penting pada tubuh manusia, jika gigi Anda bermasalah maka Anda akan mengalami kesulitan dan hari-hari Anda terganggu. Dapatkan informasi kesehatan gigi akurat langsung dari Pakarnya!</p>
                <div className="flex justify-start">
                  <a href="/sistem-pakar" className="py-3 px-6 mt-6 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                    Mulai Analisis
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/2 mt-6 lg:mt-4">
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

        <section id="about" className="px-4 pt-36 lg:pt-20 lg:px-20 pb-16">
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
                  <a href="/sistem-pakar" className="py-3 px-6 mt-8 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                    Coba Sekarang!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cari-dokter" className="px-2 lg:pt-16 lg:px-20 dokterBG">
          <div className="container">
          <h1 className="text-center font-semibold text-darkblue lg:text-lg pt-2">-Layanan kami.</h1>
            <div className='lg:flex lg:justify-center'>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Temukan Dokter</h1>
              <h1 className="text-4xl lg:text-5xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue">Gigimu</h1>
            </div>
            <p className='mt-4'>Pilih dokter gigi yang kamu inginkan dan konsultasikan gigimu.</p>
            <div className="flex flex-wrap lg:px-24 pt-8 pb-4">
              <CardDoctor
                id= {"1"}
                profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                name= {"Drg. Alex"}
                address= {"Jl. Kenangan, Denpasar, Bali"}
              />
              <CardDoctor
                id= {"1"}
                profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                name= {"Drg. Alex"}
                address= {"Jl. Kenangan, Denpasar, Bali"}
              />
              <CardDoctor
                id= {"1"}
                profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                name= {"Drg. Alex"}
                address= {"Jl. Kenangan, Denpasar, Bali"}
              />
              <CardDoctor
                id= {"1"}
                profile= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU"}
                name= {"Drg. Alex"}
                address= {"Jl. Kenangan, Denpasar, Bali"}
              />
            </div>
            <a href="/cari-dokter" className="py-3 px-6 mt-4 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
              Selengkapnya
            </a>
          </div>
        </section>

        <section id="blog" className="px-2 pt-36 pb-16 lg:pt-20 lg:px-20">
        <div className='relative w-full blur-xxl'>
            <span className='absolute right-0'>
              <svg width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="127" cy="127" r="127" fill="url(#paint0_linear_172_1152)"/>
                  <defs>
                    <linearGradient id="paint0_linear_172_1152" x1="127" y1="0" x2="127" y2="254" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#85D9F8"/>
                      <stop offset="1" stop-color="#10B2F4"/>
                    </linearGradient>
                  </defs>
              </svg>
            </span>
          </div>
          <div className="container">
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-1/2 text-start'>
                <h1 className="font-semibold text-darkblue lg:text-lg">-Artikel.</h1>
                <h1 className="text-4xl lg:text-5xl font-bold text-black mr-2 lg:mr-4">Temukan Hal Menarik Seputar Gigi</h1>
                <div className="card card-compact w-full lg:w-96 mt-8 mx-auto bg-white shadow-sm mb-4 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="w-96 h-56 mask-square ring-white">
                    <img src="https://placeimg.com/400/300/arch" alt="{blog.imageAlt}" />
                  </div>
                  <div className="card-body text-center">
                    <p className='pt-2 text-base text-black'>2 Oktober 2022</p>
                    <h2 className="text-3xl font-semibold text-black">Cara Menjaga Kesehatan Gigi</h2>
                    <div className='mx-auto py-3'>
                    <svg width="118" height="2" viewBox="0 0 118 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="118" height="2" fill="url(#paint0_linear_414_494)"/>
                      <defs>
                        <linearGradient id="paint0_linear_414_494" x1="116" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#D3D3D3" stop-opacity="0"/>
                          <stop offset="0.501157" stop-color="#D3D3D3"/>
                          <stop offset="1" stop-color="#D3D3D3" stop-opacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    </div>
                    <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu cursus enim, bibendum sit faucibus praesent in cras.</p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 lg:px-24'>
                <div className="card card-compact w-full lg:w-96 mt-4 mx-auto bg-white shadow-sm mb-4 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="w-full h-56 mask-square ring-white">
                    <img src="https://placeimg.com/400/300/arch" alt="{blog.imageAlt}" />
                  </div>
                  <div className="card-body text-center">
                    <p className='pt-2 text-base text-black'>2 Oktober 2022</p>
                    <h2 className="text-3xl font-semibold text-black">Cara Menjaga Kesehatan Gigi</h2>
                    <div className='mx-auto py-3'>
                    <svg width="118" height="2" viewBox="0 0 118 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="118" height="2" fill="url(#paint0_linear_414_494)"/>
                      <defs>
                        <linearGradient id="paint0_linear_414_494" x1="116" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#D3D3D3" stop-opacity="0"/>
                          <stop offset="0.501157" stop-color="#D3D3D3"/>
                          <stop offset="1" stop-color="#D3D3D3" stop-opacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    </div>
                    <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu cursus enim, bibendum sit faucibus praesent in cras.</p>
                  </div>
                </div>
                <div className='flex justify-center mt-8 lg:mt-12 lg:justify-end'>
                  <a href="/blog" className=" py-3 px-6 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                    Lihat Artikel Lainnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontak" className="px-2 pb-24 lg:pt-16 lg:px-20">
          <div className='relative w-full blur-xxl'>
            <span className='absolute left-0'>
              <svg width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="127" cy="127" r="127" fill="url(#paint0_linear_172_1152)"/>
                  <defs>
                    <linearGradient id="paint0_linear_172_1152" x1="127" y1="0" x2="127" y2="254" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#85D9F8"/>
                      <stop offset="1" stop-color="#10B2F4"/>
                    </linearGradient>
                  </defs>
              </svg>
            </span>
          </div>
          <div className="container">
            <div className="card card-compact w-full lg:w-3/4 py-8 bg-white bg-opacity-50 shadow-md mb-6 mx-auto">
            <div className="card-body">
              <h1 className="text-center font-semibold text-darkblue lg:text-lg">-Hubungi kami.</h1>
              <h1 className="text-4xl lg:text-4xl font-bold text-black mr-2 lg:mr-4">Ada Pertanyaan, Keluhan, atau Saran?</h1>
              <p className='mt-4'>Pesan Anda akan dijawab melalui email. Yuk jangan ragu untuk diskusi dengan kami!</p>
              <div className="mt-4">
                <form>
                  <div class="relative">
                    <input type="text" class="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs pr-20" placeholder="Tuliskan pesanmu disini" required/>
                    <button type="submit" class="px-8 py-2.5 mt-4 lg:mt-0 text-lg rounded-full bg-gradient-to-b from-lightblue to-darkblue text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl">Kirim</button>
                  </div>
                </form>
              </div>
            </div>
            </div>
          </div>
        </section>

      </div>
        <Footer/>
      </div>
    );
  };
  
  export default Beranda;
  