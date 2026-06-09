import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: "GXON HR Management Admin Dashboard Template",
  description: "GXON is a professional and modern HR Management Admin Dashboard Template built with Next.js & Bootstrap.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        {/* begin::GXON Required Stylesheets */}
        <link rel="stylesheet" href="/assets/libs/flaticon/css/all/all.css" />
        <link rel="stylesheet" href="/assets/libs/lucide/lucide.css" />
        <link rel="stylesheet" href="/assets/libs/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/libs/simplebar/simplebar.css" />
        <link rel="stylesheet" href="/assets/libs/node-waves/waves.css" />
        <link rel="stylesheet" href="/assets/libs/bootstrap-select/css/bootstrap-select.min.css" />
        {/* end::GXON Required Stylesheets */}

        {/* begin::GXON CSS Stylesheets */}
        <link rel="stylesheet" href="/assets/libs/flatpickr/flatpickr.min.css" />
        <link rel="stylesheet" href="/assets/libs/datatables/datatables.min.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" id="gxon-main-stylesheet" />
        {/* end::GXON CSS Stylesheets */}
      </head>
      <body>
        {children}

        {/* begin::Required Scripts loaded globally */}
        <Script src="/assets/libs/global/global.min.js" strategy="beforeInteractive" />
        <Script src="/assets/libs/sortable/Sortable.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/chartjs/chart.js" strategy="afterInteractive" />
        <Script src="/assets/libs/flatpickr/flatpickr.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/apexcharts/apexcharts.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/datatables/datatables.min.js" strategy="afterInteractive" />
        {/* end::Required Scripts */}
      </body>
    </html>
  );
}
