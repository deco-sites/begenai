import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface Props {
    title?: string;
    subTitle?: string;
    list?: {
        title?: string;
        textContent?: string;
    }[]
    /**
 * @format rich-text
 */
    textContent?: string;
    bgEffect?: boolean;
    images?: {
        imageMobile?: ImageWidget;
        imageDesktop?: ImageWidget;
    }
}

function AboutUs({ title, subTitle, list, textContent, bgEffect = false, images }: Props) {
    return (
        <div style="background-image: url(/image/grid-layer-about.png); background-size: auto; background-repeat: no-repeat; background-position: left;" className="min-h-[806px] lg:h-[806px]">
            <div className="container lg:max-w-[1440px] px-4 md:px-8 h-full">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center h-full">
                    <div className={`flex flex-col lg:max-w-[580px] ${bgEffect ? "bg-white" : 'bg-transparent'}`}>
                        <div className="flex flex-col mb-12">
                            <span className="text-secondary-content text-sm mb-4 font-poppins">{title}</span>
                            <span className="text-primary font-oxanium text-[32px] md:text-[48px] font-semibold">{subTitle}</span>
                        </div>
                        {list &&
                            <div className={``}>
                                <ul className="flex flex-col gap-8 lg:max-w-[543px]">
                                    {list?.map((item) => (
                                        <li className="flex flex-col gap-4 font-poppins">
                                            <span className="text-secondary-content text-2xl font-semibold flex items-center markerabout">{item.title}</span>
                                            <span className="text-[#757575] text-base">{item.textContent}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                        {textContent &&
                            <div className="font-poppins lg:max-w-[580px]">
                                <span dangerouslySetInnerHTML={{
                                    __html: textContent,
                                }}></span>
                            </div>
                        }
                    </div>
                    <div className="flex justify-center mt-8">
                        {images && images.imageMobile && images.imageDesktop && (
                            <>
                                <Image
                                    className="md:hidden"
                                    src={images.imageMobile}
                                    alt="Banner aboutus"
                                    height={264}
                                    width={328} />
                                <Image
                                    className="hidden md:block"
                                    src={images.imageDesktop}
                                    alt="Banner aboutus"
                                    height={566}
                                    width={704} /></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutUs;