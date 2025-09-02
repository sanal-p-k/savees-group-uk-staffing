import { Metadata } from 'next';
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: 'Privacy Policy - Savees Group Ltd',
  description: 'Learn how Savees Group Ltd collects, uses, and protects your personal information in compliance with UK data protection laws.',
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-10 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Privacy Policy
              </h1>
              <div className="prose max-w-none text-foreground/90">
                <p className="text-muted-foreground mb-8 text-center">
                  Last updated: September 2, 2025
                </p>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    Welcome to Savees Group Ltd ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p>
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">2. Information We Collect</h2>
                  <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                  <p className="mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Register on our website</li>
                    <li>Submit an inquiry or contact form</li>
                    <li>Apply for a job or submit your CV</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Interact with our customer service</li>
                  </ul>
                  <p className="mb-4">
                    The personal information we collect may include:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Name and contact details (email, phone number, address)</li>
                    <li>Employment history and qualifications</li>
                    <li>Right to work documentation</li>
                    <li>References and background check information</li>
                  </ul>

                  <h3 className="text-lg font-medium mb-2">Automatically Collected Information</h3>
                  <p className="mb-4">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages you visit on our website</li>
                    <li>Time and date of your visit</li>
                    <li>Time spent on those pages</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To process job applications and match candidates with opportunities</li>
                    <li>To communicate with you regarding our services</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                    <li>To prevent fraud and enhance security</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Sharing and Disclosure</h2>
                  <p className="mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Potential employers (with your consent)</li>
                    <li>Service providers who assist with our operations</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business partners in connection with our services</li>
                  </ul>
                  <p>
                    We do not sell your personal information to third parties.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">5. Your Data Protection Rights</h2>
                  <p className="mb-4">
                    Under the UK General Data Protection Regulation (UK GDPR), you have certain rights including:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Right to access</strong> - You can request copies of your personal data.</li>
                    <li><strong>Right to rectification</strong> - You can request correction of inaccurate information.</li>
                    <li><strong>Right to erasure</strong> - You can request deletion of your personal data.</li>
                    <li><strong>Right to restrict processing</strong> - You can request limitations on how we process your data.</li>
                    <li><strong>Right to data portability</strong> - You can request transfer of your data to another organization.</li>
                    <li><strong>Right to object</strong> - You can object to our processing of your personal data.</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the information in the "Contact Us" section below.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">6. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">7. Data Retention</h2>
                  <p className="mb-4">
                    We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as required by law. The retention period may vary depending on the type of data and the purpose for which it was collected.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">8. Changes to This Privacy Policy</h2>
                  <p className="mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">9. Contact Us</h2>
                  <p className="mb-2">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> info@saveesgroup.com
                  </p>
                  <p className="mb-2">
                    <strong>Address:</strong> 22A Queens Parade, Hanger Lane, London, W5 3HU, UK
                  </p>
                  <p>
                    <strong>Phone:</strong> +44 7543 538033
                  </p>
                </section>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
