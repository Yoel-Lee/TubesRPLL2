import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Attendance from './pages/Attendance';
import LeaveRequest from './pages/LeaveRequest';
import Payroll from './pages/Payroll';
import Reimbursement from './pages/Reimbursement';
import AdminApprovals from './pages/AdminApprovals';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ManageAttendance from './pages/ManageAttendance';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- RUTE PUBLIK (BISA DIAKSES SIAPAPUN) --- */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* --- RUTE TERPROTEKSI (WAJIB LOGIN) --- */}
        <Route path="/"element={
          <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/attendance" replace />} />
          <Route path="approvals" element={<AdminApprovals />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="leave" element={<LeaveRequest />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="reimburse" element={<Reimbursement />} />
          <Route path="manage-attendance" element={<ManageAttendance />} />
        </Route>

        {/* Redirect jika salah alamat */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;