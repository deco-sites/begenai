import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface Props {
    /**
     * @format rich-text
     */
    title?: string;
    list?: List[];
    /**
     * @format rich-text
     */
    textContent?: string;
    images?: {
        imageMobile?: ImageWidget;
        imageMobileWidth?: number;
        imageMobileHeight?: number;
        imageDesktop?: ImageWidget;
        imageDesktopWidth?: number;
        imageDesktopHeight?: number;
    };
    invertImageDesktop?: boolean;
    fixedImageDesktop?: boolean;
}

interface List {
    /**
     * @format rich-text
     */
    title?: string;
    disableMarker?: boolean;
    /**
     * @format rich-text
     */
    textContent?: string;
}

function AboutUs({
    title,
    list,
    textContent,
    images,
    invertImageDesktop = false,
    fixedImageDesktop = false,
}: Props) {
    return (
        <div className="relative">
            <div className="container lg:max-w-[1440px] px-4 md:px-8 pt-[60px] lg:pt-[170px] h-full">
                <div
                    className={`flex flex-col ${invertImageDesktop ? "xl:flex-row-reverse" : "xl:flex-row"
                        } lg:justify-between items-center h-full`}
                >
                    <div className={`flex flex-col lg:max-w-[580px] bg-transparent`}>
                        <div className="flex flex-col mb-8">
                            {title && (
                                <span
                                    className="text-base-200 text-[32px] lg:text-[60px] mb-4 font-montserrat font-extrabold"
                                    dangerouslySetInnerHTML={{
                                        __html: title,
                                    }}
                                ></span>
                            )}
                        </div>
                        {list && (
                            <div className={``}>
                                <ul className="flex flex-col gap-8 lg:max-w-[543px]">
                                    {list?.map((item) => (
                                        <li className="flex flex-col gap-4 font-montserrat">
                                            {item.title && (
                                                <span
                                                    className={`text-base-content text-2xl font-semibold flex items-center ${item.disableMarker ? "markerabout" : ""
                                                        }`}
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.title,
                                                    }}
                                                ></span>
                                            )}
                                            {item.textContent && (
                                                <span
                                                    className="text-base-200 text-base"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.textContent,
                                                    }}
                                                ></span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {textContent && (
                            <div className="font-montserrat lg:max-w-[580px]">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: textContent,
                                    }}
                                ></span>
                            </div>
                        )}
                    </div>
                    <div className="flex  justify-center mt-8">
                        {images && images.imageMobile && images.imageDesktop && (
                            <>
                                <Image
                                    className="md:hidden"
                                    src={images.imageMobile}
                                    alt="Banner aboutus"
                                    height={images.imageMobileHeight || 264}
                                    width={images.imageMobileWidth || 328}
                                />
                                <Image
                                    className={`hidden max-w-[600px] unsetWidth md:block ${fixedImageDesktop
                                        ? "xl:absolute xl:top-[15%] xl:left-0"
                                        : ""
                                        }`}
                                    src={images.imageDesktop}
                                    alt="Banner aboutus"
                                    height={images.imageDesktopHeight || 566}
                                    width={images.imageDesktopWidth || 704}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
