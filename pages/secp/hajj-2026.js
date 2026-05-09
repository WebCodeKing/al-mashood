import Head from 'next/head';
import Image from 'next/image';
import {
  BadgeCheck,
  Building2,
  ExternalLink,
  FileCheck2,
  FileText,
  Landmark,
  Layers3,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';

const documentSections = [
  {
    id: 'mora',
    title: 'Ministry of Religious Affairs',
    shortTitle: 'MORA',
    description: 'Ministry recognition, approval, and compliance attachments for Hajj 2026.',
    icon: Landmark,
    documents: [
      {
        title: 'Recognition Letter',
        description: 'Official ministry recognition attachment.',
        preview: '/SECP/2025/Recognition Letter.jpg',
        href: '/SECP/2025/recognition-letter.pdf',
      },
      {
        title: 'Approval Attachment',
        description: 'Supporting approval or ministry correspondence.',
        preview: '/SECP/2025/CTC OF INC. FORM-II_Page_1.jpg',
        href: '/SECP/2025/CTC OF INC. FORM-II.pdf',
      },
      {
        title: 'Compliance Attachment',
        description: 'Additional MORA compliance record for public reference.',
        preview: '/SECP/2025/form-III/form-III_page-0001.jpg',
        href: '/SECP/2025/form-III.pdf',
      },
    ],
  },
  {
    id: 'association',
    title: 'Association Documents',
    shortTitle: 'Association',
    description: 'Association membership, registration, and supporting legal attachments.',
    icon: UsersRound,
    documents: [
      {
        title: 'Association Certificate',
        description: 'Membership or association registration certificate.',
        preview: '/SECP/2024/Certifiacte of Incorporation.png',
        href: '/SECP/2024/certifiacte-of-incorporation.pdf',
      },
      {
        title: 'Association Form II',
        description: 'Association statutory attachment and particulars.',
        preview: '/SECP/2025/CTC OF INC. FORM-II_Page_3.jpg',
        href: '/SECP/2025/CTC OF INC. FORM-II.pdf',
      },
      {
        title: 'Association Form III',
        description: 'Association compliance and supporting information.',
        preview: '/SECP/2025/CTC OF INC. FORM-II_Page_4.jpg',
        href: '/SECP/2025/form-III.pdf',
      },
    ],
  },
  {
    id: 'hoap',
    title: 'HOAP Attachments',
    shortTitle: 'HOAP',
    description: 'Hajj Operators Association of Pakistan attachments, certification, and records.',
    icon: ShieldCheck,
    documents: [
      {
        title: 'HOAP Certificate',
        description: 'Official HOAP certificate or membership record.',
        preview: '/SECP/2025/CTC OF INC. FORM-II_Page_5.jpg',
        href: '/SECP/2024/FORM-II (Al-mashood).pdf',
      },
      {
        title: 'HOAP Attachment I',
        description: 'Supporting HOAP operational or compliance attachment.',
        preview: '/SECP/2025/Recognition Letter.jpg',
        href: '/SECP/2025/recognition-letter.pdf',
      },
      {
        title: 'HOAP Attachment II',
        description: 'Additional HOAP record for official reference.',
        preview: '/SECP/2025/form-III/form-III_page-0001.jpg',
        href: '/SECP/2025/form-III.pdf',
      },
    ],
  },
];

const stats = [
  { label: 'Official Sections', value: '03', icon: Layers3 },
  { label: 'Attachment Cards', value: '09', icon: FileCheck2 },
  { label: 'Access', value: 'Documents Ready', icon: BadgeCheck },
];

function DocumentCard({ document }) {
  const content = (
    <>
      <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
        <Image
          src={document.preview}
          alt={`${document.title} preview`}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 42vw, 92vw"
          className="object-contain p-3 transition duration-300 group-hover:scale-[1.025]"
        />
        <div className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
          PDF Document
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <div className="mb-3 flex items-start gap-3">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#ce9733]/10 text-[#ce9733]">
            <FileText size={21} strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-lg font-bold leading-snug text-gray-900">{document.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-gray-600">{document.description}</p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
            Legal Attachment
          </span>
          <span className="inline-flex items-center gap-2 rounded-md bg-[#ce9733] px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-[#b17c29]">
            Open PDF
            <ExternalLink size={15} strokeWidth={2} />
          </span>
        </div>
      </div>
    </>
  );

  return (
    <a
      href={document.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#ce9733]/50 hover:shadow-xl"
    >
      {content}
    </a>
  );
}

function DocumentSection({ section, index }) {
  const Icon = section.icon;

  return (
    <section id={section.id} className={index % 2 === 0 ? 'scroll-mt-24 bg-white py-16' : 'scroll-mt-24 bg-gray-50 py-16'}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#ce9733]/25 bg-[#ce9733]/10 px-4 py-2 text-sm font-semibold text-[#8a641f]">
              <Icon size={19} strokeWidth={1.8} />
              {section.shortTitle}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{section.title}</h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-gray-600 lg:justify-self-end">
            {section.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {section.documents.map((document) => (
            <DocumentCard key={document.title} document={document} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Hajj2026LegalAttachments() {
  return (
    <>
      <Head>
        <title>SECP Hajj 2026 Legal Attachments | Al Mashood Munazzam</title>
        <meta
          name="description"
          content="MORA, Association, and HOAP legal attachments for Al Mashood Munazzam Pvt Ltd Hajj 2026."
        />
      </Head>

      <main className="bg-white">
        {/* <section className="px-6 py-16 sm:px-10 lg:py-20">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl max-lg:text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#ce9733]">
                  SECP Legal Attachments
                </p>
                <h1 className="bg-gradient-to-r from-[#ce9733] to-[#8a641f] bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl">
                  Hajj 2026 Official Legal Records
                </h1>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  A refined public archive for official Hajj 2026 attachments, arranged by Ministry of Religious Affairs, Association documents, and HOAP records for clear review and direct document access.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {stats.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-left shadow-sm max-lg:text-center">
                        <Icon className="mb-4 text-[#ce9733] max-lg:mx-auto" size={28} strokeWidth={1.8} />
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">{item.label}</p>
                        <p className="mt-2 text-base font-bold text-gray-900">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
                <Image
                  src="/company-profile/hero-section.jpg"
                  alt="Al-Mashood Munazzam official records"
                  width={900}
                  height={700}
                  priority
                  className="h-full min-h-[380px] w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/85 to-transparent p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9b56c]">Legal Documentation</p>
                  <p className="mt-2 text-2xl font-bold">Organized records for transparent compliance.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-gray-50 py-14">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-[#ce9733] text-white shadow-lg">
              <Building2 size={28} strokeWidth={1.8} />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Attachments by Authority
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
              Each section groups its related PDF attachments in a clean, professional format for easy review.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {documentSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-lg border border-[#ce9733]/30 bg-white px-5 py-3 text-sm font-semibold text-[#8a641f] shadow-sm transition hover:border-[#ce9733] hover:bg-[#ce9733] hover:text-white"
                >
                  {section.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </section>

        {documentSections.map((section, index) => (
          <DocumentSection key={section.title} section={section} index={index} />
        ))}

        {/* <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-lg border border-[#ce9733]/20 bg-gradient-to-r from-[#ce9733] to-[#8a641f] p-8 text-white shadow-lg md:p-10">
              <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                    Notice
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">Document Access</h2>
                </div>
                <p className="text-base leading-8 text-white/90">
                  This archive provides direct access to the published attachments maintained for regulatory reference, transparency, and official record review.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
