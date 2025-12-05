export default function Home() {
  return (
    <main className="pt-24 bg-black text-white">
      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 "
      >
        <h1 className="text-5xl font-bold mb-6 text-pink-400">
          Welcome to Blossom Nails
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mb-8">
          Beautiful nails, luxury treatment, and a touch of elegance.
        </p>

        <a
          href="https://app.squareup.com/appointments/book/hh2rhbv6cji0mv/LDAEC7Z67RX1A/start"
          target="_self"
          className="px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-pink-500 to-pink-700 shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-pink-800 transition-all"
        >
          Book an Appointment
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="min-h-screen pt-24 px-6 text-center">
        <h2 className="text-3xl font-semibold text-pink-400 mb-6">Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          (Your services component will go here.)
        </p>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="min-h-screen pt-24 px-6 text-center">
        <h2 className="text-3xl font-semibold text-pink-400 mb-6">Gallery</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          (Add your gallery preview grid here.)
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen pt-24 px-6 text-center">
        <h2 className="text-3xl font-semibold text-pink-400 mb-6">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          (Bio / story / photo goes here.)
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen pt-24 px-6 text-center">
        <h2 className="text-3xl font-semibold text-pink-400 mb-6">Contact</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          (Booking links, social media, hours.)
        </p>
      </section>
    </main>
  );
}
