import React from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "../components/common/Container";

export default function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | R Jhunjhunwala & Associates</title>
        <meta
          name="description"
          content="Terms of Use for R Jhunjhunwala & Associates, detailing our website's compliance with ICAI guidelines, non-solicitation, and terms of engagement."
        />
        <link rel="canonical" href="https://rjindia.com/terms" />
      </Helmet>

      <section className="py-24 bg-bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071D49_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <Container className="relative z-10 max-w-[800px] mx-auto">
          
          {/* Header Section */}
          <div className="mb-14 border-b border-[#E7E7E7] pb-10">
            <h1 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-6">
              Terms of Use
            </h1>

            {/* Page Intro added here */}
            <p className="text-lg text-text-main leading-relaxed mb-6">
              These Terms of Use govern your access to and use of this website.
            </p>

            <p className="font-sans text-xs text-neutral-500 uppercase tracking-wider">
              <span className="font-semibold text-primary">Effective Date:</span> July 22, 2026<br/>
              <span className="font-semibold text-primary mt-1 inline-block">Last Updated Date:</span> July 22, 2026
            </p>
          </div>

          {/* Content Section */}
          <div className="text-text-main leading-[1.8] space-y-12">
            
            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">1. Professional Ethics & No Advertisement</h2>
              <p>
                This website complies strictly with the Code of Ethics issued by the Institute of Chartered Accountants of India (ICAI). The content provided on this website is for informational purposes only and is not intended to be, nor should it be construed as, solicitation or advertisement for professional services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">2. No Client Relationship</h2>
              <p>
                Accessing, reading, or using the information on this website does not establish a CA-client relationship between you and <strong>R Jhunjhunwala & Associates</strong>. A formal professional relationship is only established upon the execution of a written engagement letter.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">3. Accuracy & Liability</h2>
              <p>
                While we strive to ensure the information on this website is accurate and current, tax laws, regulations, and financial environments are subject to frequent changes. The firm disclaims any liability for actions taken or not taken based on any contents of this website. Visitors should seek professional consultation before acting upon any information provided here.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
              <p>
                All original content, designs, and resources on this website are the intellectual property of <strong>R Jhunjhunwala & Associates</strong>. Unauthorized use, reproduction, or distribution of this material without prior written permission is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">5. Governing Law & Jurisdiction</h2>
              <p>
                These Terms of Use and your use of this website are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">6. Changes to Terms</h2>
              <p>
                We may update these Terms of Use from time to time. Changes become effective upon publication on this website. By continuing to use the website after such modifications, you accept and agree to the revised terms.
              </p>
            </section>

            <div className="pt-8 border-t border-border mt-12 text-sm text-neutral-500">
              <p>© 2026 R Jhunjhunwala & Associates. All Rights Reserved.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
