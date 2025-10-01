import { ReactNode, FormEvent } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface FormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
  successMessage?: string;
  errorMessage?: string;
  className?: string;
}

export default function Form({
  children,
  onSubmit,
  successMessage,
  errorMessage,
  className = ''
}: FormProps) {
  return (
    <div className={`max-w-md w-full ${className}`}>
      {successMessage && (
        <div className="mb-4 sm:mb-6 bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 flex items-center gap-2 text-green-700 shadow-sm text-sm sm:text-base">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 sm:mb-6 bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 flex items-center gap-2 text-red-700 shadow-sm text-sm sm:text-base">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form
        onSubmit={onSubmit}
        className="space-y-4 sm:space-y-5 bg-white border border-gray-200 rounded-xl shadow-md p-4 sm:p-6"
      >
        {children}
      </form>
    </div>
  );
}