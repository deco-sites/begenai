import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx"

interface Props {
    image?: ImageWidget;
    alt?: string;
    width?: number;
    height?: number;
    menuLinks?: string;
}

function Header({ image, alt, width, height, menuLinks

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
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary"><Icon id="MobileBars" size={32} /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
