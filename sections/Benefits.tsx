import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface Props {
    title?: string;
    subTitle?: string;
    extraText?: string;
    itemsList?: {
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
        text?: string;
    }[]
}

function Benefits({ title, subTitle, extraText, itemsList }: Props) {
    return (
        <div style="background-image: url(/image/grid-benefits-pt.png); background-size: auto; background-position: bottom 0px right 0;" className="bg-repeat lg:bg-no-repeat">
            <div className="container max-w-[1440px] px-4 md:px-8 pt-[40px] pb-8 lg:pb-[186px]">
                <div className="flex flex-col mb-20 max-w-[1142px] mx-auto">
                    <span className="text-secondary-content text-center text-sm mb-4 font-poppins">{title}</span>
                    <span className="text-primary font-oxanium text-[32px] md:text-[48px] font-semibold text-center">{subTitle}</span>
                    <span className="text-base-200 font-poppins text-[20px] mt-[40px] text-center">{extraText}</span>
                </div>
                <div>
                    <ul className="flex flex-wrap justify-center lg:gap-8">
                        {itemsList?.map((item) => (
                            <li className="mb-16 last:mb-0 flex flex-col items-center max-w-[437px]">
                                {item.image && (
                                    <Image
                                        src={item.image || ""}
                                        alt={item.alt || ""}
                                        height={item.height || 64}
                                        width={item.width || 64}
                                    />
                                )}
                                <span className="mt-8 text-base-200 text-base font-poppins text-center">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Benefits;