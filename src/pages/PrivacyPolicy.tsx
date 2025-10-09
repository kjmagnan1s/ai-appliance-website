import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container px-4 py-20 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="mb-8 text-center">Privacy Policy</h1>

          <div className="space-y-8 text-muted-foreground">
            <section className="space-y-3">
              <p>
                <strong>Effective date:</strong> October 8, 2025
              </p>
              <p>
                <strong>Application:</strong> AIppliance Manager (com.smarthomeai.app)
              </p>
              <p>
                <strong>Company:</strong> AIpplianceManager.com ("we," "our," "us")
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">1. Overview</h2>
              <p>
                AIppliance Manager helps you organize household appliances, locate manuals, and ask AI-powered
                questions about them. We collect only the information needed to provide these features and we never sell
                your data to third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">2. Information We Collect</h2>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  <p className="font-semibold text-foreground">Account Information</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Email address and authentication data provided through our secure cloud database provider.</li>
                    <li>Used to create and secure your account.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold text-foreground">Appliance Records</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Appliance details that you add (brand, model, nickname, room).</li>
                    <li>Stored securely so the app can show your inventory across devices.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold text-foreground">Camera Access &amp; Images</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>When you choose to scan an appliance label, we request camera permission.</li>
                    <li>
                      The image is processed locally, then sent to a secure cloud function to extract text (brand,
                      model, serial number).
                    </li>
                    <li>
                      Images are held temporarily for processing (currently up to 90 days for troubleshooting) and then
                      deleted. We do not access the camera in the background or capture footage without your explicit
                      action.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold text-foreground">Manual Uploads &amp; Files</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>PDFs you upload are stored in encrypted cloud storage so you can retrieve manuals within the app and use AI question-answering.</li>
                    <li>We may compute quality metrics (e.g., completeness score) to ensure the best manual is available.</li>
                    <li>Delete your manual and related appliance to remove stored files.</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold text-foreground">Notifications</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>If you allow notifications, we store a device token to send alerts when manuals are found or action is needed.</li>
                    <li>
                      Tokens are managed by a third-party notification service provider; they can be invalidated anytime from your device settings.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold text-foreground">Usage Data</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Basic analytics (screen views, feature usage, errors) to improve the product.</li>
                    <li>We do not track your location or contacts.</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">3. How We Use Your Data</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide core features: appliance storage, manual retrieval, AI Q&amp;A.</li>
                <li>Send optional status notifications (manual found, upload required, etc.).</li>
                <li>Improve reliability and understand feature usage (aggregated analytics).</li>
                <li>Respond to support requests and fix bugs.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">4. Data Sharing</h2>
              <p>
                We do not sell or rent your information. We share data only with:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <span className="font-semibold text-foreground">Service Providers:</span> obligated to safeguard your information (e.g., cloud database, storage, notification services).
                </li>
                <li>
                  <span className="font-semibold text-foreground">Legal Authorities:</span> when required by law or to protect safety.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">5. Data Retention &amp; Deletion</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Appliance records and manuals remain until you delete them.</li>
                <li>Camera uploads for label scanning are retained up to 90 days for debugging and then automatically purged.</li>
                <li>
                  To delete your account and all associated data, email <a href="mailto:privacy@AIpplianceManager.com" className="text-foreground underline underline-offset-4">privacy@AIpplianceManager.com</a> or use any in-app deletion option (when available).
                </li>
                <li>Manual deletion removes the file and related AI embeddings.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">6. Your Choices</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Revoke camera access via device settings; you can still add appliances manually.</li>
                <li>Manage push notification permissions in Android/iOS settings.</li>
                <li>Edit or delete appliances, manuals, and label scans in the app.</li>
                <li>Contact us to export or erase your data.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">7. Security</h2>
              <p>
                We rely on modern cloud infrastructure with encryption in transit and at rest. Access to production data
                is restricted to authorized team members who require it to maintain or support the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">8. Children&apos;s Privacy</h2>
              <p>
                AIppliance Manager is intended for household management and is not directed at children under 13. We do
                not knowingly collect data from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">9. Updates to This Policy</h2>
              <p>
                We may update this policy to reflect changes in the app or legal requirements. Updates will be posted on
                this page with a new "Effective date." If changes are significant, we&apos;ll notify you via the app or
                email.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-foreground">10. Contact Us</h2>
              <p>
                For support, privacy questions, or data deletion requests, email
                {" "}
                <a
                  href="mailto:privacy@AIpplianceManager.com"
                  className="text-foreground underline underline-offset-4"
                >
                  privacy@AIpplianceManager.com
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

export default PrivacyPolicy;
