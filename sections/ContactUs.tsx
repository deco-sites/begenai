interface Props {
    title?: string;
    subtitle?: string;
    buttonText?: string;
}

function ContactUs({ title, subtitle, buttonText }: Props) {
    return (<div className="bg-primary-content">
        <div className="container">
            <div className="flex flex-col gap-8">
                <span>{title}</span>
                <span>{subtitle}</span>
                <span>{buttonText}</span>
            </div>
        </div>

    </div>)

}

export default ContactUs