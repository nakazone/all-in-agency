"use client";

import { useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/context";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

type SubmitError = "network" | "unavailable" | "invalid" | null;

/** Endereço de captura da plataforma All In. Sem ele, o site não finge que enviou. */
const CAPTURE_URL = process.env.NEXT_PUBLIC_CAPTURE_URL;

export function Contact() {
  const { t, locale } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState<SubmitError>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  // Uma chave por mensagem: novas tentativas reutilizam a mesma e a plataforma não duplica.
  const idempotencyKey = useRef<string | null>(null);

  const validate = () => {
    const next: Errors = {};
    if (!name.trim()) next.name = t.contact.form.errors.name;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = t.contact.form.errors.email;
    }
    if (!message.trim()) next.message = t.contact.form.errors.message;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending || !validate()) return;
    if (!CAPTURE_URL) {
      setSubmitError("unavailable");
      return;
    }
    idempotencyKey.current ??= crypto.randomUUID();
    setSending(true);
    setSubmitError(null);
    try {
      const response = await fetch(CAPTURE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": idempotencyKey.current },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          website,
          locale,
          page: window.location.href,
        }),
      });
      if (response.status === 200 || response.status === 202) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        idempotencyKey.current = null;
      } else if (response.status === 422) {
        setSubmitError("invalid");
      } else if (response.status === 404 || response.status === 410 || response.status === 403) {
        setSubmitError("unavailable");
      } else {
        setSubmitError("network");
      }
    } catch {
      setSubmitError("network");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8 lg:px-10">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-petroleo">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] font-semibold tracking-tight">
            {t.contact.title}
          </h2>

          <div className="mt-10 space-y-8">
            {t.contact.offices.map((office) => (
              <div key={office.city}>
                <p className="font-display text-lg font-semibold">
                  {office.city}
                </p>
                <p className="mt-1 text-sm text-gray">{office.detail}</p>
              </div>
            ))}

            <div className="space-y-2 border-t border-line pt-8">
              <a
                href={`mailto:${t.contact.email}`}
                className="block text-sm underline-offset-4 transition-colors hover:text-petroleo hover:underline"
              >
                {t.contact.email}
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="block text-sm underline-offset-4 transition-colors hover:text-petroleo hover:underline"
              >
                {t.contact.phone}
              </a>
            </div>
          </div>
        </div>

        <div>
          {success ? (
            <div
              role="status"
              className="rounded-2xl border border-line bg-paper-2 p-8"
            >
              <p className="font-display text-xl font-semibold">
                {t.contact.form.success}
              </p>
              <button
                type="button"
                className="mt-6 text-sm text-petroleo"
                onClick={() => setSuccess(false)}
              >
                ←
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="relative space-y-5" noValidate>
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-mono text-[11px] tracking-wider uppercase"
                >
                  {t.contact.form.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-line-control bg-paper-2 px-4 py-3 text-sm outline-none transition-colors focus:border-petroleo"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-dark">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-mono text-[11px] tracking-wider uppercase"
                >
                  {t.contact.form.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-line-control bg-paper-2 px-4 py-3 text-sm outline-none transition-colors focus:border-petroleo"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-dark">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-[11px] tracking-wider uppercase"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-xl border border-line-control bg-paper-2 px-4 py-3 text-sm outline-none transition-colors focus:border-petroleo"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-dark">{errors.message}</p>
                )}
              </div>

              {/* Campo isca contra spam: invisível para pessoas e para leitores de tela. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              {submitError && (
                <p role="alert" className="rounded-xl border border-red/40 bg-red/5 px-4 py-3 text-sm text-red-dark">
                  {submitError === "unavailable" ? (
                    <>
                      {t.contact.form.errors.unavailable}{" "}
                      <a href={`mailto:${t.contact.email}`} className="font-medium underline underline-offset-2">
                        {t.contact.email}
                      </a>
                      .
                    </>
                  ) : (
                    t.contact.form.errors[submitError]
                  )}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                aria-disabled={sending}
                className="inline-flex min-h-11 items-center rounded-full bg-red px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-red-dark disabled:cursor-progress disabled:opacity-70"
              >
                {sending ? t.contact.form.sending : t.contact.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
