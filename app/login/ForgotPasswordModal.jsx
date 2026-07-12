'use client';

import { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

function ForgotPasswordModal({ show, onHide }) {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!show) return null;

  const sendOtp = () => {
    // API Call
    setOtpSent(true);
  };

  const resetPassword = () => {
    // API Call
    alert('Password changed successfully');
    onHide();

    setOtpSent(false);
    setEmail('');
    setOtp('');
    setNewPassword('');
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-start justify-center pt-[15vh] z-[9999]"
      onClick={onHide}
    >
      {/* Modal */}
      <div
        className="bg-white rounded-3xl p-8 w-[550px] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onHide}
          className="absolute top-5 right-5 text-gray-500 hover:text-red-500"
        >
          <X size={28} />
        </button>

        <h2 className="text-4xl font-bold mb-8">
          Forgot Password
        </h2>

        {!otpSent ? (
          <>
            <label className="block mb-3 text-lg font-medium">
              Email or Roll Number
            </label>

            <input
              type="text"
              placeholder="Enter Email or Roll Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl p-4 text-lg"
            />

            <button
              onClick={sendOtp}
              className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <label className="block mb-3 text-lg font-medium">
              Enter OTP
            </label>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full border rounded-xl p-4 text-lg"
            />

            <label className="block mt-6 mb-3 text-lg font-medium">
              New Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border rounded-xl p-4 pr-14 text-lg"
                placeholder="Enter New Password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={22} />
                ) : (
                  <Eye size={22} />
                )}
              </button>
            </div>

            <button
              onClick={resetPassword}
              className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700"
            >
              Reset Password
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPasswordModal;