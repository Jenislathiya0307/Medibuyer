const AboutUs = () => {
  return (
    <>
        <section className="w-full bg-white lg:py-24 py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative w-full">
            <div className="w-[85%] overflow-hidden">
                <img
                src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/banner/about-us.png"
                alt="Doctor"
                className="w-full h-full object-cover"
                />
            </div>
            </div>

            <div className="pt-10 lg:pt-0">
            <h3 className="text-[28px] font-bold text-gray-900 mb-2">
                About Us
            </h3>
            <div className="h-[3px] w-[40px] bg-blue-500 mb-5"></div>
            <p className="text-darklink leading-relaxed mb-6">
                As a pharmacist and the creator of MediBuyer, I started this platform to tackle the everyday challenges I encountered in my own pharmacy business. MediBuyer empowers pharmacy owners with full control, clear visibility, and access to the most competitive prices — without the usual complications. Our commitment is simple: to keep improving, to truly listen, and to stand beside you as a trusted partner in your growth.
            </p>

            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-[5px] bg-blue-100 text-blue-500 text-sm shrink-0 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#3F83F8" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/></svg>
                </span>
                <div>
                    <h4 className="font-bold text-dark dark:text-white text-[16px] mb-1">Pharmacist-Led</h4>
                    <p className="text-darklink text-[15px] leading-relaxed">
                        Created by a pharmacist who’s experienced the day-to-day challenges of running a pharmacy.
                    </p>
                </div>
                </li>

                <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-[5px] bg-blue-100 text-blue-500 text-sm shrink-0 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#3F83F8" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/></svg>
                </span>
                <div>
                    <h4 className="font-bold text-dark dark:text-white text-[16px] mb-1">Performance-Oriented</h4>
                    <p className="text-darklink text-[15px] leading-relaxed">
                        Designed to streamline your workflow, cut costly mistakes, and boost profitability.
                    </p>
                </div>
                </li>

                <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-[5px] bg-blue-100 text-blue-500 text-sm shrink-0 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#3F83F8" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/></svg>
                </span>
                <div>
                    <h4 className="font-bold text-dark dark:text-white text-[16px] mb-1">Improvement-Focused</h4>
                    <p className="text-darklink text-[15px] leading-relaxed">
                        Shaped and refined through ongoing input from real pharmacy professionals.
                    </p>
                </div>
                </li>
            </ul>
            </div>
        </div>
        </section>
    </>
  );
};

export default AboutUs;
