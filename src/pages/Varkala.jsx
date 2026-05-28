export default function Varkala() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
          alt="Varkala"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Varkala & Alleppey Road Trip
          </h1>

          <p className="text-2xl text-gray-200 mb-8">
            Beaches, backwaters, waterfalls & unforgettable Kerala vibes.
          </p>

          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Varkala%20and%20Alleppey%20Trip.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
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
            ₹11,000
          </h2>

          <p className="text-gray-400 text-2xl mb-6">
            Advance Booking: ₹2,000
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="text-2xl font-bold mb-2">Duration</h3>
              <p className="text-gray-300">3 Days / 2 Nights</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Travel</h3>
              <p className="text-gray-300">12 Seater Pushback Traveler</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Pickup</h3>
              <p className="text-gray-300">Majestic, Shanti Nagar & Silk Board</p>
            </div>

          </div>
        </div>

        {/* DEPARTURE */}
        <div className="mb-16">

          <h2 className="text-4xl font-bold mb-8">
            Day 0 - Departure
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-8 space-y-4 text-lg text-gray-300">

            <p>📍 Majestic - 8:00 PM</p>
            <p>📍 Shanti Nagar - 8:15 PM</p>
            <p>📍 Silk Board - 8:30 PM</p>
            <p>✔ Overnight Road Trip from Bangalore</p>

          </div>
        </div>

        {/* DAY 1 */}
        <div className="mb-16">

          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 1 - Alleppey
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Reach Athirapally & freshen up</p>
            <p>✔ Breakfast at hotel</p>
            <p>✔ Visit Athirapally Waterfalls (Bahubali Falls)</p>
            <p>✔ Explore hidden waterfalls on the way</p>
            <p>✔ Lunch at Kochi (Self Sponsored)</p>
            <p>✔ Scenic drive through Alleppey backwaters</p>
            <p>✔ Visit Alleppey Beach & sunset view</p>
            <p>✔ Check-in to homestay</p>
            <p>✔ Dinner at stay</p>
            <p>✔ Rest for the night</p>

          </div>
        </div>

        {/* DAY 2 */}
        <div className="mb-16">

          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 2 - Backwaters & Varkala
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Breakfast at stay</p>
            <p>✔ Alleppey Backwater Boat Ride</p>
            <p>✔ 3 Hour Backwater Exploration</p>
            <p>✔ Coconut trees & scenic waterways</p>
            <p>✔ Lunch at hotel</p>
            <p>✔ Drive to Varkala</p>
            <p>✔ Kappil Beach Sunset</p>
            <p>✔ Explore Varkala Cliff</p>
            <p>✔ Dinner near Varkala</p>

          </div>
        </div>

        {/* DAY 3 */}
        <div className="mb-16">

          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 3 - Varkala Adventure
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Breakfast</p>
            <p>✔ Relax at Varkala Beach</p>
            <p>✔ Beach activities & exploration</p>
            <p>✔ Mangrove Boating Experience</p>
            <p>✔ Visit Jatayu Earth Center</p>
            <p>✔ Sunset at Jatayu</p>
            <p>✔ Return Journey to Bangalore - 6 PM</p>
            <p>✔ Reach Bangalore by 7 AM next morning</p>

          </div>
        </div>

        {/* INCLUDED / EXCLUDED */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-zinc-900 rounded-3xl p-10">

            <h2 className="text-4xl font-bold mb-8 text-green-400">
              Included
            </h2>

            <div className="space-y-4 text-lg text-gray-300">

              <p>✔ Bangalore to Bangalore Transport</p>
              <p>✔ Kerala & Tamil Nadu Road Tax</p>
              <p>✔ 3 Breakfasts</p>
              <p>✔ 3 Hour Backwater Boat Ride</p>
              <p>✔ Parking Charges</p>
              <p>✔ Shared Room Stay (3/4 Sharing)</p>

            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10">

            <h2 className="text-4xl font-bold mb-8 text-red-400">
              Excluded
            </h2>

            <div className="space-y-4 text-lg text-gray-300">

              <p>✘ Lunch & Dinner</p>
              <p>✘ Adventure Activities</p>
              <p>✘ Cable Car Charges</p>
              <p>✘ Entry Tickets</p>
              <p>✘ Personal Expenses</p>

            </div>
          </div>

        </div>

        {/* IMPORTANT NOTE */}
        <div className="bg-zinc-900 rounded-3xl p-10 mb-20 border border-yellow-500/20">

          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            Important Note
          </h2>

          <div className="space-y-4 text-lg text-gray-300 leading-8">

            <p>
              ✔ This is a road trip in a 12-seater pushback traveler.
            </p>

            <p>
              ✔ Please book only if you are comfortable with overnight travel.
            </p>

            <p>
              ✔ This trip focuses on experience, adventure, beaches & nightlife.
            </p>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">

          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Varkala%20and%20Alleppey%20Trip.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
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