"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { useHand } from "@/lib/hand";

// Poses do Otto na faixa do contato (repetida duas vezes para o laço contínuo).
const strip = [
  "otto-02-boas-vindas", "otto-21-preto-assinatura", "otto-09-pensativo", "otto-12-comemorando",
  "otto-22-preto-acolhe", "otto-11-explicando", "otto-15-focado-criando", "otto-23-preto-curioso",
  "otto-04-aponta-direita", "otto-16-ouvindo", "otto-10-curioso", "otto-18-flutuando",
];

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
  const { hand } = useHand();
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
  // Texto que a mão escolhida pôs na mensagem; só é trocado enquanto a pessoa não editou.
  const handLine = useRef("");

  useEffect(() => {
    const names = t.hand.cards.filter((c) => hand.includes(c.id)).map((c) => c.name);
    const line = names.length ? `${t.contact.handPrefix} ${names.join(" + ")}\n\n` : "";
    // Guarda a linha anterior antes de atualizar: a função abaixo roda depois, na renderização.
    const previous = handLine.current;
    handLine.current = line;
    setMessage((prev) => {
      if (prev === "" || prev === previous) return line;
      if (previous && prev.startsWith(previous)) return line + prev.slice(previous.length);
      // Mão vazia até agora e texto já escrito: a linha da mão entra antes do texto.
      if (!previous) return line + prev;
      return prev;
    });
  }, [hand, t]);

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

  // taste-skill-ignore: o anel aparece só no foco do teclado, não em repouso.
  const field =
    "w-full rounded-[16px] bg-white px-5 py-4 text-lg text-ink placeholder:text-gray outline-none transition-[box-shadow] duration-200 ";
  const focusRing = "focus-visible:shadow-[0_0_0_3px_var(--ink)]"; // taste-skill-ignore: só no foco
  const fieldError = (msg?: string, id?: string) =>
    msg ? (
      <p id={id} className="mt-2 text-[15px] font-semibold text-white">
        <span aria-hidden="true">▲ </span>
        {msg}
      </p>
    ) : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="overflow-hidden bg-red pt-12 pb-24 text-white md:pb-28">
      {/* Faixa de poses do Otto: decorativa, passa devagar e pausa com o mouse ou o foco. */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track flex w-max gap-3">
          {[...strip, ...strip].map((pose, i) => (
            <div key={i} className="relative h-[110px] w-[110px] shrink-0 rounded-[24px] bg-white/10 md:h-[150px] md:w-[150px]">
              <Image src={`/otto/sm/${pose}.png`} alt="" fill sizes="150px" className="object-contain p-2" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1440px] gap-12 px-5 md:mt-20 md:grid-cols-12 md:gap-6 md:px-8">
        <div className="md:col-span-5">
          <h2 id="contact-title" data-reveal className="font-display text-[clamp(40px,5vw,76px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
            {t.contact.title}
          </h2>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-6 max-w-[40ch] text-lg leading-[1.55]">
            {t.contact.lead}
          </p>
          {/* Contato direto ao lado do Otto ouvindo. */}
          <div className="mt-10 flex items-end justify-between gap-6">
            <div data-reveal style={{ "--i": 2 } as React.CSSProperties} className="flex flex-col gap-1 text-lg">
              <a href={`mailto:${t.contact.email}`} className="inline-flex min-h-11 w-fit items-center font-semibold break-all underline underline-offset-4 hover:no-underline">
                {t.contact.email}
              </a>
              <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 w-fit items-center font-semibold underline underline-offset-4 hover:no-underline">
                {t.contact.phone}
              </a>
              <p className="mt-2 text-[15px]">{t.contact.places}</p>
            </div>
            <div data-reveal style={{ "--i": 3 } as React.CSSProperties} className="relative hidden aspect-square w-[34%] shrink-0 md:block">
              <Image src="/otto/otto-16-ouvindo.png" alt="" fill sizes="16vw" className="otto-float object-contain" />
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {success ? (
            <div role="status" className="rounded-[24px] bg-ink p-8 text-paper md:p-10">
              <p className="font-display text-[24px] leading-[1.2] font-extrabold">{t.contact.form.success}</p>
              <button
                type="button"
                className="mt-6 inline-flex min-h-12 items-center rounded-full bg-paper px-6 text-base font-semibold text-ink transition-transform duration-200 active:scale-[0.97]"
                onClick={() => setSuccess(false)}
              >
                {t.contact.form.again}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="relative flex flex-col gap-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-[15px] font-semibold">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`${field} ${focusRing}`}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {fieldError(errors.name, "contact-name-error")}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-[15px] font-semibold">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${field} ${focusRing}`}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {fieldError(errors.email, "contact-email-error")}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-[15px] font-semibold">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${field} ${focusRing} resize-y`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {fieldError(errors.message, "contact-message-error")}
              </div>

              {/* Campo isca contra spam: invisível para pessoas e para leitores de tela. */}
              {/* taste-skill-ignore: campo isca fora da tela, não é linha */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden" /* taste-skill-ignore */>
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
                <p role="alert" className="rounded-[16px] bg-ink px-5 py-4 text-base text-paper">
                  <span aria-hidden="true">▲ </span>
                  {submitError === "unavailable" ? (
                    <>
                      {t.contact.form.errors.unavailable}{" "}
                      <a href={`mailto:${t.contact.email}`} className="font-semibold underline underline-offset-2">
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
                className="inline-flex min-h-14 w-fit items-center rounded-full bg-ink px-8 text-lg font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-ink-2 active:scale-[0.97] disabled:cursor-progress disabled:opacity-80"
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
