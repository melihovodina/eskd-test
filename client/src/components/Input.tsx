import { InputHTMLAttributes } from 'react';
import { AlertCircle } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, className = '', id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s/g, '-');

  return (
    <div>
      <label htmlFor={inputId} className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full px-3 py-2 sm:px-4 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
          error
            ? 'border-red-300 focus:ring-red-200'
            : 'border-gray-300 focus:ring-gray-200'
        } ${className}`}
        {...props}
      />
      {error && (
        <div className="mt-1 flex items-center gap-1 text-red-600 text-xs sm:text-sm">
          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}