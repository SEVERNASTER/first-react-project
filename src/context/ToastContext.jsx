import React, { createContext, useContext, useState } from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toast, setToast] = useState(null);
    const [visible, setVisible] = useState(false);

    const showToast = ({ icon, text }) => {
        setToast({ icon, text });
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setTimeout(() => setToast(null), 500);
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && <Toast icon={toast.icon} text={toast.text} visible={visible} />}
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}
