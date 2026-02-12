import emailjs from '@emailjs/browser';

/**
 * Email Service Configuration
 * 
 * This module handles email functionality using EmailJS.
 * Before using this in production, make sure to:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Set up your email service
 * 3. Create an email template
 * 4. Add your credentials to .env file
 * 
 * See EMAIL_SETUP.md for detailed instructions
 */

// Environment variables validation
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

/**
 * Check if EmailJS is properly configured
 */
export const isEmailConfigured = (): boolean => {
  return !!(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey &&
    EMAILJS_CONFIG.serviceId !== 'your_service_id' &&
    EMAILJS_CONFIG.templateId !== 'your_template_id' &&
    EMAILJS_CONFIG.publicKey !== 'your_public_key'
  );
};

/**
 * Send email using EmailJS
 * @param formElement - The form element containing the email data
 * @returns Promise that resolves when email is sent
 */
export const sendEmail = async (formElement: HTMLFormElement): Promise<void> => {
  if (!isEmailConfigured()) {
    throw new Error('EmailJS is not properly configured. Please check your environment variables.');
  }

  try {
    await emailjs.sendForm(
      EMAILJS_CONFIG.serviceId!,
      EMAILJS_CONFIG.templateId!,
      formElement,
      EMAILJS_CONFIG.publicKey!
    );
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};

/**
 * Initialize EmailJS (optional - for advanced configuration)
 */
export const initEmailJS = (): void => {
  if (isEmailConfigured()) {
    emailjs.init(EMAILJS_CONFIG.publicKey!);
  }
};

export default {
  sendEmail,
  isEmailConfigured,
  initEmailJS,
};
