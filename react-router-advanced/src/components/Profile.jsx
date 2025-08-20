import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Profile Page</h2>
      <nav className="space-x-4 mb-4">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      
      <Outlet />
    </div>
  );
}
