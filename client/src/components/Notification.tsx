import { ReactNode, useEffect, useRef, useState } from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";

interface NotificationProps {
  type: "success" | "error";
  message: ReactNode;
  onClose?: () => void;
  duration?: number;
}

export default function Notification({ type, message, onClose, duration = 3000 }: NotificationProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!onClose || !visible) return;
    timerRef.current = setTimeout(() => setVisible(false), duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onClose, duration, visible]);

  const handleTransitionEnd = () => {
    if (!visible && onClose) onClose();
  };

  return (
    <div
      className={`
        fixed top-4 left-4 right-4 sm:top-6 sm:left-1/2 sm:right-auto z-50 sm:-translate-x-1/2 px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 text-sm sm:text-base
        ${type === "success" ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}
      role="alert"
      onTransitionEnd={handleTransitionEnd}
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
          onClick={() => setVisible(false)}
          aria-label="Закрыть"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}
    </div>
  );
}