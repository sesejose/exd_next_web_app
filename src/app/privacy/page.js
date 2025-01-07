import { Link } from "next-view-transitions";

export default function Policy() {
  return (
    <>
      <div className="wide ptb-mobile-medium">
        <section>
          <div id="policy">
            <div className="grid-center">
              <div className="col-3-11">
                <h2 className="pb-medium">Privacy Policy</h2>
                <div className="bold">Last updated: March 2024</div>
                <h4 className="pt-medium">1. Introduction</h4>
                <div className="text-1">This Privacy Policy describes how we collect, use, and handle your personal information when you use our services.</div>
                <h4 className="pt-medium">2. Information We Collect</h4>
                <div className="text-1">
                  <div className="bold">We collect information that you provide directly to us, including:</div>
                  <ul>
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Account credentials</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <h4 className="pt-medium">3. How We Use Your Information</h4>
                <div className="text-1">
                  <div className="bold">We use the information we collect to:</div>
                  <ul>
                    <li>Provide and maintain our services</li>
                    <li>Send you important updates and notifications</li>
                    <li>Improve our services and develop new features</li>
                  </ul>
                </div>
                <h4 className="pt-medium">4. Data Protection</h4>
                <div className="text-1">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</div>
                <h4 className="pt-medium">5. Contact Us</h4>
                <div className="text-1">
                  If you have any questions about this Privacy Policy, please{" "}
                  <Link href={"/contact"} className="bold underline">
                    contact us.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
