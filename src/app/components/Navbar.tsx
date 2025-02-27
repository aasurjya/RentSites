import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center mb-8">
      <div className="text-2xl font-bold">Tiloi Room Rental</div>
      <ul className="flex space-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
