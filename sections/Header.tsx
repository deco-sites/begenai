import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx"

interface Props {
    image?: ImageWidget;
    alt?: string;
    width?: number;
    height?: number;
    menuLinks?: {
        highlight?: boolean;
        text?: string;
    }[]
    disableInternationalization?: boolean;
}

function Header({ image, alt, width, height, menuLinks, disableInternationalization

}: Props) {
    return (
        <div className="bg-white py-3 px-4 md:px-0 md:fixed md:top-0 z-10 w-full">
            <div className="container md:px-8 lg:max-w-[1440px] flex justify-between items-center gap-2 sm:gap-0">
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
                <div className="drawer drawer-end w-[unset] md:hidden">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className=""><Icon id="MobileBars" strokeWidth={1} size={32} /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
                            {menuLinks?.map((menu) => (
                                <li className={`${menu.highlight ? "bg-primary-content p-2 rounded-lg w-fit text-white" : ''} mb-3`}><a className="p-0">{menu.text}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="hidden md:block">
                    <ul className="text-[#303030] tex-sm min-h-full flex items-center gap-[49px]">
                        {menuLinks?.map((menu) => (
                            <li className={`${menu.highlight ? "bg-primary-content p-3 rounded-lg text-white" : ''}`}><a>{menu.text}</a></li>
                        ))}
                        {disableInternationalization ? "" : <li className="flex items-center gap-2"><Icon id="Globe" strokeWidth={1} size={20} /><Icon id="ChevronDown" strokeWidth={2} size={12} /></li>}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
