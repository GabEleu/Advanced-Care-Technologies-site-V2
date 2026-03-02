"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();
  const f = t.contactForm;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`${f.mailSubject}`);
    const body = encodeURIComponent(
      [
        `${f.mailName} : ${fullName || "-"}`,
        `${f.mailEmail} : ${email || "-"}`,
        `${f.mailOrg} : ${organization || "-"}`,
        "",
        `${f.mailMessage} :`,
        message || "-",
      ].join("\n"),
    );
    return `mailto:gabriel.eleuterio@digiskin-act.fr?subject=${subject}&body=${body}`;
  }, [email, fullName, message, organization, f]);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-bold">
          <span>{f.name}</span>
          <input
            className="h-11 w-full rounded-2xl border bg-background px-4 text-sm outline-none ring-ring focus:ring-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />
        </label>
        <label className="space-y-2 text-sm font-bold">
          <span>{f.email}</span>
          <input
            className="h-11 w-full rounded-2xl border bg-background px-4 text-sm outline-none ring-ring focus:ring-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            autoComplete="email"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-bold">
        <span>{f.organization}</span>
        <input
          className="h-11 w-full rounded-2xl border bg-background px-4 text-sm outline-none ring-ring focus:ring-2"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          autoComplete="organization"
        />
      </label>
      <label className="space-y-2 text-sm font-bold">
        <span>{f.message}</span>
        <textarea
          className="min-h-32 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          {f.submit}
        </button>
        <a
          className="text-sm font-bold text-foreground/80 hover:text-foreground"
          href={mailtoHref}
        >
          {f.emailLink}
        </a>
      </div>

      <div className="text-xs leading-relaxed text-muted-foreground">{f.hint}</div>
    </form>
  );
}
