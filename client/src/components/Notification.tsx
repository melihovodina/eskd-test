import { ReactNode } from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";

interface NotificationProps {
  type: "success" | "error";
  message: ReactNode;
  onClose?: () => void;
}

export default function Notification({ type, message, onClose }: NotificationProps) {
  return (
    <div
      className={`
        fixed top-4 left-4 right-4 sm:top-6 sm:left-1/2 sm:right-auto z-50 sm:-translate-x-1/2 px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 text-sm sm:text-base
        ${type === "success" ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}
      `}
      role="alert"
    >
      {type === "success" ? (
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      )}
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          className="flex items-center justify-center p-1 rounded hover:bg-black/10 transition"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}
    </div>
  );
}