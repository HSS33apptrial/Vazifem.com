import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');

    const form = formRef.current!;

    try {
      const res = await fetch('/api/provider', {
        method: 'POST',
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('failed');
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {state === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-16"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
            Başvurunuz Alındı!
          </h3>
          <p className="text-neutral-500 mb-8">
            En kısa sürede sizinle iletişime geçeceğiz.
          </p>
          <button
            onClick={() => setState('idle')}
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Yeni başvuru gönder
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Ad Soyad <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
              placeholder="Adınız ve soyadınız"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Telefon <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
              placeholder="05XX XXX XX XX"
            />
          </div>

          {/* City & District row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Şehir <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                placeholder="Şehir"
              />
            </div>
            <div>
              <label htmlFor="district" className="block text-sm font-medium text-neutral-700 mb-1.5">
                İlçe
              </label>
              <input
                type="text"
                id="district"
                name="district"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                placeholder="İlçe"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Kısa Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all resize-none"
              placeholder="Eklemek istediğiniz bir not varsa yazabilirsiniz..."
            />
          </div>

          {/* Error message */}
          {state === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm"
            >
              Bir hata oluştu. Lütfen tekrar deneyin.
            </motion.p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={state === 'sending'}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:ring-offset-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state === 'sending' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Gönderiliyor...
              </span>
            ) : (
              'Başvuru Gönder'
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
