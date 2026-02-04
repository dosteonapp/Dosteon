"use client";

import { motion as Motion, AnimatePresence } from "framer-motion";
import { X, Check, AlertCircle } from "lucide-react";

export function Modal({ isOpen, onClose, type = "success", title, message }) {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-[32px] p-10 max-w-md w-full text-center relative shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col items-center">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-10 relative`}>
              {/* Pulsing circles */}
              <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isSuccess ? "bg-green-500" : "bg-red-500"}`}></div>
              <div className={`absolute -inset-4 rounded-full opacity-10 ${isSuccess ? "bg-green-500" : "bg-red-500"}`}></div>
              
              <div className={`w-full h-full rounded-full flex items-center justify-center z-10 ${isSuccess ? "bg-green-500" : "bg-red-500"}`}>
                {isSuccess ? (
                  <Check className="text-white" size={48} strokeWidth={3} />
                ) : (
                  <X className="text-white" size={48} strokeWidth={3} />
                )}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {message}
            </p>

            {!isSuccess && (
              <button
                onClick={onClose}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors"
              >
                Try Again
              </button>
            )}
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  );
}
