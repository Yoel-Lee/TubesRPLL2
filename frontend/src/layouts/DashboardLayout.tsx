import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Calendar, ClipboardCheck, LogOut, Receipt, DollarSign } from 'lucide-react';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-10 text-indigo-300">ITHB HRIS</h1>
        <nav className="space-y-4">
          <Link to="/attendance" className="flex items-center gap-3 hover:text-indigo-300 transition">
            <LayoutDashboard size={20} /> Absensi
          </Link>
          <Link to="/leave" className="flex items-center gap-3 hover:text-indigo-300 transition">
            <Calendar size={20} /> Cuti
          </Link>
          {user.role === 'ADMIN' && (
            <Link to="/payroll" className="flex items-center gap-3 hover:text-indigo-300 transition">
              <ClipboardCheck size={20} /> Payroll
            </Link>
          )}
          <Link to="/reimburse" className="flex items-center gap-3 hover:text-indigo-300 transition">
            <Receipt size={20} /> Reimburse
          </Link>

           {user.role === 'ADMIN' && (    <>
            <div className="pt-4 pb-2 text-xs font-bold text-indigo-400 uppercase tracking-widest">Admin Menu</div>
            <Link to="/approvals" className="flex items-center gap-3 hover:text-indigo-300 transition">
              <ClipboardCheck size={20} /> Approvals
            </Link>
            <Link to="/payroll" className="flex items-center gap-3 hover:text-indigo-300 transition">
              <DollarSign size={20} /> Payroll
              
            </Link>
            <Link to="/manage-attendance" className="flex items-center gap-3 hover:text-indigo-300">
    <Calendar size={20} /> Koreksi Absen
  </Link>
          </>
        )}
        </nav>
        <button onClick={handleLogout} className="flex items-center gap-3 mt-auto pt-10 text-red-400 hover:text-red-300">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Halo, {user.name}</h2>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            {user.role}
          </span>
        </header>
        <Outlet />
      </main>
    </div>
  );
}