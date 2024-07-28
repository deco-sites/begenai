interface Props {
    title?: string;
    subTitle?: string;
}

function Benefits({ title, subTitle }: Props) {
    return (
        <div>
            <div className="container max-w-[1440px] px-4 md:px-8">
                <div className="flex flex-col mb-12">
                    <span className="text-secondary-content text-sm mb-4 font-poppins">{title}</span>
                    <span className="text-primary font-oxanium text-[32px] md:text-[48px] font-semibold text-center">{subTitle}</span>
                </div>
            </div>
        </div>
    )
}

export default Benefits;