export default function Coorg() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
          alt="Munnar"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Coorg Backpacking Trip
          </h1>

          <p className="text-2xl text-gray-200 mb-8">
            Experience the misty mountains, waterfalls, rivers, coffee estates, and scenic beauty of Coorg.
          </p>

          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Coorg%20Adventure%20Trek.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 transition px-12 py-5 rounded-2xl text-2xl font-bold"
        >Book
        </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Price Card */}
        <div className="bg-zinc-900 rounded-3xl p-10 mb-16 border border-white/10">
          <h2 className="text-5xl font-bold mb-6 text-green-400">
            ₹4,500
          </h2>

          <p className="text-gray-400 line-through text-2xl mb-6">
            ₹4,200
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="text-2xl font-bold mb-2">Duration</h3>
              <p className="text-gray-300">2 Days / 1 Night</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Difficulty</h3>
              <p className="text-gray-300">Easy to Moderate</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Pickup</h3>
              <p className="text-gray-300">Bangalore</p>
            </div>

          </div>
        </div>

        {/* Departure */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">
            Friday Night Departure
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-8 space-y-4 text-lg text-gray-300">
            <p>📍 Majestic - 8:30 PM</p>
            <p>📍 Koramangala - 9:20 PM</p>
            <p>📍 Silk Board - 9:30 PM</p>
            <p>📍 Electronic City - 10:00 PM</p>
          </div>
        </div>

        {/* Day 1 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 1 - Saturday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Start from Bangalore at 10 PM</p>
<p>✔ Freshen up with estate brewed coffee</p>
<p>✔ Breakfast in misty Coorg weather</p>
<p>✔ Visit Chiklehole Dam</p>
<p>✔ Explore Cauvery Nisargadhama</p>
<p>✔ Visit Golden Temple / Tibetan Monastery</p>
<p>✔ Visit Harangi Elephant Camp</p>
<p>✔ Sunset near Harangi River</p>
<p>✔ Campfire & Fun Activities</p>
<p>✔ Delicious Dinner</p>
<p>✔ Overnight Stay</p>

          </div>
        </div>

        {/* Day 2 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 2 - Sunday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

           <p>✔ Breakfast & Checkout from Stay</p>
<p>✔ Visit Mandalpatti Peak</p>
<p>✔ Explore Abbey Waterfalls</p>
<p>✔ Self Sponsored Lunch at Madikeri</p>
<p>✔ Visit Madikeri Fort / Temple</p>
<p>✔ Witness Sunset at Raja Seat</p>
<p>✔ Return Journey to Bangalore</p>
<p>✔ Reach Bangalore by 11:30 PM</p>

          </div>
        </div>

        {/* Included & Excluded */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-zinc-900 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-8 text-green-400">
              Included
            </h2>

            <div className="space-y-4 text-lg text-gray-300">
              <p>✔ Pickup & Drop from Bangalore</p>
<p>✔ 2 Breakfasts</p>
<p>✔ 1 Dinner</p>
<p>✔ Tent / Dormitory Stay</p>
<p>✔ Sightseeing</p>
<p>✔ Trip Lead & Guidance</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-8 text-red-400">
              Excluded
            </h2>

            <div className="space-y-4 text-lg text-gray-300">
              <p>✘ Entry Charges</p>
<p>✘ Adventure Activities</p>
<p>✘ Boat / Jeep Rides</p>
<p>✘ Personal Expenses</p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Coorg%20Adventure%20Trek.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
             target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 transition px-12 py-5 rounded-2xl text-2xl font-bold"
            >
             Book Your Slot Now
            </a>
        </div>

      </div>

    </div>
  )
}