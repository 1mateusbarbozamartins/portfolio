import ImagemBanner from "./ImagemBanner";
import TextoBanner from "./TextoBanner";

export default function Banner() {
    return (
        <div className={`
            mt-20
            text-[#444444]
        `}>
            <TextoBanner />
            <ImagemBanner />
        </div>
    )
}