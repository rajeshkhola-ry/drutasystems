const WHATSAPP_URL =
  'https://wa.me/919899115572?text=Hi%20Druta%20Systems,%20I%20would%20like%20to%20discuss%20a%20project.';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Druta Systems on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-3 pr-5 py-3 rounded-full bg-[#25D366] text-slate-950 shadow-[0_0_20px_rgba(37,211,102,0.7)] hover:shadow-[0_0_32px_rgba(37,211,102,0.9)] hover:scale-105 transition-all duration-300"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
      <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.14c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.58-.36.77-.36h.55c.18 0 .42-.03.65.5.24.56.8 1.94.87 2.08.07.14.11.3.02.49-.09.19-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.07.13.07.71-.17 1.39z" />
        </svg>
      </span>
      <span className="relative font-bold text-sm whitespace-nowrap">Chat with Us</span>
    </a>
  );
}
