import { Hexagon  } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <div className="w-full bg-[#0a0215]">
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="Aditya Kumar Mohanty"
        socialLinks={[
          {
            icon: <TwitterLogoIcon className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <GitHubLogoIcon className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
          {
            icon: <InstagramLogoIcon className="h-5 w-5" />,
            href: "https://instagram.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#journey", label: "Journey" },
          { href: "#contact", label: "Contact" },
        ]}
        legalLinks={[]}
        copyright={{
          text: `© ${currentYear} Portfolio`,
          license: "All rights reserved",
        }}
      />
    </div>
  );
}
