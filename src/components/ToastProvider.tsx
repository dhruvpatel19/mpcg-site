import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ToastItem {
  id: number;
  title: string;
  description?: string;
}

interface ToastContextValue {
  showToast: (title: string, description?: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((title: string, description?: string) => {
    const id = Date.now();
    setToasts((current) => [...current, { id, title, description }]);
  }, []);

  useEffect(() => {
    if (!toasts.length) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      removeToast(toasts[0].id);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [removeToast, toasts]);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="fixed bottom-4 end-4 z-[120] flex w-full max-w-sm flex-col gap-3 px-4 print:hidden"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="rounded-2xl border border-stone-200 bg-white p-4 shadow-xl shadow-stone-900/10"
          >
            <p className="text-sm font-bold text-stone-900">{toast.title}</p>
            {toast.description ? (
              <p className="mt-1 text-sm text-stone-600">{toast.description}</p>
            ) : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
};
