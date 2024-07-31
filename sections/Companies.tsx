import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


interface Props {
    title?: string;
    images?: {
        link?: string;
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }[]
}

function Companies({ title, images }: Props) {
    return (
        <div className="my-[40px]">
            <div className="container">
                <span className="text-base-content text-base md:text-[20px] text-center w-full font-montserrat block">{title}</span>
                <ul className="flex flex-col md:flex-row gap-8 mt-12 justify-center items-center">
                    {images?.map((item) => (
                        <a href={item.link}><li>
                            <Image
                                src={item.image || ""}
                                alt={item.alt || ""}
                                height={item.height || 180}
                                width={item.width || 40}
                            /></li></a>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Companies