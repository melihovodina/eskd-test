import { TextareaHTMLAttributes } from 'react';
import { AlertCircle } from 'lucide-react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Textarea({ label, error, className = '', id, ...props }: TextareaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s/g, '-');

  return (
    <div>
      <label htmlFor={textareaId} className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={textareaId}
        className={`w-full px-3 py-2 sm:px-4 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
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