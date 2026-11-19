import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useApp();

  if (!toast.show) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-md w-full animate-fadeIn select-none">
      <div
        className={`p-4 rounded-2xl shadow-2xl border flex items-start gap-3 backdrop-blur-md ${
          isSuccess
            ? 'bg-emerald-950/95 text-white border-utrujjah-gold-500/40 shadow-green-glow'
            : isError
            ? 'bg-rose-950/95 text-white border-rose-500/40 shadow-rose-900/50'
            : 'bg-slate-900/95 text-white border-slate-700'
        }`}
      >
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess && <CheckCircle2 className="w-5 h-5 text-utrujjah-gold-400" />}
          {isError && <AlertCircle className="w-5 h-5 text-rose-400" />}
          {!isSuccess && !isError && <Info className="w-5 h-5 text-blue-400" />}
        </div>

        <div className="flex-1 font-tajawal text-sm leading-relaxed">
          {toast.message}
        </div>
      </div>
    </div>
  );
}
