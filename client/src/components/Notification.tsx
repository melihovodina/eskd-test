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
        fixed top-6 left-1/2 z-50 -translate-x-1/2 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3
        ${type === "success" ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}
      `}
      role="alert"
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <span>{message}</span>
      {onClose && (
        <button
          className=" flex items-center justify-center p-1 rounded hover:bg-black/10 transition"
          onClick={onClose}
          aria-label="Закрыть"
          style={{ alignSelf: "center", marginTop: "2px" }}
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}