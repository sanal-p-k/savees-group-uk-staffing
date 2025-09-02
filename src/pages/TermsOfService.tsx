import { Metadata } from 'next';
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: 'Terms of Service - Savees Group Ltd',
  description: 'Terms and conditions governing the use of Savees Group Ltd\'s website and services.',
};

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-10 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Terms of Service
              </h1>
              <div className="prose max-w-none text-foreground/90">
                <p className="text-muted-foreground mb-8 text-center">
                  Last updated: September 2, 2025
                </p>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    Welcome to Savees Group Ltd ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                  <p>
                    Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our services.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">2. Our Services</h2>
                  <p className="mb-4">
                    Savees Group Ltd provides staffing and recruitment services, connecting job seekers with employers in the hospitality and logistics sectors. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Temporary and permanent staffing solutions</li>
                    <li>Recruitment and candidate placement</li>
                    <li>Workforce management</li>
                    <li>Payroll services</li>
                    <li>HR and compliance support</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">3. User Accounts</h2>
                  <h3 className="text-lg font-medium mb-2">3.1 Account Creation</h3>
                  <p className="mb-4">
                    To access certain features of our services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                  </p>
                  
                  <h3 className="text-lg font-medium mb-2">3.2 Account Security</h3>
                  <p className="mb-4">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">4. Job Applications and Placements</h2>
                  <h3 className="text-lg font-medium mb-2">4.1 Job Applications</h3>
                  <p className="mb-4">
                    By submitting an application through our website or services, you authorize us to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Share your application and related information with potential employers</li>
                    <li>Conduct reference and background checks where permitted by law</li>
                    <li>Process your personal data in accordance with our Privacy Policy</li>
                  </ul>

                  <h3 className="text-lg font-medium mb-2">4.2 Placement Services</h3>
                  <p className="mb-4">
                    We will use reasonable efforts to match candidates with suitable job opportunities. However, we do not guarantee employment or specific placement outcomes.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">5. Employer Terms</h2>
                  <h3 className="text-lg font-medium mb-2">5.1 Job Postings</h3>
                  <p className="mb-4">
                    Employers are responsible for the accuracy of job postings and compliance with all applicable employment laws and regulations. We reserve the right to reject or remove any job posting that violates our policies or applicable laws.
                  </p>
                  
                  <h3 className="text-lg font-medium mb-2">5.2 Candidate Information</h3>
                  <p className="mb-4">
                    Employer access to candidate information is provided solely for the purpose of evaluating candidates for specific job opportunities. You agree not to use candidate information for any other purpose without the candidate's explicit consent.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">6. Intellectual Property</h2>
                  <p className="mb-4">
                    All content on our website and services, including text, graphics, logos, and software, is the property of Savees Group Ltd or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written permission.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">7. Limitation of Liability</h2>
                  <p className="mb-4">
                    To the maximum extent permitted by law, Savees Group Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Your access to or use of our services</li>
                    <li>Any conduct or content of any third party on our services</li>
                    <li>Any content obtained from our services</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">8. Indemnification</h2>
                  <p className="mb-4">
                    You agree to defend, indemnify, and hold harmless Savees Group Ltd and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">9. Changes to Terms</h2>
                  <p className="mb-4">
                    We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-primary mb-4">10. Governing Law</h2>
                  <p className="mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">11. Contact Us</h2>
                  <p className="mb-2">
                    If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
