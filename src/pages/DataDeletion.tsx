import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DataDeletion = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="space-y-6 text-muted-foreground">
            <header className="space-y-2 text-center">
              <h1>Data Deletion Request</h1>
              <p className="text-sm">Last updated: October 8, 2025</p>
            </header>

            <section className="space-y-4">
              <p>
                We respect your right to control personal data. If you&apos;d like your AIppliance Manager account and all
                associated data removed, please email
                {" "}
                <a
                  href="mailto:support@AIpplianceManager.com"
                  className="text-foreground underline underline-offset-4"
                >
                  support@AIpplianceManager.com
                </a>
                {" "}
                with the subject line “Data Deletion Request.”
              </p>
              <p>To help us locate your account quickly, include the following details in your message:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The email address you use to sign in to AIppliance Manager.</li>
                <li>
                  <span className="italic">Optional:</span> Additional context (for example, appliance names) that might help verify the account.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <p>Once we receive your request, we will:</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Verify ownership of the account.</li>
                <li>Permanently delete appliance records, manuals, label captures, analytics, and any stored tokens tied to your profile.</li>
                <li>Confirm completion via email within 7 business days.</li>
              </ol>
              <p>
                If you change your mind or submit the request in error, reply to the confirmation email before the process
                is complete and we&apos;ll cancel the deletion.
              </p>
            </section>

            <section className="space-y-4">
              <p>
                For privacy questions unrelated to deletion, read our
                {" "}
                <Link
                  to="/privacy-policy"
                  className="text-foreground underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                {" "}
                or contact us at the same email address.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataDeletion;
