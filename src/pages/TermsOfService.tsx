import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container px-4 py-20 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center">Terms of Service</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-4 text-foreground">Agreement to Terms</h2>
              <p>
                By accessing and using AIppliance Manager ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Use of the App</h2>
              <p className="mb-3">You agree to use the App only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the App in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the App</li>
                <li>Share false or misleading information</li>
                <li>Use the App to harm, threaten, or harass others</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">AI-Powered Assistance</h2>
              <p>
                AIppliance Manager uses artificial intelligence to provide information and guidance about your appliances. While we strive for accuracy, the AI-generated content is for informational purposes only and should not replace professional repair services when needed. Always follow manufacturer guidelines and safety instructions.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Intellectual Property</h2>
              <p>
                The App and its original content, features, and functionality are owned by AIppliance Manager and are protected by international copyright, trademark, and other intellectual property laws. Appliance manuals and related documentation remain the property of their respective manufacturers.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Disclaimer of Warranties</h2>
              <p>
                The App is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the App will be uninterrupted, secure, or error-free. Use of the App is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Limitation of Liability</h2>
              <p>
                AIppliance Manager shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the App. This includes any appliance damage or personal injury resulting from following AI-generated advice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by updating the "Last updated" date. Continued use of the App after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Contact Information</h2>
              <p>
                If you have questions about these Terms of Service, please contact us through the app or visit our support page.
              </p>
            </section>

            <section className="pt-4 border-t border-border/50">
              <p className="text-sm">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
