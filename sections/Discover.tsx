import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface Props {
    desktop?: DesktopProps;
    mobile?: MobileProps;
    buttonText?: string;
    buttonLink?: string;
}

interface MobileProps {
    /**
* @format rich-text
*/
    text?: string;
    image?: ImageWidget;
}

interface DesktopProps {
    /**
* @format rich-text
*/
    text?: string;
    image?: ImageWidget;
}


function Discover({ desktop, mobile, buttonText, buttonLink }: Props) {
    return (
        <div className="relative">
            {desktop?.image && (
                <><Image
                    src={desktop?.image || ""}
                    alt="Banner discover"
                    height={545}
                    width={1920}
                    className="w-full hidden lg:block" />
                    <Image
                        src={mobile?.image || ""}
                        alt="Banner discover"
                        height={390}
                        width={1920}
                        className="w-full min-h-[390px] lg:hidden" /></>
            )}
            <div className="container max-w-[1440px] px-4 lg:px-0 flex flex-col items-center justify-center absolute top-2/4 left-2/4 transformid">
                {desktop?.text && <span className="hidden lg:block" dangerouslySetInnerHTML={{
                    __html: desktop.text,
                }}></span>}
                {mobile?.text && <span className="lg:hidden" dangerouslySetInnerHTML={{
                    __html: mobile.text,
                }}></span>}
            </div>
            <a className="w-full flex justify-center" href={buttonLink}> <span className="cursor-pointer bg-primary-content py-[14px] rounded-lg text-white text-base font-montserrat w-full max-w-[220px] text-center absolute bottom-7">{buttonText}</span></a>
        </div>
    )
}

export default Discover