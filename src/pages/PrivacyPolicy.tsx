import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container px-4 py-20 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-4 text-foreground">Introduction</h2>
              <p>
                At AIppliance Manager, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Information We Collect</h2>
              <p className="mb-3">We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Appliance information (model numbers, serial numbers, photos)</li>
                <li>Usage data (app interactions, features used)</li>
                <li>Device information (device type, operating system)</li>
                <li>Optional account information if you choose to create an account</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">How We Use Your Information</h2>
              <p className="mb-3">Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide AI-powered assistance with your appliances</li>
                <li>Retrieve and match appliance manuals</li>
                <li>Improve our services and user experience</li>
                <li>Send maintenance reminders and notifications</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Data Storage and Security</h2>
              <p>
                Your appliance data is stored securely on your device and our encrypted servers. We use industry-standard security measures to protect your information. We never sell or share your personal data with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of notifications</li>
                <li>Export your appliance information</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through the app or visit our support page.
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

export default PrivacyPolicy;
