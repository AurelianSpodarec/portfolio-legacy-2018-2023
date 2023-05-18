import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-[#262626] py-6">
        
            
            <div className="flex justify-between items-center">
                <Link href="/" className="text-white text-3xl font-bold">Aurelian S</Link>

                <div className="flex space-x-6 text-white">
                    <a href="tel:0000">
                        icon
                        <span>Mobile</span>
                    </a>
                    <a href="mailto:aurelianxspodarec@gmail.com">
                        icon
                        <span>Email Me</span>
                    </a>
                </div>
            </div>

            <hr className="my-6" />

            <div className="flex justify-between items-center">
                <p className="text-white text-sm">&copy; Aurelian Spodarec {new Date().getFullYear()}. All rights reserved</p>

                <nav className="text-white text-sm space-x-6">
                    <a href="#">LinkedIn</a>
                    <a href="#">FQA</a>
                    <a href="#">Blog</a>
                    <a href="#">Github</a>
                    <a href="#">Contact</a>
                </nav>
            </div>

        </footer>
    )
}

export default Footer;