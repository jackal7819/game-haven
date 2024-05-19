import React from 'react';
import {ROUTES} from "@/constants/Routes";
import Link from "next/link";

const TermsPage = () => {
  return (
    <section className="flex flex-col mx-4 my-20 gap-14 md:container">
      <div className="flex flex-col gap-4">
        <h1 className="font-orbitron text-[32px] font-medium xl:text-[40px]">Terms of Use</h1>
        <p className="font-montserrat text-[16px] font-[400]">Effective Date: April 26, 2024</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">1. Introduction</h2>
          <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">Welcome to Game Haven. By using our services, you agree to these Terms, which govern your access to and use of our website and purchases of digital game codes.</p>
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">2. Accounts</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">You need a registered account to
              purchase and access game codes. Ensure your account information is accurate and secure.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">3. Purchases and Use of Digital
              Content</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">When you purchase a game code from us,
              it is for your personal, non-commercial use. You receive a license to download and play the game according
              to the end-user license agreement provided by the game's developer.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">4. Payments</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">We accept various forms of payment as
              listed on our website. All transactions are secure and subject to our payment terms.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">5. Intellectual Property</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">The content and games on our site are
              owned by respective developers and publishers. Your purchase grants you a license to use the content but
              not ownership of the actual software.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">6. Refund and Cancellation Policy</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">Refunds and cancellations are governed
              by our refund policy, which provides details on how you can request a refund or cancel a purchase.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">7. Privacy Policy</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">Your privacy is important to us.
              Our <Link href={ROUTES.privacyPolicy} className="text-blue">Privacy Policy</Link> outlines how we handle
              the personal information you provide to us.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">8. Changes to Terms</h2>
            <p className="font-montserrat text-[16px] xl:text-[20px] font-[400]">We may update these terms occasionally. We will notify you of any significant changes by posting the new terms on our site.</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-montserra text-[20px] xl:text-[24px] font-medium">9. Contact Us</h2>
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

export default TermsPage;