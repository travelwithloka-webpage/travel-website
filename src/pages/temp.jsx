export default function Wayanad() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop"
          alt="Wayanad"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Exploring <span className="text-green-400">Wayanad</span>
          </h1>

          <p className="text-2xl text-gray-200 mb-8">
            Explore waterfalls, tea plantations, caves & adventure in Kerala.
          </p>

          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Wayanad%20Trip.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
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
            Starting From ₹4,177
          </h2>

          <p className="text-gray-400 text-2xl mb-6">
            Depends on sharing (2 / 3 / 4-5 Sharing)
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="text-2xl font-bold mb-2">Duration</h3>
              <p className="text-gray-300">2 Days / 1 Night</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Travel</h3>
              <p className="text-gray-300">Tempo Traveller (Non AC)</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Pickup</h3>
              <p className="text-gray-300">Bangalore - Majestic</p>
            </div>

          </div>
        </div>

        {/* DEPARTURE */}
        <div className="mb-16">

          <h2 className="text-4xl font-bold mb-8">
            Friday Night Departure
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-8 space-y-4 text-lg text-gray-300">

            <p>📍 Majestic Pickup - 11:00 PM</p>
            <p>📍 Night Journey via Mysore</p>
            <p>📍 Bandipur Forest Checkpost Crossing</p>

          </div>
        </div>

        {/* DAY 1 */}
        <div className="mb-16">

          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 1 - Saturday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Enter Wayanad Hills & Kerala Border</p>
            <p>✔ Freshen Up & Kerala Breakfast</p>
            <p>✔ Visit Soochipara Waterfalls</p>
            <p>✔ Explore Wayanad Glass Bridge</p>
            <p>✔ Lunch at Hotel (Self Sponsored)</p>
            <p>✔ Tea Plantation Visit</p>
            <p>✔ Optional Sky Cycling Experience</p>
            <p>✔ Visit Lakkidi View Point</p>
            <p>✔ Pookode Lake Visit</p>
            <p>✔ Optional Boating Activities</p>
            <p>✔ Reach Stay by 7 PM</p>
            <p>✔ Campfire & Group Activities</p>
            <p>✔ Dinner at Stay</p>

          </div>
        </div>

        {/* DAY 2 */}
        <div className="mb-16">

          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Day 2 - Sunday
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-5 text-lg text-gray-300 leading-8">

            <p>✔ Morning Tea Plantation Viewpoint</p>
            <p>✔ Breakfast & Checkout</p>
            <p>✔ Karapuzha Dam Adventure Activities</p>
            <p>✔ Zipline & Giant Swing (Optional)</p>
            <p>✔ Edakkal Caves Moderate Trek</p>
            <p>✔ Lunch at Nearby Restaurant</p>
            <p>✔ Visit Wayanad Heritage Museum</p>
            <p>✔ Muthanga Forest Drive</p>
            <p>✔ Sree Seetha Devi Temple Visit</p>
            <p>✔ Return Journey by 5:30 PM</p>
            <p>✔ Reach Bangalore Around 10:30 PM</p>

          </div>
        </div>

        {/* INCLUDED & EXCLUDED */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-zinc-900 rounded-3xl p-10">

            <h2 className="text-4xl font-bold mb-8 text-green-400">
              Included
            </h2>

            <div className="space-y-4 text-lg text-gray-300">

              <p>✔ Bangalore Pickup & Drop</p>
              <p>✔ Tempo Traveller Transport</p>
              <p>✔ Premium Shared Stay</p>
              <p>✔ 2 Breakfasts</p>
              <p>✔ 1 Dinner (Veg & Non-Veg)</p>
              <p>✔ Toll & Kerala Road Tax</p>
              <p>✔ Campfire & Group Activities</p>
              <p>✔ Trip Leader Assistance</p>

            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10">

            <h2 className="text-4xl font-bold mb-8 text-red-400">
              Excluded
            </h2>

            <div className="space-y-4 text-lg text-gray-300">

              <p>✘ Lunch (Both Days)</p>
              <p>✘ Boating Charges</p>
              <p>✘ Zipline / Skycycle Charges</p>
              <p>✘ Entry Fees</p>
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
              ✔ This is a group trip with shared accommodation.
            </p>

            <p>
              ✔ Overnight journey will be in pushback seats (not sleeper).
            </p>

            <p>
              ✔ Suitable for travelers who enjoy adventure & social experiences.
            </p>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">

          <a
            href="https://wa.me/917204767898?text=Hi,%20I%20want%20to%20book%20the%20Wayanad%20Trip.%0A%0AName:%20%0APhone:%20%0ANumber%20of%20People:%20%0APreferred%20Date:%20"
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