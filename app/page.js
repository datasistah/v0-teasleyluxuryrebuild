
const services = [
  {
    title: 'Weekly Lawn Maintenance',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Bi-Weekly Lawn Maintenance',
    image: 'https://images.unsplash.com/photo-1599685315640-1f2c0c8f3d3f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Mulching',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1600&auto=format&fit=crop'
  }
]

const cities = [
  'Raleigh','Cary','Wake Forest','Rolesville',
  'Knightdale','Zebulon','Wendell','Nashville'
]

export default function Home() {
  return (
    <main className="bg-[#f5f3ef] text-[#112018]">

      <header className="fixed top-0 left-0 w-full bg-[#f5f3ef]/95 backdrop-blur-md border-b border-[#d8ddd6] z-50">
        <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
          <div className="font-serif text-4xl">
            TEASLEY <span className="text-sm tracking-[0.4em] font-sans text-[#496256]">LAWN CARE</span>
          </div>

          <nav className="hidden md:flex gap-14 uppercase tracking-[0.2em] text-sm">
            <a href="#services">Services</a>
            <a href="#estimate">Estimate</a>
            <a href="#areas">Service Areas</a>
          </nav>

          <a href="tel:9197466062" className="bg-[#315645] text-white rounded-full px-8 py-4">
            ☏ 919-746-6062
          </a>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-10 text-white w-full pt-24">
            <p className="uppercase tracking-[0.5em] text-sm mb-10">
              PROFESSIONAL LAWN CARE · RALEIGH, NC
            </p>

            <h1 className="font-serif text-[120px] leading-[0.9] max-w-5xl mb-10">
              Give Your Lawn
              <br />
              Some TLC
            </h1>

            <p className="text-2xl max-w-3xl text-[#e5dfd5] leading-relaxed mb-12">
              Professional lawn maintenance and landscaping services for residential properties.
            </p>

            <div className="flex gap-6 flex-wrap">
              <a href="#estimate" className="bg-[#315645] px-10 py-6 rounded-full uppercase tracking-[0.2em] text-sm">
                Request Free Estimate
              </a>

              <a href="tel:9197466062" className="border border-white/30 px-10 py-6 rounded-full uppercase tracking-[0.2em] text-sm">
                Call 919-746-6062
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-10">

          <p className="uppercase tracking-[0.5em] text-[#50685a] text-sm mb-6">
            OUR SERVICES
          </p>

          <h2 className="font-serif text-[90px] leading-[0.9] mb-20">
            Maintenance
            <br />
            <em>Mastery</em>
          </h2>

          <div className="w-16 h-[1px] bg-[#50685a] mb-24"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title}>
                <div className="overflow-hidden mb-6">
                  <img src={service.image} className="w-full h-[360px] object-cover hover:scale-105 transition duration-700" />
                </div>

                <h3 className="font-serif text-4xl mb-5">{service.title}</h3>

                <a href="#estimate" className="text-[#50685a] text-lg">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="bg-[#021c16] text-white py-32">
        <div className="max-w-3xl mx-auto px-10">

          <p className="uppercase tracking-[0.5em] text-sm text-[#83998e] mb-6">
            FREE ESTIMATES
          </p>

          <h2 className="font-serif text-[80px] leading-[0.9] mb-10">
            Request Your
            <br />
            <em>Estimate</em>
          </h2>

          <div className="w-16 h-[1px] bg-[#83998e] mb-16"></div>

          <div className="flex items-center gap-6 text-[#809086] mb-16">
            <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">1</div>
            <span>Service</span>
            <div className="w-10 h-[1px] bg-[#32423a]"></div>
            <div className="border border-[#32423a] rounded-full w-10 h-10 flex items-center justify-center">2</div>
            <span>Property</span>
            <div className="w-10 h-[1px] bg-[#32423a]"></div>
            <div className="border border-[#32423a] rounded-full w-10 h-10 flex items-center justify-center">3</div>
            <span>Contact</span>
          </div>

          <form action="https://formsubmit.co/teasleylawncareservices@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />

            <p className="text-2xl mb-10">Which services are you interested in?</p>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {services.map((service) => (
                <label key={service.title} className="border border-[#31453d] px-6 py-6 cursor-pointer hover:border-[#64786f] transition">
                  <input type="checkbox" name="services" value={service.title} className="mr-3" />
                  {service.title}
                </label>
              ))}

              <label className="border border-[#31453d] px-6 py-6 cursor-pointer hover:border-[#64786f] transition">
                <input type="checkbox" name="services" value="Planting Services" className="mr-3" />
                Planting Services
              </label>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-5 text-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-5 text-lg"
            />

            <textarea
              rows="6"
              name="notes"
              placeholder="Tell us about your project"
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-10 text-lg"
            />

            <button className="bg-[#2f4c40] px-10 py-5 rounded-full uppercase tracking-[0.2em]">
              Submit Estimate Request →
            </button>
          </form>
        </div>
      </section>

      <section id="areas" className="py-32">
        <div className="max-w-6xl mx-auto px-10">

          <p className="uppercase tracking-[0.5em] text-[#50685a] text-sm mb-6">
            WHERE WE SERVE
          </p>

          <h2 className="font-serif text-[90px] leading-[0.9] mb-10">
            Our <em>Region</em>
          </h2>

          <div className="w-16 h-[1px] bg-[#50685a] mb-12"></div>

          <p className="text-2xl text-[#4e6055] max-w-4xl leading-relaxed mb-20">
            Click any city below to see the specific neighborhoods and communities we serve.
            Not sure if you're in our area? Give us a call — we're happy to confirm.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city) => (
              <div key={city} className="border border-[#d7dcd5] bg-white px-8 py-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span>⌖</span>
                    <span className="font-serif text-4xl">{city}</span>
                    <span className="uppercase tracking-[0.3em] text-sm text-[#50685a]">
                      NC
                    </span>
                  </div>

                  <span>⌄</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-dashed border-[#d7dcd5] p-8 mt-16 text-lg text-[#4e6055]">
            <strong className="text-[#102018]">Don't see your neighborhood?</strong> We also serve many surrounding communities throughout Wake, Nash, and Johnston counties.
          </div>

        </div>
      </section>

    </main>
  )
}
