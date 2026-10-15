"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageCircle, FiX, FiSend, FiCheckCircle } from "react-icons/fi";

const fieldClass =
  "w-full rounded-lg border border-white/15 bg-[#061018] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30";

const ChatBubble = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.error || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  const close = () => {
    setOpen(false);
    if (status === "sent") setStatus("idle");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-label="Send me a message"
            className="w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-surface-raised shadow-2xl shadow-black/40"
          >
            <div className="flex items-center justify-between bg-emerald-500/10 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">Chat with Tosin</p>
                <p className="text-xs text-gray-400">I reply as soon as I can</p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close chat"
                className="text-gray-400 transition hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>

            {status === "sent" ? (
              <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
                <FiCheckCircle className="text-4xl text-emerald-400" aria-hidden="true" />
                <p className="text-sm font-medium text-white">Message sent</p>
                <p className="text-xs leading-relaxed text-gray-400">
                  Thanks! I&apos;ll reply using the contact you left.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 p-4">
                <input className={fieldClass} name="name" type="text" placeholder="Your name" aria-label="Your name" maxLength={80} />
                <input
                  className={fieldClass}
                  name="contact"
                  type="text"
                  placeholder="Email or WhatsApp number"
                  aria-label="Email or WhatsApp number"
                  maxLength={120}
                  required
                />
                <textarea
                  className={`${fieldClass} min-h-[96px] resize-none`}
                  name="message"
                  placeholder="How can I help?"
                  aria-label="Message"
                  maxLength={1500}
                  required
                />
                {/* Honeypot for bots */}
                <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                {status === "error" && (
                  <p role="alert" className="text-xs text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-medium text-[#061018] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                  <FiSend size={15} />
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-emerald-400 p-3.5 text-[#061018] shadow-lg shadow-black/30 transition hover:scale-105 hover:bg-emerald-300 sm:px-5 sm:py-3"
      >
        {open ? <FiX size={24} /> : <FiMessageCircle size={24} />}
        <span className="hidden text-sm font-medium sm:inline">{open ? "Close" : "Send a message"}</span>
      </button>
    </div>
  );
};

export default ChatBubble;
