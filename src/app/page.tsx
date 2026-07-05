"use client";

import Image from "next/image";
import {
  CheckCircle2,
  ExternalLink,
  FileArchive,
  FolderOpen,
  MonitorCheck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const imageClass =
  "mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-sm";

function GuideImage({
  alt,
  src,
}: Readonly<{
  alt: string;
  src: string;
}>) {
  return (
    <figure className={imageClass}>
      <Image
        alt={alt}
        className="h-auto w-full rounded-md object-contain"
        height={720}
        sizes="(max-width: 768px) 100vw, 720px"
        src={src}
        width={1100}
      />
    </figure>
  );
}

function StepShell({
  children,
  index,
  title,
}: Readonly<{
  children: React.ReactNode;
  index: number | string;
  title: string;
}>) {
  return (
    <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="flex gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white text-sm font-bold text-emerald-700 shadow-sm">
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold tracking-normal text-slate-950">{title}</h4>
          <div className="mt-2 space-y-3 leading-7 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </li>
  );
}

function RunAsAdminVisual() {
  return (
    <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3">
        <FolderOpen aria-hidden="true" className="size-5 text-amber-600" />
        <span className="text-sm font-bold text-slate-800">
          Find the Downloads folder
        </span>
      </div>

      <p className="mb-3 text-sm leading-6 text-slate-600">
        Open File Explorer, click <strong>This PC</strong>, then open{" "}
        <strong>Downloads</strong>.
      </p>

      <GuideImage
        alt="How to find the Downloads folder in Windows File Explorer"
        src="/images/find-downloads-folder.png"
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_220px] sm:items-start">
        <div className="rounded-md border border-sky-300 bg-sky-50 p-3">
          <div className="flex items-center gap-3">
            <Image
              alt="Office 2024 installer file icon"
              className="size-10 rounded object-contain"
              height={64}
              src="/images/office-installer-icon.png"
              width={64}
            />
            <div className="min-w-0">
              <p className="break-words text-sm font-bold text-slate-950">
                Office_2024_EN_64Bits.exe
              </p>
              <p className="text-xs text-slate-600">Application</p>
            </div>
          </div>
          <p className="mt-3 text-sm font-semibold text-sky-800">
            Inside Downloads, right-click this installer file.
          </p>
        </div>

        <div className="rounded-md border border-slate-300 bg-white py-2 text-sm shadow-lg">
          {[
            "Open",
            "Run as administrator",
            "Share",
            "Copy as path",
            "Properties",
          ].map((item) => (
            <div
              className={
                item === "Run as administrator"
                  ? "bg-emerald-100 px-3 py-2 font-bold text-emerald-900"
                  : "px-3 py-2 text-slate-700"
              }
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedGuide, setSelectedGuide] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8fb] px-5 py-10 text-slate-950">
      <section className="w-full max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <ShieldCheck aria-hidden="true" className="size-8" />
          </div>
          <p className="text-xl font-bold">Antivirusbuddy_PH</p>
          <p className="mt-1 text-sm text-slate-600">Customer Support Center</p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <h1 className="text-center text-3xl font-bold tracking-normal sm:text-4xl">
            What do you need help with?
          </h1>

          <div className="mt-7 grid gap-3">
            <button
              className="flex w-full items-center justify-between gap-4 rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-4 text-left transition hover:border-emerald-300 hover:bg-emerald-100"
              onClick={() => setSelectedGuide(true)}
              type="button"
            >
              <span>
                <span className="block text-base font-bold text-emerald-950">
                  MS Office 2024 (Genuine)
                </span>
                <span className="mt-1 block text-sm text-emerald-800">
                  Easy installation guide
                </span>
              </span>
              <CheckCircle2
                aria-hidden="true"
                className="size-5 shrink-0 text-emerald-700"
              />
            </button>
          </div>
        </div>

        {selectedGuide ? (
          <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-normal text-emerald-700">
                MS Office 2024 (Genuine)
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-normal">
                Easy Installation
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
                Please complete the prerequisite steps first, then follow the
                installation and activation steps exactly in order.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-8">
              <RotateCcw aria-hidden="true" className="size-6 text-emerald-700" />
              <h3 className="text-xl font-bold tracking-normal">
                Prerequisite
              </h3>
            </div>

            <ol className="mt-4 grid gap-4">
              <StepShell index={1} title="Close all Office apps">
                <p>
                  Save your work, then close Word, Excel, PowerPoint, Outlook,
                  OneNote, and any Office setup windows.
                </p>
              </StepShell>

              <StepShell
                index={2}
                title="Uninstall previous Microsoft Office versions"
              >
                <p>
                  Search for <strong>Control Panel</strong>.
                </p>
                <GuideImage alt="Search Control Panel" src="/images/img a.webp" />

                <p>
                  Click <strong>Programs</strong>.
                </p>
                <GuideImage alt="Click Programs in Control Panel" src="/images/img b.png" />

                <p>
                  Click <strong>Uninstall a program</strong>.
                </p>
                <GuideImage alt="Click Uninstall a program" src="/images/img c.png" />

                <p>
                  Uninstall Microsoft Office apps such as Microsoft 365,
                  Microsoft Office Professional Plus LTSC, Microsoft Project,
                  and Microsoft Visio.
                </p>
                <GuideImage alt="Uninstall Microsoft Office apps" src="/images/img d.png" />
                <GuideImage alt="More Microsoft Office apps to uninstall" src="/images/img d2.png" />
              </StepShell>

              <StepShell index={3} title="Restart device">
                <p>
                  After uninstalling previous Office apps, restart your device
                  before installing MS Office 2024.
                </p>
              </StepShell>
            </ol>

            <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-8">
              <FileArchive aria-hidden="true" className="size-6 text-sky-700" />
              <h3 className="text-xl font-bold tracking-normal">
                Installation
              </h3>
            </div>

            <ol className="mt-4 grid gap-4">
              <StepShell index={1} title="Download and install">
                <p>
                  Download the installer from the link below, then right-click
                  the installer file and choose{" "}
                  <strong>Run as administrator</strong>.
                </p>
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
                  href="https://transfer.it/t/8oXDMI5z3JCI"
                  rel="noreferrer"
                  target="_blank"
                >
                  Download installer
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
                <RunAsAdminVisual />
                <p className="border-t border-slate-200 pt-4 font-semibold text-slate-800">
                  After running the installer as administrator, continue with
                  the setup window shown below.
                </p>
                <GuideImage alt="Download and install Office 2024" src="/images/img 1.png" />
              </StepShell>

              <StepShell index={2} title="Open Word or Excel">
                <p>Open Word or Excel after installation.</p>
                <GuideImage alt="Open Word or Excel" src="/images/img 2.png" />

                <p>
                  If the license agreement appears, accept it. Then go to{" "}
                  <strong>Account</strong> at the bottom-left of the app. Select{" "}
                  <strong>Change Product Key</strong> or{" "}
                  <strong>Activate Product</strong>.
                </p>
                <GuideImage alt="Open Account and choose activation option" src="/images/img 3.png" />

                <p>
                  Enter the 25-character Office activation product key you
                  received from us, then click <strong>Activate Office</strong>.
                </p>
                <GuideImage alt="Enter Office product key" src="/images/img 4.jpg" />

                <p>
                  Once entered, close MS Office right away, then reopen it once
                  again. It may still not be activated. Continue to Step 4.
                </p>
              </StepShell>

              <StepShell index={4} title="Start telephone activation">
                <p>
                  Go to <strong>Account</strong> again, then click{" "}
                  <strong>Switch License</strong> or{" "}
                  <strong>Change Product Key</strong>.
                </p>
                <p>
                  Select{" "}
                  <strong>I want to activate the software by telephone</strong>.
                </p>
                <GuideImage alt="Choose telephone activation" src="/images/img 5.png" />

                <p>
                  Visit Microsoft Visual Support, then click{" "}
                  <strong>Let&apos;s get started</strong>.
                </p>
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                  href="https://visualsupport.microsoft.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Open Microsoft Visual Support
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
                <GuideImage alt="Click lets get started" src="/images/img 6.png" />

                <p>
                  Complete Microsoft&apos;s security verification, then click{" "}
                  <strong>Submit</strong>.
                </p>
                <GuideImage alt="Complete Microsoft security verification" src="/images/img 7.png" />

                <p>
                  Click <strong>Proceed to sign in</strong>, then sign in using
                  your personal Microsoft account.
                </p>
                <GuideImage alt="Proceed to sign in" src="/images/img 8.png" />

                <p>
                  Once signed in, click{" "}
                  <strong>Activate a Microsoft Product</strong>.
                </p>
                <GuideImage alt="Activate a Microsoft Product" src="/images/img 9.png" />

                <p>
                  Choose <strong>Microsoft Office</strong>, choose{" "}
                  <strong>Windows</strong>, then choose{" "}
                  <strong>Office 2024</strong>.
                </p>
                <GuideImage alt="Choose Microsoft Office" src="/images/img 10.png" />
                <GuideImage alt="Choose Windows" src="/images/img 11.png" />
                <GuideImage alt="Choose Office 2024" src="/images/img 12.png" />
              </StepShell>

              <StepShell index={5} title="Enter the Installation ID">
                <p>
                  To find the Installation ID, go back to the MS Office
                  activation wizard window.
                </p>
                <GuideImage alt="Find Installation ID in Office activation wizard" src="/images/img 13.jpg" />

                <p>
                  You cannot copy and paste the Installation ID because
                  Microsoft does not allow it. Please manually type the numbers
                  into the Microsoft Visual Support page, then click{" "}
                  <strong>Submit</strong>.
                </p>
                <GuideImage alt="Enter Installation ID manually" src="/images/img 14.avif" />

                <p>
                  Optional: If the portal asks how many computers have been
                  installed with this copy and this is a new activation, enter{" "}
                  <strong>0</strong>.
                </p>
                <GuideImage alt="Enter zero computers if this is a new activation" src="/images/img 15.avif" />
              </StepShell>

              <StepShell index={6} title="Enter the Confirmation ID">
                <p>
                  After clicking Submit, the Confirmation ID will appear. A copy
                  button may be shown, but you still need to manually type the
                  Confirmation ID into the MS Office activation wizard.
                </p>
                <GuideImage alt="Confirmation ID shown in Microsoft Visual Support" src="/images/16.avif" />

                <p>
                  Once the Confirmation ID is entered, click{" "}
                  <strong>Next</strong>. MS Office should now be activated and
                  ready to use.
                </p>
                <GuideImage alt="Office activation completed" src="/images/17.avif" />
              </StepShell>
            </ol>

            <div className="mt-7 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-center">
              <MonitorCheck
                aria-hidden="true"
                className="mx-auto size-7 text-emerald-700"
              />
              <p className="mt-2 font-bold text-emerald-950">
                Done. You can now start using MS Office 2024.
              </p>
            </div>

            <div className="mt-5 text-center">
              <button
                className="text-sm font-bold text-slate-600 underline-offset-4 hover:text-slate-950 hover:underline"
                onClick={() => setSelectedGuide(false)}
                type="button"
              >
                Back to choices
              </button>
            </div>
          </section>
        ) : null}
      </section>
    </main>
  );
}
