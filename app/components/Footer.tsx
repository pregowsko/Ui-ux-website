import Image from "next/image";
import Logo from '../../public/assets/Logo.svg';
import facebook from '../../public/assets/Facebook.svg';
import feed from '../../public/assets/Feed.svg';
import Twitter from '../../public/assets/X.svg';

export function Footer() {
    return(
        <div className="pt-[80px] pb-[40px]">
            <div className="flex items-center justify-center gap-x-[12px]">
                <Image src={Logo} alt="Logo"/>
                <p className="font-bold text-[#36485C] text-[17px]">Aleksandra Stanek</p>
            </div>
            <ul className="flex flex-col items-center gap-y[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
                <li>Features</li>
                <li>Pricing</li>
                <li>Enterprise</li>
                <li>Careers</li>
            </ul>

            <p className="py-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">© Copyright 2024. Your Site. All rights reserved.</p>
            <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
                <Image src={facebook} alt="facebook" />
                <Image src={feed} alt="feed" />
                <Image src={Twitter} alt="twitter" />
            </div>
        </div>
    )
}