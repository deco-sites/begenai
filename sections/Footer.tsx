import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function Footer({ image, alt, width, height, text

}: Props) {
  return (
    <div className="bg-white pt-[56px] pb-[40px] md:pt-[64px] md:pb-[48px]">
      <div className="container flex justify-between items-center p-4 gap-2 sm:gap-0 sm:p-0">
        <a href="/">
          {image && (
            <Image
              src={image || ""}
              alt={alt || ""}
              height={height || 40}
              width={width || 75}
            />
          )}
        </a>
        <span className="text-[#667085] text-sm md:text-base text-end">{text}</span>
      </div>
    </div>
  );
}

export default Footer;
