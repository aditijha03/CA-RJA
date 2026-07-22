import React from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "../components/common/Container";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | R Jhunjhunwala & Associates</title>
        <meta
          name="description"
          content="Privacy Policy for R Jhunjhunwala & Associates, outlining our information collection, data security, and confidentiality practices for our Chartered Accountant services."
        />
        <link rel="canonical" href="https://rjindia.com/privacy" />
      </Helmet>

      <section className="py-24 bg-bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071D49_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* We use max-w-[800px] to constrain the width for readability */}
        <Container className="relative z-10 max-w-[800px] mx-auto">
          
          {/* Header Section */}
          <div className="mb-14 border-b border-[#E7E7E7] pb-10">
            <h1 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-6">
              Privacy Policy
            </h1>
            
            {/* Page Intro added here */}
            <p className="text-lg text-text-main leading-relaxed mb-6">
              This Privacy Policy explains how R Jhunjhunwala & Associates collects, uses, stores, and protects information when you use this website or engage our professional services.
            </p>

            <p className="font-sans text-xs text-neutral-500 uppercase tracking-wider">
              <span className="font-semibold text-primary">Effective Date:</span> July 22, 2026<br/>
              <span className="font-semibold text-primary mt-1 inline-block">Last Updated Date:</span> July 22, 2026
            </p>
          </div>

          {/* Content Section - Using custom leading and spacing instead of generic prose */}
          <div className="text-text-main leading-[1.8] space-y-12">
            
            <div>
              <p>
                At <strong>R Jhunjhunwala & Associates</strong>, we are committed to protecting your privacy and ensuring the security of your personal and financial information. We process personal information in accordance with applicable Indian laws and professional obligations.
              </p>
            </div>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">1. Information Collection</h2>
              <p>
                We collect information necessary to provide our professional services, including but not limited to PAN, Aadhaar, financial data, and corporate records required for tax and audit filings. Information submitted through our contact form is used solely for responding to enquiries and providing professional assistance. We do not use submitted information for unsolicited marketing.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">2. Data Security & Transmission</h2>
              <p>
                Safeguarding your data is our highest priority. Sensitive financial documents (including those related to GST, Income Tax, ROC, FEMA, and Audits) are transmitted strictly through secure communication channels. All client data is accessed solely by authorized personnel who are bound by strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">3. Cookie Policy & Third-Party Services</h2>
              <p>
                We may use trusted third-party service providers (such as website hosting, analytics, fonts, and email services) to operate and improve our website. These providers process information only as necessary to deliver their services. Our website uses cookies to enhance functionality and analyze site traffic. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">4. Information Sharing</h2>
              <p>
                We adhere to strict professional confidentiality. Your information is never sold or rented to third parties. Data is shared with government authorities (such as the MCA, Income Tax Department, and GST portals) only when required by law or to complete requested statutory filings.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">5. Data Retention</h2>
              <p>
                Client records are retained in accordance with applicable legal, regulatory, and professional requirements governing Chartered Accountants in India. Once the retention period expires, your data is securely deleted or anonymized.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">6. Client Rights</h2>
              <p>
                You maintain rights over your personal data. You may contact us at any time to request corrections, update your information, or withdraw consent where applicable, subject to our statutory retention obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">7. Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Changes become effective upon publication on this website. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
              <p>
                If you have any questions or requests regarding this Privacy Policy, please contact us:<br/><br/>
                <strong>R Jhunjhunwala & Associates</strong><br/>
                Office Address: 12th Floor, Trade World, Kamala Mills Compound, Lower Parel, Mumbai - 400013<br/>
                Email: info@rjindia.com<br/>
                Phone: +91 98206 74200
              </p>
            </section>

          </div>
        </Container>
      </section>
    </>
  );
}
