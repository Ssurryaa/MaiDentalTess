import CardBlogLarge from '../components/CardBlogLarge';
import CardBlogSmall from '../components/CardBlogSmall';
import Footer from '../components/Footer';
  
const DetailBlog = () => {
  return (
    <div>
        <div className="bg-background">
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
            <section id="blog" className="pt-24 lg:px-20">
                <div className="container">
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full lg:w-1/2 ">
                            <h1 className="lg:text-start text-3xl font-bold text-black">
                            Temukan Hal Menarik Seputar Gigi
                            </h1>
                        </div>
                        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex justify-center lg:justify-end">
                            <form>   
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>  
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" class="block p-4 pl-10 pr-20 input input-bordered rounded-full input-info bg-white bg-opacity-50 w-full max-w-xs" placeholder="Cari hal menarik" required/>
                                <button type="submit" class="absolute right-2 lg:right-2.5 bottom-1.5 px-4 py-2 text-sm rounded-full bg-gradient-to-b from-lightblue to-darkblue text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl">Cari</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className='text-black'>
                        <div className="navbar-center lg:flex">
                            <ul className="menu menu-horizontal p-0 z-10">
                                <li>
                                    <a className='active:bg-darkblue' href='#'>Terkini</a>
                                </li>
                                <li>
                                    <a className='active:bg-darkblue' href='#'>Kesehatan</a>
                                </li>
                                <li>
                                    <a className='active:bg-darkblue' href='#'>Tips & Trik</a>
                                </li>
                                <li tabindex={0}>
                                    <a className='active:bg-darkblue'>
                                        Lainnya
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                        </svg>
                                    </a>
                                    <ul className="p-2 bg-white text-black z-10">
                                        <li>
                                            <a className='active:bg-darkblue' href='#'>Gigi</a>
                                        </li>
                                        <li>
                                            <a className='active:bg-darkblue' href='#'>Penyakit</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div>
                    <div className="flex flex-wrap mt-4 pb-8">
                        <div className="w-full lg:w-3/4 px-4">
                            <h1 className="text-start text-2xl mt-4 mb-3 font-semibold text-black">
                                Artikel Terbaru
                            </h1>
                            <div className='mx-auto'>
                                <CardBlogLarge
                                    slug={"/detail-blog"} 
                                    image={"https://images.unsplash.com/photo-1611166819595-ac34987dfa57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=515&q=80"} 
                                    title={"Cara mudah menjaga kesehatan gigi dan mulut"} 
                                    author={"Alexandra"} 
                                    artikel={"Dalam situasi saat ini, menjaga kebersihan pribadi sangatlah penting. Pastinya sekarang, kamu sudah terbiasa mengenakan masker dan mencuci tangan dengan seksama. Tapi jangan lupakan pentingnya menjaga kebersihan gigi"}
                                />
                            </div>
                        </div>
                        <div className="lg:flex lg:w-1/4 hidden">
                            <div className='mx-auto'>
                                <h1 className="text-start text-2xl mt-4 mb-3 font-semibold text-black">
                                    Artikel Terpopuler
                                </h1>
                                <CardBlogSmall
                                    slug={"/detail-blog"} 
                                    image={"https://images.unsplash.com/photo-1611166819595-ac34987dfa57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=515&q=80"} 
                                    title={"Cara mudah menjaga kesehatan gigi dan mulut"} 
                                    author={"Alexandra"}
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </div>
    </div>
  );
};

export default DetailBlog;
