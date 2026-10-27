
import { useState } from "react";

const bankingAccounts = [
  {
    id: "hbl-pkr",
    bank: "Habib Bank Limited",
    shortName: "HBL",
    accountType: "PKR Chequing Account",
    currency: "PKR",
    accountNumber: "5037-70004640-03",
    accountTitle: "AL-MASHOOD MUNAZZAM (PRIVATE) LIMITED",
    iban: "PK96HABB0050377000464003",
    branch: "Haider Road Saddar Branch Rawalpindi",
    swift: "HABBPKKA",
    description:
      "Primary Pakistani rupee account for authorized company banking transactions.",
    icon: "bank",
    featured: true,
  },
  {
    id: "non-chequing",
    bank: "Samba Bank Limited",
    shortName: "SBL",
    accountType: "PKR-Chequing Account",
    currency: "PKR",
    accountNumber: "2001331399",
    accountTitle: "AL MASHOOD MUNAZZAM PVT LTD",
    iban: "PK64SAMB0000002001331399",
    branch: "Corporate Branch, Rawalpindi",
    swift: "SAMBPKKA",
    description:
      "Pakistani Rupee (PKR) account for managing authorized company payments, local banking transactions, and other business-related financial activities.",
    icon: "Bank",
    featured: false,
  },
  {
    id: "non-chequing",
    bank: "Samba Bank Limited",
    shortName: "SBL",
    accountType: "Non-Chequing Account",
    currency: "PKR",
    accountNumber: "2001331418",
    accountTitle: "AL MASHOOD MUNAZZAM PVT LTD",
    iban: "PK36SAMB0000002001331418",
    branch: "Corporate Branch, Rawalpindi",
    swift: "SAMBPKKA",
    description:
      "Company account designated for the relevant banking arrangements.",
    icon: "Bank",
    featured: false,
  },
    {
    id: "samba-usd",
    bank: "Samba Bank Limited",
    shortName: "SBL",
    accountType: "USD Foreign Currency Account",
    currency: "USD",
    accountNumber: "2001331429",
    accountTitle: "AL MASHOOD MUNAZZAM PVT LTD",
    iban: "PK30SAMB0000002001331429",
    branch: "Main Branch, Rawalpindi",
    swift: "SAMBPKKA",
    description:
      "Foreign currency account for authorized US dollar transactions.",
    icon: "bank",
    featured: false,
  },
];

function BankIcon({ type }) {
  const common = {
    className: "h-7 w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "globe") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    );
  }

  if (type === "file") {
    return (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h8" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M3 10h18M5 10v9M9 10v9M15 10v9M19 10v9M2 20h20M12 3 2 8h20z" />
    </svg>
  );
}

function DetailRow({ label, value, onCopy }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!value || !onCopy) return;

    try {
      await onCopy(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex items-start justify-between gap-3 border-b border-gray-100 py-3 last:border-b-0">
      <span className="shrink-0 text-sm text-gray-500">{label}</span>

      <div className="flex min-w-0 items-start gap-2">
        <span className="break-all text-right text-sm font-semibold text-gray-800">
          {value}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          title={`Copy ${label}`}
          className="shrink-0 rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-[#a97518] focus:outline-none focus:ring-2 focus:ring-[#ce9733]"
        >
          {copied ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <rect x="8" y="8" width="13" height="13" rx="2" />
              <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

function AccountCard({ account, index }) {
  const [expanded, setExpanded] = useState(false);

  async function copyText(value) {
    if (!navigator.clipboard) {
      throw new Error("Clipboard unavailable");
    }

    await navigator.clipboard.writeText(value);
  }

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        account.featured
          ? "border-[#ce9733]/60 shadow-md"
          : "border-gray-200 shadow-sm"
      }`}
    >
      <div className="h-1.5 bg-[#ce9733]" />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ce9733]/10 text-[#a97518] transition group-hover:bg-[#ce9733]/15">
            <BankIcon type={account.icon} />
          </div>

          <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-[11px] font-bold tracking-wider text-gray-500">
            ACCOUNT {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a97518]">
          {account.bank}
        </p>

        <h3 className="mt-2 text-xl font-bold leading-snug text-gray-900">
          {account.accountType}
        </h3>

        {/* <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
          {account.description}
        </p> */}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-700">
            {account.currency}
          </span>

          <span className="rounded-lg bg-[#ce9733]/10 px-3 py-1.5 text-xs font-semibold text-[#8a6013]">
            Company Account
          </span>
        </div>

        <div className="mt-5 rounded-xl bg-gray-50 px-4">
          <DetailRow
            label="Account Title"
            value={account.accountTitle}
            onCopy={copyText}
          />

          <DetailRow
            label="Account Number"
            value={account.accountNumber}
            onCopy={copyText}
          />
        </div>

        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-[#ce9733] hover:bg-[#ce9733]/5 focus:outline-none focus:ring-2 focus:ring-[#ce9733]"
          >
            {expanded ? "Hide Additional Details" : "View Additional Details"}

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`h-4 w-4 transition-transform duration-200 ${
                expanded ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {expanded && (
            <div className="mt-3 rounded-xl border border-gray-100 px-4">
              <DetailRow
                label="IBAN"
                value={account.iban}
                onCopy={copyText}
              />

              <DetailRow
                label="SWIFT Code"
                value={account.swift}
                onCopy={copyText}
              />

              <DetailRow
                label="Branch"
                value={account.branch}
                onCopy={copyText}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function BankingDetails() {
  return (
    <section
      id="banking-details"
      aria-labelledby="banking-heading"
      className="scroll-mt-24 bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-[#ce9733]/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#946512] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#ce9733]" />
            Corporate Information
          </div> */}

          <h2
            id="banking-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl"
          >
            Banking Details
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#ce9733]" />

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Official banking information for Al-Mashood Munazzam Pvt. Ltd.
            View the account details below for corporate reference and
            authorized verification.
          </p>
        </div>

        {/* <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ce9733]/10 text-[#a97518]">
              <BankIcon type="bank" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Banking Partners
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Official financial institutions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ce9733]/10 text-[#a97518]">
              <BankIcon type="globe" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Multiple Currencies
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Local and foreign currency
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ce9733]/10 text-[#a97518]">
              <BankIcon type="file" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Corporate Records
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Banking information for reference
              </p>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bankingAccounts.map((account, index) => (
            <AccountCard
              key={account.id}
              account={account}
              index={index}
            />
          ))}
        </div>

        {/* <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#ce9733]/25 bg-white p-4 sm:p-5">
          <div className="mt-0.5 shrink-0 text-[#a97518]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 8h.01" />
            </svg>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Banking Information Notice
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please verify all banking information against official bank
              documents before initiating any transaction. Account details
              displayed on this page are for corporate reference only.
            </p>
          </div>
        </div> */}

        {/* <p className="mt-6 text-center text-xs leading-5 text-gray-400">
          © {new Date().getFullYear()} Al-Mashood Munazzam Pvt. Ltd.
          {" "}All rights reserved.
        </p> */}
      </div>
    </section>
  );
}
