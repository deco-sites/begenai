interface Props {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    link?: string;
}

function ContactUs({ title, subtitle, buttonText, link }: Props) {
    return (<div className="bg-base-content relative">

        <div className="container lg:max-w-[1440px]">
            <div className="font-montserrat flex flex-col text-white py-8 px-4 md:pt-[120px] md:pb-[94px] md:px-8">
                <div className="flex flex-col w-full lg:mb-[74px]"> <span className="text-[32px] lg:text-[60px] lg:leading-[78px] font-extrabold">{title}</span>
                    <span className="text-[20px] lg:text-[32px]">{subtitle}</span>
                </div>
                <a href={link}><span className="block text-base-content text-[18px] font-semibold text-center bg-white py-[14px] px-[28px] rounded-lg w-full max-w-[343px] cursor-pointer">{buttonText}</span></a>
            </div>
        </div>

    </div>)

}

export default ContactUs