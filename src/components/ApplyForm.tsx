"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import type { ApplyFormCopy } from "@/lib/i18n";

type FormValues = {
  company: string;
  email: string;
  message: string;
  name: string;
  website: string;
};

type SubmitState = "error" | "idle" | "submitting" | "success";

type ApplyFormProps = {
  copy: ApplyFormCopy;
};

const initialValues: FormValues = {
  company: "",
  email: "",
  message: "",
  name: "",
  website: "",
};

function errorMessageFor(status: number, copy: ApplyFormCopy) {
  if (status === 429) {
    return copy.errors.rateLimited;
  }

  if (status === 400) {
    return copy.errors.validation;
  }

  return copy.errors.default;
}

export function ApplyForm({ copy }: ApplyFormProps) {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply/", {
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = (await response.json()) as { ok?: boolean };

      if (!response.ok || !result.ok) {
        setSubmitState("error");
        setErrorMessage(errorMessageFor(response.status, copy));
        return;
      }

      setFormValues(initialValues);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
      setErrorMessage(copy.errors.default);
    }
  }

  function updateField(field: keyof FormValues, value: string) {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <div className="apply-field-grid">
        <label>
          <span>{copy.name}</span>
          <input
            autoComplete="name"
            maxLength={120}
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            required
            type="text"
            value={formValues.name}
          />
        </label>
        <label>
          <span>{copy.email}</span>
          <input
            autoComplete="email"
            maxLength={180}
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={formValues.email}
          />
        </label>
      </div>
      <label>
        <span>{copy.company}</span>
        <input
          autoComplete="organization"
          maxLength={160}
          name="company"
          onChange={(event) => updateField("company", event.target.value)}
          required
          type="text"
          value={formValues.company}
        />
      </label>
      <label>
        <span>{copy.message}</span>
        <textarea
          maxLength={4000}
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          required
          rows={8}
          value={formValues.message}
        />
      </label>
      <div className="form-honeypot" aria-hidden="true">
        <label>
          <span>{copy.website}</span>
          <input
            autoComplete="off"
            name="website"
            onChange={(event) => updateField("website", event.target.value)}
            tabIndex={-1}
            type="text"
            value={formValues.website}
          />
        </label>
      </div>
      <div className="apply-form-footer">
        <button
          className="primary-button apply-submit"
          disabled={submitState === "submitting"}
          type="submit"
        >
          <span>{submitState === "submitting" ? copy.submitting : copy.submit}</span>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p className="apply-form-note">{copy.note}</p>
      </div>
      <div className="apply-form-status" aria-live="polite">
        {submitState === "success" ? <p className="apply-success">{copy.success}</p> : null}
        {submitState === "error" ? <p className="apply-error">{errorMessage}</p> : null}
      </div>
    </form>
  );
}
