import React from 'react';
import { CheckIcon, SparklesIcon } from './CoutureIcons';

export default function ToastNotification({ message, visible, type = 'gold' }) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        background: '#0d0c0b',
        color: '#ffffff',
        border: '1px solid var(--gold-primary)',
        padding: '0.9rem 1.8rem',
        borderRadius: '3px',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.78rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        animation: 'fadeInUp 0.35s ease forwards',
      }}
    >
      <SparklesIcon size={16} color="var(--gold-bright)" />
      <span>{message}</span>
    </div>
  );
}
