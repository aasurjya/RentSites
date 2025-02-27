import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RoomCard from "./components/RoomCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RoomCard
          src="/room1.jpg"
          alt="Room 1"
          title="Cozy Room in City Center"
          description="Spacious room with a comfortable bed and private bathroom."
          price="$800/month"
        />
        <RoomCard
          src="/room2.jpg"
          alt="Room 2"
          title="Modern Apartment Room"
          description="Stylish room in a modern apartment with shared kitchen and living area."
          price="$1200/month"
        />
        <RoomCard
          src="/room3.jpg"
          alt="Room 3"
          title="Quiet Room near University"
          description="Perfect for students, this room offers a quiet and comfortable study environment."
          price="$650/month"
        />
      </section>

      <Footer />
    </main>
  );
}
