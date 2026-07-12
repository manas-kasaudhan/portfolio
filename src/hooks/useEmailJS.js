'use client';

import { useState, useCallback, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SPAM_COOLDOWN_MS = 60_000; // 60 seconds between submissions
const STORAGE_KEY = 'portfolio_last_email_sent';

export function useEmailJS() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef(null);

  const sendEmail = useCallback(async ({ name, email, subject, message }) => {
    // Spam prevention: check cooldown
    const lastSent = localStorage.getItem(STORAGE_KEY);
    if (lastSent && Date.now() - parseInt(lastSent, 10) < SPAM_COOLDOWN_MS) {
      const remaining = Math.ceil((SPAM_COOLDOWN_MS - (Date.now() - parseInt(lastSent, 10))) / 1000);
      setErrorMsg(`Please wait ${remaining}s before sending another message.`);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return false;
    }

    // Validate environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey ||
        serviceId === 'your_service_id_here' ||
        templateId === 'your_template_id_here' ||
        publicKey === 'your_public_key_here') {
      setErrorMsg('Email service not configured. Please contact me directly via email.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return false;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name.trim(),
          from_email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          reply_to: email.trim(),
        },
        publicKey
      );

      localStorage.setItem(STORAGE_KEY, Date.now().toString());
      setStatus('sent');
      return true;
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg('Failed to send message. Please try emailing me directly.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setErrorMsg('');
  }, []);

  return { sendEmail, status, errorMsg, reset, formRef };
}
