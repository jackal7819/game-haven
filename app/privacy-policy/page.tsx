import React from 'react';
import Link from "next/link";
import {ROUTES} from "@/constants/Routes";

const PrivacyPolicy = () => {
  return (
    <section className="flex flex-col mx-4 my-20 gap-14 md:container">
      <div className="flex flex-col gap-4">
        <h1 className="font-orbitron text-[32px] font-medium xl:text-[40px]">Privacy Policy</h1>
        <p className="font-montserrat text-[16px] font-[400]">Effective Date: April 26, 2024</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">1. Introduction</h2>
          <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">Welcome to Game Haven, your premier
            destination for
            gaming. By accessing our website and using our services, you agree to the terms outlined in this Privacy
            Policy, which is designed to protect your personal information and clarify our practices.</p>
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">2. What Information Do We
              Collect?</h2>
            <div>
              <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">When you engage with Game Haven, we
                may collect a
                variety of information to enhance your experience:
              </p>
              <ul className="list-disc ml-5 text-[16px] xl:text-[20px] font-[400]">
                <li>Personal Identification Information: Name, email address, physical address, and telephone number.
                </li>
                <li>Payment Information: Credit card details and billing addresses, processed via secure, encrypted
                  platforms.
                </li>
                <li>Interaction Data: Details of your interactions with our games, such as scores, preferences, and
                  feedback.
                </li>
                <li>Technical Data: Log files, your IP address, the type of device you use, and your browsing history on
                  our site.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">3. How We Use Your Information</h2>
            <div>
              <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">The information we collect serves
                multiple
                purposes:</p>
              <ul className="list-disc ml-5 text-[16px] xl:text-[20px] font-[400]">
                <li>Service Delivery: To manage your account, deliver purchased games and services, and personalize your
                  experience.
                </li>
                <li>Communication: To provide customer support, send updates about new games or changes to our policies,
                  and contact you about your account or transactions.
                </li>
                <li>Improvement and Optimization: To analyze usage patterns, enhance site security, and improve website
                  and game functionality based on user behavior.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">4. How We Share Your Information</h2>
            <div>
              <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">We value your privacy and limit the
                sharing of your
                information:</p>
              <ul className="list-disc ml-5 text-[16px] xl:text-[20px] font-[400]">
                <li>Service Providers: With third-party companies that assist us in operating our website, conducting
                  our
                  business, or serving our users.
                </li>
                <li>Legal Requirements: When required by law, such as to comply with a subpoena or similar legal
                  process.
                </li>
                <li>Business Transfers: In connection with a merger, acquisition, or sale of assets, your information
                  may
                  be transferred.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">5. Security of Your Information</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">We implement advanced security measures
              to ensure the
              confidentiality and integrity of your data, protecting it against unauthorized access, modification,
              destruction, or disclosure.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">6. Your rights</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">You have rights over your personal
              information,
              including the right to access, correct, or delete your data, as well as object to certain processing
              activities. If you wish to exercise these rights, please contact us.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">7. Changes to This Privacy Policy</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">This Privacy Policy may evolve over
              time. We will post
              any policy changes on this page and, if the changes are significant, provide a more prominent notice.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">8. Contact Us</h2>
            <p className="font-montserrat text-[20px] xl:text-[20px] font-[400] leading-tight">For any questions or
              concerns regarding
              our privacy practices, please do not hesitate to <Link href={ROUTES.home} className="text-blue">contact
                us</Link>. We are committed to resolving any privacy
              concerns swiftly and effectively.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;