const blogs = [
  {
    id: 1,
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1611166819595-ac34987dfa57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=515&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    author: 'Alexandra',
    title: 'Kesehatan Gigi & Mulut - Cara Menjaga Kesehatan Mulut',
    desc: 'Dalam situasi saat ini, menjaga kebersihan pribadi sangatlah penting. Pastinya sekarang, kamu sudah terbiasa mengenakan masker dan mencuci tangan dengan seksama. Tapi jangan lupakan pentingnya menjaga kebersihan gigi...',
  },
  {
    id: 2,
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    author: 'Alexandra',
    title: 'Kesehatan Gigi & Mulut - Cara Menjaga Kesehatan Mulut',
    desc: 'Dalam situasi saat ini, menjaga kebersihan pribadi sangatlah penting. Pastinya sekarang, kamu sudah terbiasa mengenakan masker dan mencuci tangan dengan seksama. Tapi jangan lupakan pentingnya menjaga kebersihan gigi...',
  },
]

const CardBlogLarge = () => {
  return (
    <div>
      {blogs.map((blog) => (
      <a href={blog.href}>
        <div key={blog.id} className="card mx-auto card-compact lg:card-side bg-white shadow-sm mb-4 transition duration-300 ease-in-out hover:shadow-lg">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/4">
              <div className="h-44 lg:w-56 lg:h-52 mask-square ring-white">
              <img 
                src={blog.imageSrc}
                alt={blog.imageAlt} />
              </div>
            </div>
            <div className="w-full lg:w-3/4 px-4">
              <div className="card-body">
                <h2 className="card-title text-black text-left">{blog.title.substring(0, 60)}</h2>
                <p className='text-left'>Oleh {blog.author}</p>
                <p className='text-left'>{blog.desc.substring(0, 220)}...</p>
              <div className="card-actions ">
                <a href='/detail-blog' className="text-base font-semibold text-sky-500 hover:text-sky-300">Selengkapnya</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      ))}
    </div>
  );
};

export default CardBlogLarge;
