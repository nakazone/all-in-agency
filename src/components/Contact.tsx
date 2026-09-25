"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/context";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const next: Errors = {};
    if (!name.trim()) next.name = t.contact.form.errors.name;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = t.contact.form.errors.email;
    }
    if (!message.trim()) next.message = t.contact.form.errors.message;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: conectar a um endpoint real
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8 lg:px-10">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-red">
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
                className="block text-sm transition-colors hover:text-red"
              >
                {t.contact.email}
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="block text-sm transition-colors hover:text-red"
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
                className="mt-6 text-sm text-red"
                onClick={() => setSuccess(false)}
              >
                ←
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
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
                  className="w-full rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-red"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red">{errors.name}</p>
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
                  className="w-full rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-red"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red">{errors.email}</p>
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
                  className="w-full resize-y rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-red"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-red px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-red-dark"
              >
                {t.contact.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
