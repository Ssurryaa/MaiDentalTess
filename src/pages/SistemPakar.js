import Teeth from '../assets/images/teeth2.png';

const SistemPakar= () => {
    return(
        <div>
            <div id="sistem-pakar" className="pt-6 lg:pt-20 px-4 lg:px-20 heroBG">
                <div className="container">
                    <div className="w-full flex flex-wrap">
                        <div className="w-full lg:w-1/2 self-start mt-20">
                            <h1 className="text-start font-semibold text-darkblue lg:text-lg">-Sistem Pakar Penyakit Gigi.</h1>
                            <h1 className="text-start text-4xl lg:text-6xl font-bold text-black mt-1">Diagnosa</h1>
                            <div className='flex flex-wrap mt-1 lg:mt-4'>
                                <h1 className="text-start text-4xl lg:text-6xl font-bold text-darkblue underline transition duration-300 ease-in-out hover:text-lightblue mr-2 lg:mr-4">Gigimu</h1>
                                <h1 className="text-start text-4xl lg:text-6xl font-bold text-black">Sekarang!</h1>
                            </div>
                            <p className="text-start mt-6 lg:mt-8 text-md">Sistem Pakar adalah sistem informasi yang berisi pengetahuan seorang pakar sehingga dapat digunakan untuk konsultasi. Website Mai Dental merupakan website berbasis Sistem Pakar yang menggunakan algoritma Certainty Factor.</p>
                            <div className="flex justify-start">
                                <a href="#diagnosa" className="py-3 px-6 mt-6 bg-gradient-to-b from-lightblue to-darkblue rounded-full text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                                    Mulai Analisis
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 mt-6 lg:mt-4">
                            <img src={Teeth} alt="Teeth" className='scale-90'/>
                        </div>
                    </div>
                </div>
            </div>
            
            <section id="diagnosa" className="pt-6 px-4 lg:pt-20 lg:px-20 bg-background">
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
                    <div className="w-full flex flex-wrap">
                        <div className="w-full lg:w-2/6 px-2 pt-6 lg:pt-0">
                            <div className="card w-full bg-white bg-opacity-50 lg:bg-opacity-30 backdrop-blur-xl border border-white shadow-md">
                                <div className="card-body">
                                    <h1 className="text-center text-2xl text-black font-semibold">
                                        Data Pasien
                                    </h1>
                                    <p className="text-center">
                                        Silahkan isi data diri Anda terlebih dahulu.
                                    </p>
                                    <form>
                                        <div className="form-control w-full max-w-xs mx-auto pb-4">
                                            <div>
                                                <label className="label pt-4 pb-1">
                                                    <span className="label-text">Nama</span>
                                                </label>
                                                <input
                                                type="text"
                                                placeholder="Masukkan nama lengkap"
                                                required
                                                className="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                                                />
                                            </div>
                                            <div>
                                                <label className="label pt-2 pb-1">
                                                    <span className="label-text">Umur</span>
                                                </label>
                                                <input
                                                type="text"
                                                placeholder="Masukkan umur"
                                                required
                                                className="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                                                />
                                            </div>
                                            <div>
                                                <label className="label pt-2 pb-1">
                                                    <span className="label-text">Alamat</span>
                                                </label>
                                                <input
                                                type="text"
                                                placeholder="Masukkan alamat"
                                                required
                                                className="input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-4/6 px-2 pt-6 lg:pt-0">
                            <div className="card card-compact w-full bg-white bg-opacity-50 lg:bg-opacity-30 backdrop-blur-xl border border-white shadow-md">
                                <div className="card-body mt-4">
                                    <h1 className="text-center text-2xl text-black font-semibold">
                                        Diagnosa Penyakit Gigi
                                    </h1>
                                    <p className="text-center">
                                        Silahkan isi data sesuai dengan yang Anda rasakan.
                                    </p>
                                    <form>
                                        <div className="overflow-x-auto mt-8">
                                            <table className="table table-normal w-full">
                                                <thead>
                                                <tr>
                                                    <td className='bg-lightblue text-white'>No.</td>
                                                    <td className='bg-lightblue text-white'>Pertanyaan</td>
                                                    <td className='bg-lightblue text-center text-white'>Jawaban</td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className='bg-white'>1</td>
                                                    <td className='bg-white'>Apakah kamu merasakan nyeri pada gigi?</td>
                                                    <td className='text-center bg-white'>
                                                        <select className="select select-info lg:w-3/5 mx-2 bg-white">
                                                            <option disabled selected>Pilih jawaban</option>
                                                            <option>Ya</option>
                                                            <option>Japanese</option>
                                                            <option>Italian</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-white'>1</td>
                                                    <td className='bg-white'>Apakah kamu merasakan nyeri pada gigi?</td>
                                                    <td className='text-center bg-white'>
                                                        <select className="select select-info lg:w-3/5 mx-2 bg-white">
                                                            <option disabled selected>Pilih jawaban</option>
                                                            <option>Ya</option>
                                                            <option>Japanese</option>
                                                            <option>Italian</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='bg-white'>1</td>
                                                    <td className='bg-white'>Apakah kamu merasakan nyeri pada gigi?</td>
                                                    <td className='text-center bg-white'>
                                                        <select className="select select-info lg:w-3/5 mx-2 bg-white">
                                                            <option disabled selected>Pilih jawaban</option>
                                                            <option>Ya</option>
                                                            <option>Japanese</option>
                                                            <option>Italian</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button href='#' className="py-3 px-12 mt-6 bg-gradient-to-b from-lightblue to-darkblue flex rounded-full justify-center text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl active:bg-darkblue">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default SistemPakar;