interface Props {
    text?: string;
    buttonText?: string;
}

function Discover({ text, buttonText }: Props) {
    return (
        <div>
            <div className="px-4">
                <span className="text-[32px] font-medium mb-12 font-oxanium">{text}</span>
                <span className="text-[#8A1000] text-[20px] bg-white py-[14px] px-[28px] rounded-lg max-w-[360px]">{buttonText}</span>
            </div>
        </div>
    )
}

export default Discover