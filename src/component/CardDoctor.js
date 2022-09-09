import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const doctors = [
  {
    id: '1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU',
    name: 'Drg. Alex',
    address: 'Jl. Kenangan, Denpasar, Bali',
  },
  {
    id: '1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU',
    name: 'Drg. Alex',
    address: 'Jl. Kenangan, Denpasar, Bali',
  },
  {
    id: '1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU',
    name: 'Drg. Alex',
    address: 'Jl. Kenangan, Denpasar, Bali',
  },
  {
    id: '1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU',
    name: 'Drg. Alex',
    address: 'Jl. Kenangan, Denpasar, Bali',
  },
  {
    id: '1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU',
    name: 'Drg. Alex',
    address: 'Jl. Kenangan, Denpasar, Bali',
  },
  {
    id: '1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU',
    name: 'Drg. Alex',
    address: 'Jl. Kenangan, Denpasar, Bali',
  },
  {
    id: '1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU',
    name: 'Drg. Alex',
    address: 'Jl. Kenangan, Denpasar, Bali',
  },
  {
    id: '1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxqeT3EgjGLrIn1ZUepCKpPui0ea5I6RcxQ&usqp=CAU',
    name: 'Drg. Alex',
    address: 'Jl. Kenangan, Denpasar, Bali',
  },
]
const CardDoctor = () => {
    return (
      <div className='flex flex-wrap'>
        {doctors.map((doctor)=>(
        <div className="card card-compact w-44 lg:w-56 bg-white shadow-md mb-6 mx-auto hover:opacity-80">
          <div className="avatar justify-center py-4 pt-8">
            <span className='absolute left-0'>
              <svg width="52" height="29" viewBox="0 0 52 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.0093 0H2C0.895431 0 0 0.89543 0 2V27C0 28.1046 0.89543 29 2 29H49.0093C50.5548 29 51.5163 27.3218 50.7347 25.9886L44.5929 15.5114C44.2268 14.8868 44.2268 14.1131 44.5929 13.4886L50.7347 3.01144C51.5163 1.67815 50.5548 0 49.0093 0Z" fill="url(#paint0_linear_175_1601)"/>
                <defs>
                  <linearGradient id="paint0_linear_175_1601" x1="26.25" y1="0" x2="26.25" y2="29" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#85D9F8"/>
                    <stop offset="1" stop-color="#10B2F4"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className='absolute left-1 pt-1'>
              <p className="font-semibold text-white text-sm"><FontAwesomeIcon icon={solid('star')} />5.0</p>
            </span>
            <div className="w-24 lg:w-28 rounded-full ring ring-white shadow-lg shadow-sky-400/30">
                <img src={doctor.image} alt="doctor-image"/>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-black font-semibold px-2">
              {doctor.name}
            </h1>
            <p className="text-sm pt-2 px-2">
              {doctor.address}
            </p>
            <div class="grid grid-cols-2 divide-x-2 divide-white pt-4 lg:pt-8">        
              <label htmlFor="jadwal" className="flex flex-row justify-center py-2 bg-sky-200 hover:bg-sky-100 text-sm text-slate-700">
                <p>
                <FontAwesomeIcon className='mr-1' icon={regular('calendar')} />Jadwal
                </p>
              </label>
              <label className="flex flex-row justify-center py-2 bg-sky-200 hover:bg-sky-100 text-sm text-slate-700">
                <p>
                <FontAwesomeIcon className='mr-1' icon={regular('envelope')} />Chat
                </p>
              </label>
            </div>
          </div>
        </div>
        ))}

        {/* Modal Jadwal */}
        <input type="checkbox" id="jadwal" className="modal-toggle" />
        <label htmlFor="jadwal" className="modal cursor-pointer">
          <label className="modal-box relative bg-white" for="">
            <label htmlFor="jadwal" className="border border-slate-300 hover:shadow-md px-2 py-1 rounded-full absolute right-3 top-3">✕</label>
            <h3 className="text-xl font-bold text-black pb-6">Jadwal Dokter</h3>
            <div className="overflow-x-auto px-">
              <table className="table table-normal w-full text-black text-center">
                <thead>
                  <tr>
                    <th className='bg-sky-100'>Hari</th>
                    <th className='bg-sky-100'>Jam Kerja</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className='bg-white'>Senin</th>
                    <td className='bg-white'>12:00-16:00 WITA</td>
                  </tr>
                  <tr>
                    <th className='bg-white'>Rabu</th>
                    <td className='bg-white'>12:00-16:00 WITA</td>
                  </tr>
                  <tr>
                    <th className='bg-white'>Jumat</th>
                    <td className='bg-white'>12:00-16:00 WITA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </label>
        </label>
      </div>
    );
  };
  
  export default CardDoctor;
  