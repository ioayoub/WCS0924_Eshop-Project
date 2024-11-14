import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 py-8 text-white flex justify-around">
      <span className="animate-bounce">ESHOP</span>
      <ul className="flex gap-4">
        <li className="hover:underline hover:underline-offset-4">
          <NavLink to={"/"}>Accueil</NavLink>
        </li>
      </ul>
    </nav>
  );
}
