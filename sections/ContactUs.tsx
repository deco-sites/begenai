interface Props {
    title?: string;
    subtitle?: string;
    buttonText?: string;
}

function ContactUs({ title, subtitle, buttonText }: Props) {
    return (<div style="background-image: url(/image/bg-contact.png); background-size: contain; background-repeat: no-repeat; background-position: right;" className="bg-primary-content relative">

        <div className="container">
            <div className="font-poppins flex flex-col gap-8 text-white py-8 px-4 md:pt-[120px] md:pb-[144px] md:px-8">
                <span className="text-[32px] font-semibold">{title}</span>
                <span className="text-[20px]">{subtitle}</span>
                <span className="text-[#8A1000] text-[20px] bg-white py-[14px] px-[28px] rounded-lg max-w-[360px]">{buttonText}</span>
            </div>
        </div>

    </div>)

}

export default ContactUs