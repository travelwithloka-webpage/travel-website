export default function Murudeshwara() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
          alt="Coastal Karnataka"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Coastal Karnataka Road Trip
          </h1>

          <p className="text-2xl text-gray-200 mb-8">
            Gokarna • Jog Falls • Murudeshwar • Yana Caves
          </p>

          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Coastal%20Karnataka%20Road%20Trip.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 transition px-12 py-5 rounded-2xl text-2xl font-bold"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* PRICE CARD */}
        <div className="bg-zinc-900 rounded-3xl p-10 mb-16 border border-white/10">
          <h2 className="text-5xl font-bold mb-6 text-green-400">
            Starting from ₹5,999
          </h2>

          <p className="text-gray-400 text-xl mb-6">
            Beach Stay • Waterfalls • Caves • Temple Views
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="text-2xl font-bold mb-2">Duration</h3>
              <p className="text-gray-300">3 Days / 2 Nights</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Travel</h3>
              <p className="text-gray-300">Non-AC Pushback Traveller</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Pickup</h3>
              <p className="text-gray-300">Majestic, Bangalore</p>
            </div>

          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Trip Highlights
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 grid md:grid-cols-2 gap-5 text-lg text-gray-300">
            <p>✔ Jog Falls Sunrise</p>
            <p>✔ Murudeshwar Shiva Statue</p>
            <p>✔ Honnavar Eco Beach</p>
            <p>✔ Apsarkonda Waterfalls</p>
            <p>✔ Mangrove Forest Walk</p>
            <p>✔ Yana Caves Trek</p>
            <p>✔ Vishnu Theertha</p>
            <p>✔ Private Beach Stay</p>
            <p>✔ Mirjan Fort Visit</p>
            <p>✔ Beach Camp Experience</p>
          </div>
        </div>

        {/* DAY 0 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 0 - Friday Night
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">
            <p>✔ Departure from Bangalore at 9:00 PM</p>
            <p>✔ Pickup at Majestic - Shanthala Silks</p>
            <p>✔ Overnight road trip towards Coastal Karnataka</p>
          </div>
        </div>

        {/* DAY 1 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 1 - Saturday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Sunrise at Jog Falls</p>
            <p>✔ Sharavathi Valley Viewpoint</p>
            <p>✔ Honnavar Hanging Bridge Walk</p>
            <p>✔ Reach Homestay & Breakfast</p>
            <p>✔ Explore Mirjan Fort</p>
            <p>✔ Lunch at Local Restaurant</p>
            <p>✔ Trek to Yana Caves</p>
            <p>✔ Visit Vishnu Theertha (if time permits)</p>
            <p>✔ Sunset at Private Beach</p>
            <p>✔ Group Dinner & Fun Activities</p>
            <p>✔ Overnight Stay at Beach Property</p>

          </div>
        </div>

        {/* DAY 2 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 2 - Sunday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Beach Sunrise & Swimming</p>
            <p>✔ Breakfast at Stay</p>
            <p>✔ Visit Apsarkonda Waterfalls</p>
            <p>✔ Explore Apsarkonda Cliff View</p>
            <p>✔ Mangrove Forest Boardwalk</p>
            <p>✔ Lunch at Restaurant</p>
            <p>✔ Murudeshwar Temple Visit</p>
            <p>✔ Witness Giant Shiva Statue</p>
            <p>✔ Sunset at Murudeshwar Beach</p>
            <p>✔ Return Journey to Bangalore at 6:30 PM</p>

          </div>
        </div>

        {/* DAY 3 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 3 - Monday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">
            <p>✔ Reach Bangalore by 5:00 AM</p>
            <p>✔ Drop at Majestic Pickup Point</p>
          </div>
        </div>

        {/* INCLUDED & EXCLUDED */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-zinc-900 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-8 text-green-400">
              Included
            </h2>

            <div className="space-y-4 text-lg text-gray-300">
              <p>✔ Non-AC Pushback Traveller</p>
              <p>✔ 2 Breakfasts + 1 Dinner</p>
              <p>✔ Beach Front Stay</p>
              <p>✔ Shared Tent / Dorm Stay</p>
              <p>✔ Trek Leader Assistance</p>
              <p>✔ Sightseeing Transportation</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-8 text-red-400">
              Excluded
            </h2>

            <div className="space-y-4 text-lg text-gray-300">
              <p>✘ Lunch & Journey Dinner</p>
              <p>✘ Adventure Activities</p>
              <p>✘ Personal Expenses</p>
              <p>✘ Entry Charges</p>
              <p>✘ Water Activities</p>
            </div>
          </div>

        </div>

        {/* IMPORTANT NOTE */}
        <div className="bg-zinc-900 rounded-3xl p-10 mb-20 border border-yellow-500/20">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            Important Notes
          </h2>

          <div className="space-y-4 text-gray-300 leading-8 text-lg">
            <p>✔ Shared group trip experience</p>
            <p>✔ Comfortable clothing & trekking shoes recommended</p>
            <p>✔ ₹2000 advance is non-refundable</p>
            <p>✔ Last-minute cancellations within 48 hours are fully chargeable</p>
            <p>✔ Full refund only in unavoidable trip cancellation situations</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Coastal%20Karnataka%20Road%20Trip.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
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
