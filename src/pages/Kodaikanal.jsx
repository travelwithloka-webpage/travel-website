export default function Kodaikanal() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
          alt="Kodaikanal"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Kodaikanal
          </h1>

          <p className="text-2xl text-gray-200 mb-8">
            Princess of Mountain Trip
          </p>

          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Kodaikanal%20Trip.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
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

        {/* OVERVIEW */}
        <div className="bg-zinc-900 rounded-3xl p-10 mb-16 border border-white/10">
          <h2 className="text-5xl font-bold mb-6 text-green-400">
            Starting from ₹4,997
          </h2>

          <p className="text-gray-400 text-xl mb-6">
            Explore misty mountains, pine forests & hidden waterfalls.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="text-2xl font-bold mb-2">Duration</h3>
              <p className="text-gray-300">3 Days / 2 Nights</p>
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

        {/* HIGHLIGHTS */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Trip Highlights
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 grid md:grid-cols-2 gap-5 text-lg text-gray-300">
            <p>✔ Dolphin's Nose View Point</p>
            <p>✔ Vattakanal Waterfalls</p>
            <p>✔ Coakers Walk</p>
            <p>✔ Manvannur Lake</p>
            <p>✔ Poombarai Village</p>
            <p>✔ Pine Forest</p>
            <p>✔ Pillar Rocks</p>
            <p>✔ Guna Caves</p>
            <p>✔ Silver Cascade Waterfalls</p>
            <p>✔ Scenic Mountain Views</p>
          </div>
        </div>

        {/* DAY 0 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 0 - Friday Night
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">
            <p>✔ Departure from Bangalore at 9:30 PM</p>
            <p>✔ Overnight journey towards Kodaikanal</p>
          </div>
        </div>

        {/* DAY 1 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 1 - Saturday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Visit Silver Cascade Waterfalls</p>
            <p>✔ Reach Homestay & Freshen Up</p>
            <p>✔ Breakfast at Stay</p>
            <p>✔ Trek to Dolphin's Nose View Point</p>
            <p>✔ Walk through Pine Forest Trails</p>
            <p>✔ Panoramic Mountain Views</p>
            <p>✔ Lunch amidst nature</p>
            <p>✔ Visit Vattakanal Waterfalls</p>
            <p>✔ Explore Coakers Walk</p>
            <p>✔ Evening Tea / Coffee</p>
            <p>✔ Relax & Group Dinner</p>

          </div>
        </div>

        {/* DAY 2 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 2 - Sunday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Breakfast & Checkout</p>
            <p>✔ Visit Manvannur Lake & Viewpoint</p>
            <p>✔ Explore Poombarai Nature Village</p>
            <p>✔ Pine Forest Exploration</p>
            <p>✔ Visit Pillar Rocks</p>
            <p>✔ Explore Guna Caves</p>
            <p>✔ Shopping in Kodaikanal</p>
            <p>✔ Late Lunch at Local Restaurant</p>
            <p>✔ Sunset Departure to Bangalore</p>

          </div>
        </div>

        {/* DAY 3 */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 3 - Monday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">
            <p>✔ Reach Bangalore around 5:00 AM</p>
          </div>
        </div>

        {/* TREK DETAILS */}
        <div className="bg-zinc-900 rounded-3xl p-10 mb-16 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 text-green-400">
            Dolphin's Nose Trek Details
          </h2>

          <div className="space-y-4 text-lg text-gray-300">
            <p>✔ Trek Distance: 2 KM (One Side)</p>
            <p>✔ Difficulty: Easy to Moderate</p>
            <p>✔ Trail Type: Forests, Meadows, Rocky Paths & Water Streams</p>
          </div>
        </div>

        {/* INCLUDED & EXCLUDED */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-zinc-900 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-8 text-green-400">
              Included
            </h2>

            <div className="space-y-4 text-lg text-gray-300">
              <p>✔ Transportation</p>
              <p>✔ Accommodation</p>
              <p>✔ Sightseeing</p>
              <p>✔ 2 Breakfasts</p>
              <p>✔ Tea / Coffee</p>
              <p>✔ Saturday Night Dinner</p>
              <p>✔ Entry Tickets</p>
              <p>✔ Trip Leader</p>
              <p>✔ Music & Dance</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-8 text-red-400">
              Exclusions
            </h2>

            <div className="space-y-4 text-lg text-gray-300">
              <p>✘ Lunch</p>
              <p>✘ Personal Expenses</p>
              <p>✘ Anything not mentioned in inclusions</p>
            </div>
          </div>

        </div>

        {/* IMPORTANT NOTES */}
        <div className="bg-zinc-900 rounded-3xl p-10 mb-20 border border-yellow-500/20">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            Important Notes
          </h2>

          <div className="space-y-4 text-lg text-gray-300 leading-8">
            <p>✔ Smoking & alcohol prohibited during trek & travel</p>
            <p>✔ Group cooperation is mandatory</p>
            <p>✔ Misbehavior will not be tolerated</p>
            <p>✔ ₹1500 advance required for booking</p>
            <p>✔ Remaining amount to be paid during trip start</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Kodaikanal%20Trip.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
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