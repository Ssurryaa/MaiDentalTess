import Navbar from './Navbar';
import CardBlogLarge from './CardBlogLarge';
import CardBlogSmall from './CardBlogSmall';
  
const DetailBlog = () => {
  return (
    <div>
        <div className="bg-sky-50">
            <div className='blur-xxl'>
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
            <Navbar/>
            <section id="blog" className="pt-24 lg:px-20">
                <div className="container">
                    <div className="flex flex-wrap pb-8">
                        <div className="w-full lg:w-1/2">
                            <h1 className="lg:text-start text-3xl font-bold text-black">
                                Temukan Hal Menarik Seputar Gigi
                            </h1>
                        </div>
                        <div className="w-full flex lg:w-1/2 lg:justify-end justify-center">
                            <div className='mt-4 lg:mt-0 text-black'>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal p-0">
                                    <li>
                                        <a>Terkini</a>
                                    </li>
                                    <li>
                                        <a>Kesehatan</a>
                                    </li>
                                    <li>
                                        <a>Tips & Trik</a>
                                    </li>
                                    <li tabindex={0}>
                                        <a>
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
                                        <ul className="p-2 bg-white text-black">
                                        <li>
                                            <a>Gigi</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                        </ul>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap pb-8">
                        <div className="w-full lg:w-3/4 px-4">
                            <div className='mx-auto'>
                                <CardBlogLarge/>
                            </div>
                        </div>
                        <div className="lg:flex lg:w-1/4 hidden">
                            <div className='mx-auto'>
                                <CardBlogSmall/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
};

export default DetailBlog;
