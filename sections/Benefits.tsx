import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface Props {
    title?: string;
    /**
     * @format rich-text
     */
    subTitle?: string;
    /**
     * @format rich-text
     */
    extraText?: string;
    itemsList?: {
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
        title?: string;
        text?: string;
    }[];
}

function Benefits({ title, subTitle, extraText, itemsList }: Props) {
    return (
        <div className="bg-repeat lg:bg-no-repeat">
            <div className="container max-w-[1440px] px-4 md:px-8 pt-[40px] pb-8 lg:pb-[186px]">
                <div className="flex flex-col mb-20 max-w-[1142px] mx-auto">
                    <span className="text-base-content text-center text-[20px] mb-4 lg:mb-8 font-montserrat">
                        {title}
                    </span>
                    {subTitle && (
                        <span
                            className="text-primary font-montserrat text-[32px] md:text-[46px] font-semibold text-center benefitsStrong"
                            dangerouslySetInnerHTML={{
                                __html: subTitle,
                            }}
                        ></span>
                    )}
                    {extraText && <span className="text-base-200 font-montserrat text-[22px] mt-[40px] text-center" dangerouslySetInnerHTML={{
                        __html: extraText,
                    }}>
                        {extraText}
                    </span>
                    }
                </div>
                <div>
                    <ul className="flex flex-wrap justify-center lg:gap-8 lg:justify-between">
                        {itemsList?.map((item) => (
                            <li className="mb-16 lg:mb-8 last:mb-0 flex flex-col max-w-[437px]">
                                {item.image && (
                                    <Image
                                        src={item.image || ""}
                                        alt={item.alt || ""}
                                        height={item.height || 64}
                                        width={item.width || 64}
                                    />
                                )}
                                <span className="mt-6 text-base-content text-base lg:text-[18px] lg:leading-[23px] font-montserrat font-semibold">
                                    {item.title}
                                </span>
                                <span className="text-base-200 text-base lg:text-[18px] lg:leading-[23px]  font-montserrat">
                                    {item.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
