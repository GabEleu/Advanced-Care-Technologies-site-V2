"use client";

import { useMemo, useState } from "react";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Demande de démo — Advanced Care Technologies");
    const body = encodeURIComponent(
      [
        `Nom : ${fullName || "-"}`,
        `Email : ${email || "-"}`,
        `Organisation : ${organization || "-"}`,
        "",
        "Message :",
        message || "-",
      ].join("\n"),
    );
    return `mailto:contact@advancedcaretechnologies.fr?subject=${subject}&body=${body}`;
  }, [email, fullName, message, organization]);

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
          <span>Nom</span>
          <input
            className="h-11 w-full rounded-2xl border bg-background px-4 text-sm outline-none ring-ring focus:ring-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />
        </label>
        <label className="space-y-2 text-sm font-bold">
          <span>Email</span>
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
        <span>Organisation</span>
        <input
          className="h-11 w-full rounded-2xl border bg-background px-4 text-sm outline-none ring-ring focus:ring-2"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          autoComplete="organization"
        />
      </label>
      <label className="space-y-2 text-sm font-bold">
        <span>Message</span>
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
          Envoyer la demande
        </button>
        <a
          className="text-sm font-bold text-foreground/80 hover:text-foreground"
          href={mailtoHref}
        >
          Ou écrire directement par email
        </a>
      </div>

      <div className="text-xs leading-relaxed text-muted-foreground">
        En cliquant sur “Envoyer la demande”, votre client email s’ouvrira avec un message prérempli.
      </div>
    </form>
  );
}

