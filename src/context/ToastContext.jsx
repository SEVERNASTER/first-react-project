import React, { createContext, useContext, useState } from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toast, setToast] = useState(null);

    const showToast = ({ icon, text }) => {
        setToast({ icon, text });
        setTimeout(() => setToast(null), 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && <Toast icon={toast.icon} text={toast.text} />}
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}
