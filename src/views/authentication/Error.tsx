
import ErrorImg from "/src/assets/images/backgrounds/bg-coming-soon.png";
import GradientBg from "/src/assets/images/backgrounds/gradient-bg.png";
import { Button } from "flowbite-react";
import { Link } from "react-router";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";

const Error = () => (
  <>
  <div className="h-full bg-lightprimary/40 py-5">
    <div className="text-center w-full relative hidden">
      <img src={ErrorImg} alt="error" className="mb-4 max-w-[800px] mx-auto w-full relative z-1"/>
      {/* <h1 className="text-dark dark:text-white text-[40px] font-bold uppercase mb-6">Coming Soon!</h1> */}
      {/* <h6 className="text-xl text-dark dark:text-white">
        This page you are looking for could not be found.
      </h6> */}
      <Button
        color={"primary"}
        as={Link}
        to="/frontend-pages/homepage"
        className="w-fit mt-6 mx-auto uppercase"
      >
        Go Back to Home
      </Button>
    </div>

    <div className="container mx-auto">
      <div className="relative overflow-hidden bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat z-1" style={{ backgroundImage: `url(${GradientBg})` }}></div>

        <div className="relative z-1">
          {/* Top row: logo left, small badge right */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FullLogo />
            </div>

            <div className="ml-auto">
              <span className="inline-block px-4 py-2 rounded-full text-sm bg-lightprimary text-primary uppercase">
                Private beta. Coming soon
              </span>
            </div>
          </div>

          {/* hero row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-15">
            {/* left column */}
            <div className="lg:col-span-6">

              {/* small pill badge */}
              <div className="mb-4">
                <span className="relative items-center justify-center text-center font-medium focus:outline-none group p-[5px_15px] focus:ring-0 rounded-full text-[12px] bg-primary text-white xl:flex hidden uppercase w-max">
                  Pharmacy Saas in active build
                </span>
              </div>

              {/* hero heading */}
              <h1 className="title-hero text-[44px] md:text-[56px] leading-[62px]">
                Coming soon:<br />
                one place to see<br />
                medicine prices<br />
                &amp; stock in seconds.
              </h1>

              {/* description */}
              <p className="mt-6 text-lg text-darklink max-w-[540px]">
                We’re building a central purchasing dashboard that lets you
                compare prices, check stock and place orders with your existing
                wholesalers — without jumping between multiple portals or spreadsheets.
              </p>

              {/* CTA */}
              <div className="mt-4">
                <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg bg-primary text-white uppercase font-bold">
                  <svg className="w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path className="fill-[#fff]" d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z"/></svg>
                  Join the early access list
                </a>
                <div className="text-sm text-darklink mt-4">
                  No spam. We’ll only email you about launch updates and beta access.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">

              <img src={ErrorImg} alt="error" className="mx-auto w-full relative z-1"/>

            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
              <div className="col-span-6 tilt-card w-full relative z-20 bg-gradient-to-br from-[#89d6ff] to-[#2aa9ff] border-gray-200 shadow-md p-4 rounded-[16px] hover:translate-y-[-5px] transition-all duration-300 ease-in-out">

                <div className="bg-white rounded-[16px] p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-[40px] h-[40px] rounded-[10px] bg-gradient-to-br from-[#89d6ff] to-[#2aa9ff] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 32 32"><path d="M 8.5 5 C 5.467 5 3 7.468 3 10.5 L 3 21.5 C 3 24.532 5.467 27 8.5 27 C 11.533 27 14 24.532 14 21.5 L 14 16.404297 L 20.054688 24.736328 C 21.129687 26.216328 22.808719 27.003906 24.511719 27.003906 C 25.632719 27.003906 26.763281 26.662078 27.738281 25.955078 L 27.738281 25.953125 C 30.191281 24.170125 30.735125 20.724484 28.953125 18.271484 L 22.488281 9.3710938 C 20.703281 6.9170937 17.260641 6.37225 14.806641 8.15625 C 14.426847 8.4323091 14.099303 8.751721 13.8125 9.0976562 C 13.190056 6.7436087 11.047517 5 8.5 5 z M 8.5 7 C 10.43 7 12 8.57 12 10.5 L 12 15 L 5 15 L 5 10.5 C 5 8.57 6.57 7 8.5 7 z M 18.035156 9.1054688 C 19.118156 9.1054688 20.186094 9.605875 20.871094 10.546875 L 23.515625 14.185547 L 17.853516 18.302734 L 15.207031 14.662109 C 14.072031 13.100109 14.421422 10.908437 15.982422 9.7734375 C 16.602422 9.3234375 17.322156 9.1054688 18.035156 9.1054688 z M 24.691406 15.802734 L 27.337891 19.445312 C 28.471891 21.007313 28.1235 23.200937 26.5625 24.335938 C 25.0015 25.470937 22.807828 25.122547 21.673828 23.560547 L 19.029297 19.919922 L 24.691406 15.802734 z M 5 17 L 12 17 L 12 21.5 C 12 23.43 10.43 25 8.5 25 C 6.57 25 5 23.43 5 21.5 L 5 17 z"/></svg>
                    </div>

                    <div>
                      <div className="text-[18px] font-semibold text-[#000] mb-1">Amoxicillin</div>
                      <div className="text-xs text-darklink">800mg Capsules</div>
                    </div>
                  </div>

                  <div className="text-sm text-darklink mt-3 leading-snug">
                    Live prices from 4 suppliers <br />
                    <span className="text-primary pe-2">• •</span> pack of 21
                  </div>

                  <div className="mt-3 text-center font-medium p-[5px_15px] rounded-full text-[12px] bg-gradient-to-br from-[#89d6ff] to-[#2aa9ff] text-white uppercase w-max ms-auto">
                    Saas mockup
                  </div>
                </div>

                {/* bottom blue part */}
                <div className="mt-4 text-white">
                  <div className="flex gap-3 items-center">
                    <svg className="h-[15px] w-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fff" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"></path></svg>
                    <div className="text-sm font-semibold">What tellrodwyell help to do</div>
                  </div>
                </div>
              </div>

              <div className="col-span-6 info-box w-full z-10 hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
                <ul className="bg-white/20 backdrop-blur-sm border border-white/25 shadow-md p-6 rounded-[16px] h-full">

                  <li className="flex items-center gap-3 mb-4">
                    <div className="w-[20px] h-[20px] rounded-[5px] bg-gradient-to-br from-[#89d6ff] to-[#2aa9ff] flex items-center justify-center">
                      <svg className="h-[12px] w-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fff" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"></path></svg>
                    </div>
                    <div className="text-darklink">Compare prices &amp; stock from multiple wholesalers in one simple view</div>
                  </li>

                  <li className="flex items-center gap-3 mb-4">
                    <div className="w-[20px] h-[20px] rounded-[5px] bg-gradient-to-br from-[#89d6ff] to-[#2aa9ff] flex items-center justify-center">
                      <svg className="h-[12px] w-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fff" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"></path></svg>
                    </div>
                    <div className="w-[80%] text-darklink">Search by dm+d (AMP / VMP strength form) and see Drug Tariff alongside trade prices</div>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-[20px] h-[20px] rounded-[5px] bg-gradient-to-br from-[#89d6ff] to-[#2aa9ff] flex items-center justify-center">
                      <svg className="h-[12px] w-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fff" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"></path></svg>
                    </div>
                    <div className="text-darklink">Send orders electronically using secure EDI / cXML (planned for later phases)</div>
                  </li>

                </ul>
              </div>
          </div>

          {/* phase boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white/20 backdrop-blur-md border border-white/25 shadow-lg border-gray-200 shadow-md p-6 rounded-[16px] bg-lightprimary/40 hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
              <div className="text-center font-medium p-[5px_15px] rounded-full text-[12px] bg-primary text-white uppercase w-max mb-2">Phase 1</div>
              <div className="text-lg font-semibold text-[#081826] mb-2">Search &amp; pricing engine</div>
              <div className="text-sm text-darklink leading-relaxed">
                dm+d and Drug Tariff data ingested into cur+wn database, with fast search for
                product name, strength, form and code. This powers your day-to-day lookups and comparisons.
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/25 shadow-lg border-gray-200 shadow-md p-6 rounded-[16px] bg-lightprimary/40 hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
              <div className="text-center font-medium p-[5px_15px] rounded-full text-[12px] bg-primary text-white uppercase w-max mb-2">Phase 2</div>
              <div className="text-lg font-semibold text-[#081826] mb-2">Supplier integrations</div>
              <div className="text-sm text-darklink leading-relaxed">
                Connect your existing AAH, Alliance, Phoenix and other wholesaler accounts. See
                live, real-time price and stock snapshots, filtered by branch.
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/25 shadow-lg border-gray-200 shadow-md p-6 rounded-[16px] bg-lightprimary/40 hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
              <div className="text-center font-medium p-[5px_15px] rounded-full text-[12px] bg-primary text-white uppercase w-max mb-2">Phase 3</div>
              <div className="text-lg font-semibold text-[#081826] mb-2">Ordering &amp; insights</div>
              <div className="text-sm text-darklink leading-relaxed">
                Submit orders via EDI / cXML directly from MediBuyer and track savings, spend by
                supplier, and branch-level purchasing trends.
              </div>
            </div>

          </div>

          {/* footer */}
          <div className="mt-10 flex justify-between items-center text-sm text-[#65727b]">
            <div className="text-darklink">© 2025 MediBuyer. All resor. reserved.</div>
            <div className="text-darklink">Built in the UK for 1,000+ pharmacies.</div>
          </div>
        </div>

      </div>
    </div>

  </div>
</>
);

export default Error;
