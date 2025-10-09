import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container px-4 py-20 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <header className="text-center space-y-2">
            <h1>Terms of Service</h1>
            <p className="text-muted-foreground text-sm">
              Last updated: October 8, 2025
            </p>
          </header>

          <div className="space-y-8 text-muted-foreground">
            <section className="space-y-4">
              <h2 className="text-foreground">1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of AIppliance Manager (the "App"),
                including any content, functionality, and services offered through the App. By creating an account or
                using the App, you agree to these Terms. If you do not agree, do not use the App.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">2. Eligibility &amp; Account Responsibilities</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>You must be at least 18 years old to create an account or use the App.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You must notify us immediately of any unauthorized access to your account.</li>
                <li>You agree to provide accurate information and keep it updated.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">3. Permitted Use</h2>
              <p>
                You may use the App to organize appliance information, retrieve manuals, and interact with AI-powered
                guidance for your personal or household purposes. You agree not to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Reverse engineer, copy, or resell the App or its content.</li>
                <li>Upload malware, spam, or other harmful content.</li>
                <li>Use the App to harass, defame, or infringe upon the rights of others.</li>
                <li>Attempt unauthorized access to our systems or other users&apos; data.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">4. AI Guidance &amp; Safety</h2>
              <p>
                The App uses artificial intelligence to summarize manuals and answer questions. AI responses are
                informational only and may not cover every scenario. Always confirm critical guidance with manufacturer
                documentation and follow all safety manuals. For complex repairs, consult a certified technician.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">5. Content &amp; Intellectual Property</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  We own all rights to the App, including software, design, trademarks, and branding, except for the
                  manuals or files you upload.
                </li>
                <li>You retain rights to the materials you upload but grant us a license to host and process them.</li>
                <li>Manuals provided through the App remain the property of their respective manufacturers.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">6. Subscription &amp; Payments</h2>
              <p>
                If we offer paid features, the App will disclose applicable fees before you complete a purchase. All
                charges will be handled through the app store linked to your device (Google Play or App Store). The
                store&apos;s refund policies apply.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">7. Termination</h2>
              <p>
                We may suspend or terminate your account if we believe you violated these Terms or applicable law. You
                may discontinue use at any time by deleting the App or requesting account deletion. Termination will not
                limit any rights or remedies we may have under the law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">8. Disclaimer of Warranties</h2>
              <p>
                The App is provided on an "as is" and "as available" basis without warranties of any kind, express or
                implied. We do not guarantee that the App will be error-free, secure, or uninterrupted.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, AIpplianceManager.com will not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits or data arising from your
                use of the App. Your sole and exclusive remedy is to stop using the App.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Illinois, without regard to its conflict of law
                provisions. Any disputes will be resolved in the state or federal courts located in Cook County,
                Illinois.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">11. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Changes take effect when posted in the App or on our
                website. Your continued use signifies acceptance of the updated Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">12. Contact</h2>
              <p>
                Questions about these Terms? Email
                {" "}
                <a href="mailto:support@AIpplianceManager.com" className="text-foreground underline underline-offset-4">
                  support@AIpplianceManager.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
