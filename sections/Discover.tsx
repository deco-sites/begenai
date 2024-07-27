import { VideoWidget } from "apps/admin/widgets.ts";

interface Props {
    text?: string;
    buttonText?: string;
    videoSrc?: VideoWidget;
}

function Discover({ text, buttonText, videoSrc }: Props) {
    return (
        <div style="background-image: url(/image/grid-layers.png); background-size: cover; background-repeat: no-repeat; background-position: center;" className="md:pt-[160px] h-[700px] md:h-[868px]">
            <div className="container px-4 flex flex-col items-center justify-center">
                <span className="text-[32px] md:text-[64px] font-semibold mb-12 font-oxanium text-center max-w-[1440px]">{text}</span>
                <span className="cursor-pointer bg-primary-content py-[14px] rounded-lg text-white text-base font-poppins w-full max-w-[220px] text-center">{buttonText}</span>
                {videoSrc && <video class="w-full max-w-[906px] mt-8 md:mt-20 px-4 lg:px-0" controls ><source src={videoSrc} /></video>}
            </div>
        </div>
    )
}

export default Discover