import myImage from './assets/waterfall.jpeg'
import myImag from './assets/munnar.jpeg'
import muru from './assets/murudesh.jpeg'
import vara from './assets/vara.jpeg'
export default function TrekTravelWebsite() {
  const trips = [
    {
      title: 'Munnar Kolukkumalai',
      duration: '2 Days',
      difficulty: 'Easy',
      price: '₹6,999',
      image: myImag,
      link: "/munnar"
    },
    {
      title: 'Wayanad',
      duration: '3 Days',
      difficulty: 'Easy',
      price: '₹4,999',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
       link: "/wayanad"
    },
    {
      title: 'Coorg Adventure Camp',
      duration: '2 Days',
      difficulty: 'Beginner Friendly',
      price: '₹4,500',
      image:
        'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop',
      link: "/coorg"
    },

    {
  title: 'Kodaikanal Trip',
  duration: '3 Days',
  difficulty: 'Easy to Moderate',
  price: '₹4,997',
  image:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  link: "/kodaikanal"
},

  {
  title: 'Varkala & Alleppey Road Trip',
  duration: '3 Days',
  difficulty: 'Easy',
  price: '₹11,000',
  image: vara,
  link: "/varkala"
},

  {
  title: 'Coastal Karnataka Road Trip',
  duration: '3 Days',
  difficulty: 'Easy to Moderate',
  price: '₹5,999',
  image: muru,
  link: "/murudeshwara"
},
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur z-50">
        <h1 className="text-2xl font-bold tracking-wide">Travel LOKA</h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#home" className="hover:text-green-400 transition">
            Home
          </a>
          <a href="#trips" className="hover:text-green-400 transition">
            Trips
          </a>
          <a href="#about" className="hover:text-green-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>

       <a
  href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20a%20trip"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-xl text-sm font-semibold"
>
  Book Now
</a>
</nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop"
          alt="mountains"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            TRAVEL WITH LOKA
          </h1>
          <h1 className="text-5xl md:text-5xl font-extrabold leading-tight mb-6">
            Travel Beyonds Limits   
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Adventure treks, weekend getaways, backpacking journeys, and unforgettable memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#trips"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-semibold text-lg transition"
            >
              Explore Trips
            </a>  

            <a
  href="https://chat.whatsapp.com/D2hbx8rY1PaHnUdnhW2aVi?mode=gi_t"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white/30 hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold text-lg transition"
>
  Join Community
</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-16 bg-zinc-900 text-center">
        <div>
          <h2 className="text-4xl font-bold text-green-400">120+</h2>
          <p className="text-gray-400 mt-2">Trips Organized</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-400">5000+</h2>
          <p className="text-gray-400 mt-2">Happy Travelers</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-400">40+</h2>
          <p className="text-gray-400 mt-2">Destinations</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-400">24/7</h2>
          <p className="text-gray-400 mt-2">Support</p>
        </div>
      </section>

      {/* Upcoming Departures */}
<section className="px-6 py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-5xl md:text-6xl font-extrabold mb-5">
        Upcoming Departures
      </h2>

      <p className="text-gray-400 text-lg">
        Reserve your adventure before slots fill out.
      </p>

    </div>

    {/* Trips Container */}
    <div className="space-y-8">

      {/* CARD */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-green-400 hover:scale-[1.01] transition duration-300 shadow-2xl">

        <div className="grid md:grid-cols-5 gap-6 items-center">

          {/* Date */}
          <div>
            <h3 className="text-2xl font-bold text-green-400">
              30 May
            </h3>

            <p className="text-gray-400">
              Friday • 8:30 PM
            </p>

            <p className="text-sm text-gray-500 mt-2">
              2 Days
            </p>
          </div>

          {/* Image + Title */}
          <div className="md:col-span-2 flex items-center gap-5">

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
              alt="Munnar"
              className="w-24 h-24 rounded-2xl object-cover"
            />

            <div>

              <h3 className="text-2xl font-bold">
                Munnar Kolukkumalai Trek
              </h3>

              <p className="text-gray-400 mt-1">
                📍 Munnar, Kerala
              </p>

            </div>

          </div>

          {/* Availability */}
          <div>
            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
              Available
            </span>
          </div>

          {/* Price + Button */}
          <div className="flex flex-col gap-4">

            <p className="text-3xl font-extrabold">
              ₹6,499
            </p>

            <a
              href="/munnar"
              className="bg-green-500 hover:bg-green-600 text-center py-3 rounded-2xl font-bold transition"
            >
              View Details
            </a>

          </div>

        </div>

      </div>

      {/* WAYANAD */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-orange-400 hover:scale-[1.01] transition duration-300 shadow-2xl">

        <div className="grid md:grid-cols-5 gap-6 items-center">

          <div>
            <h3 className="text-2xl font-bold text-orange-400">
              6 June
            </h3>

            <p className="text-gray-400">
              Friday • 9:00 PM
            </p>

            <p className="text-sm text-gray-500 mt-2">
              3 Days
            </p>
          </div>

          <div className="md:col-span-2 flex items-center gap-5">

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Wayanad"
              className="w-24 h-24 rounded-2xl object-cover"
            />

            <div>

              <h3 className="text-2xl font-bold">
                Wayanad Adventure Trip
              </h3>

              <p className="text-gray-400 mt-1">
                📍 Wayanad, Kerala
              </p>

            </div>

          </div>

          <div>
            <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
              Selling Fast
            </span>
          </div>

          <div className="flex flex-col gap-4">

            <p className="text-3xl font-extrabold">
              ₹4,999
            </p>

            <a
              href="/wayanad"
              className="bg-green-500 hover:bg-green-600 text-center py-3 rounded-2xl font-bold transition"
            >
              View Details
            </a>

          </div>

        </div>

      </div>

      {/* COORG */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-green-400 hover:scale-[1.01] transition duration-300 shadow-2xl">

        <div className="grid md:grid-cols-5 gap-6 items-center">

          <div>
            <h3 className="text-2xl font-bold text-green-400">
              13 June
            </h3>

            <p className="text-gray-400">
              Friday • 9:00 PM
            </p>

            <p className="text-sm text-gray-500 mt-2">
              2 Days
            </p>
          </div>

          <div className="md:col-span-2 flex items-center gap-5">

            <img
              src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop"
              alt="Coorg"
              className="w-24 h-24 rounded-2xl object-cover"
            />

            <div>

              <h3 className="text-2xl font-bold">
                Coorg Adventure Camp
              </h3>

              <p className="text-gray-400 mt-1">
                📍 Coorg, Karnataka
              </p>

            </div>

          </div>

          <div>
            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
              Available
            </span>
          </div>

          <div className="flex flex-col gap-4">

            <p className="text-3xl font-extrabold">
              ₹4,500
            </p>

            <a
              href="/coorg"
              className="bg-green-500 hover:bg-green-600 text-center py-3 rounded-2xl font-bold transition"
            >
              View Details
            </a>

          </div>

        </div>

      </div>

      {/* KODAIKANAL */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-cyan-400 hover:scale-[1.01] transition duration-300 shadow-2xl">

        <div className="grid md:grid-cols-5 gap-6 items-center">

          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              20 June
            </h3>

            <p className="text-gray-400">
              Friday • 9:30 PM
            </p>

            <p className="text-sm text-gray-500 mt-2">
              3 Days
            </p>
          </div>

          <div className="md:col-span-2 flex items-center gap-5">

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Kodaikanal"
              className="w-24 h-24 rounded-2xl object-cover"
            />

            <div>

              <h3 className="text-2xl font-bold">
                Kodaikanal Trip
              </h3>

              <p className="text-gray-400 mt-1">
                📍 Tamil Nadu
              </p>

            </div>

          </div>

          <div>
            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
              Available
            </span>
          </div>

          <div className="flex flex-col gap-4">

            <p className="text-3xl font-extrabold">
              ₹4,997
            </p>

            <a
              href="/kodaikanal"
              className="bg-green-500 hover:bg-green-600 text-center py-3 rounded-2xl font-bold transition"
            >
              View Details
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Trips */}
      <section id="trips" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming Treks
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your next adventure and experience nature like never before.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{trip.title}</h3>

                <div className="space-y-2 text-gray-300 mb-5">
                  <p>⏳ Duration: {trip.duration}</p>
                  <p>🥾 Difficulty: {trip.difficulty}</p>
                  <p>💰 Price: {trip.price}</p>
                </div>

                
                <a
  href={trip.link}
  className="block text-center w-full bg-green-500 py-3 rounded-xl"
>
  View Details
</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Adventure Gallery
            </h2>
            <p className="text-gray-400">
              Moments captured from our incredible journeys.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop',
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="gallery"
                className="rounded-2xl h-60 w-full object-cover hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={myImage}
            
            alt="travel"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Travel LOKA
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              We are a passionate trekking and travel organization dedicated to creating unforgettable experiences for adventure lovers. From mountains to beaches, we organize safe, exciting, and affordable trips.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>✔ Experienced trek leaders</p>
              <p>✔ Budget-friendly adventures</p>
              <p>✔ Comfortable travel arrangements</p>
              <p>✔ Safe and guided experiences</p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Contact */}
<section id="contact" className="px-6 py-20 max-w-4xl mx-auto">
  <div className="bg-zinc-900 rounded-3xl p-10 shadow-2xl text-center">

    <h2 className="text-4xl font-bold mb-4">
      Contact Us
    </h2>

    <p className="text-gray-400 mb-10">
      Ready for your next adventure? Reach out to us anytime.
    </p>

    <div className="space-y-6 text-lg">

      <p>
        📞 +91 7204767898
      </p>

      <p>
        📧 travelwithloka@gmail.com
      </p>

      <p>
        📸 @travel_with_loka
      </p>

    </div>

    <a
      href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20trips"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-bold transition"
    >
      Chat on WhatsApp
    </a>

  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Travel LOKA. All rights reserved.
      </footer>

      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20trips"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 text-lg font-bold"
>
  WhatsApp
</a>

    {/* Floating Instagram Button */}
<a
  href="https://instagram.com/travel_with_loka"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-24 right-6 bg-pink-500 hover:bg-pink-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 text-lg font-bold"
>
  Instagram
</a>
    </div>
  );
}
