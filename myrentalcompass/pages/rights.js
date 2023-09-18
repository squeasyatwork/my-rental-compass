import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Link from "next/link";
import UserguideBar from "~/components/UserguideBar.js";
import Image from "next/image";
import { useState, useEffect } from "react";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export const ResourceSection = ({ id, imageSrc, altText, link }) => {
  return (
    <div
      id={id}
      className="flex flex-col justify-between w-96 h-80 border border-NavTextGray rounded-lg shadow-sm mx-auto p-4 pt-12"
    >
      <div className="flex-1 flex justify-center items-start">
        <Image
          loader={imageLoader}
          src={imageSrc}
          alt={altText}
          width={150}
          height={100}
          loading="eager"
          className="mx-auto"
        />
      </div>
      <div className="mt-auto flex items-center justify-center pb-4">
        <Link href={link}>
          <button className="call-action-button text-NavTextGray font-bold bg-ResourceButtonYellow rounded-full w-40">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function Rights() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);
  const [showDetails5, setShowDetails5] = useState(false);
  const [showDetails6, setShowDetails6] = useState(false);

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };

  const toggleDetails4 = () => {
    setShowDetails4(!showDetails4);
  };
  const toggleDetails5 = () => {
    setShowDetails5(!showDetails5);
  };
  const toggleDetails6 = () => {
    setShowDetails6(!showDetails6);
  };

  return (
    <>
      <Head>
        <title>MyRentalCompass | What you need to know</title>
        <meta name="description" content="What you need to do." />
      </Head>

      <main className="font-inter flex flex-col min-h-screen text-black justify-center">
        <Navbar activePage="What you need to know" className="z-10" />

        <div className="relative h-3/5 w-full">
          <img
            loader={imageLoader}
            loading="eager"
            src="/businesswoman.jpeg"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-between h-full text-BackgroundWhite">
            <div className="flex flex-col justify-center my-44">
              <h1 className="text-5xl font-bold text-center">
               As a tenant, you have the right to live in a
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                safe, secure and quiet environment
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                that is managed in accordance with the law
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col bg-white items-center">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center justify-center text-HeadingTextGray font-bold text-5xl mr-48 ">
              <h2>Understand your </h2>
              <h2>rights and </h2>
              <h2>responsibilities</h2>
            </div>
            <div className="flex items-start">
              <div>
                <Image
                  src="/chat_bubble_rights.png"
                  alt="chat"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src="/woman.gif"
                  alt="girl"
                  width={200}
                  height={200}
                  className="mt-64 p-0"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="font-istok flex flex-col items-center justify-center pb-4 mr-24">
              <div className="flex flex-col items-center justify-center border-b-2 border-HeadingTextGray">
                <div className="font-bold text-4xl">
                  <h2>1. Your rights as renters</h2>
                </div>
                <div className="my-8">
                  <Image
                      src="/interior-design.png"
                      alt="interior"
                      width={100}
                      height={100}
                  />
                </div>
                <div className=" flex flex-col font-bold text-xl items-center">
                  <h2>You have the right to live in a property that is</h2>
                  <h2>clean, and meets minium rental standards.</h2>
                  <h2>This is measured with a condition report</h2>
                </div>
                <div className="flex flex-col items-center justify-center font-istok mb-6">
                  <button
                    onClick={toggleDetails1}
                    className="font-bold text-4xl px-3 mt-4 text-HeadingTextGray hover:underline"
                    >
                    {showDetails1 ? "⇱ Condition reports" : "⇲ Condition reports"}
                  </button>
                  {showDetails1 && (
                    <div className="p-6 mt-2 text-lg text-left bg-FooterButtonYellow rounded-xl"
                      style={{maxWidth: "24rem", 
                              transition: "0.3s ease-in-out"}}>
                      <h2> ● A condition report is a&nbsp;
                        <span className="font-bold">record of a property&apos;s condition </span>
                        when a rental agreement(lease) is signed
                      </h2>
                      <h2> ● Anything that is&nbsp;
                        <span className="font-bold">dirty, damaged or not working </span>
                        should be in the condition report, including everything inside and outside the property</h2>
                      <h2> ● The&nbsp;
                        <span className="font-bold">landlord is responsible </span>
                        for preparing the condition report. They must sign it and give two copies to the renter(or one copy of sending electronically) before you move in.</h2>
                      <h2> ● Condition report&nbsp;
                        <span className="font-bold">can be important </span>
                        in determining claims with the landlord(such as claiming all of your bond amount) so it is important to check the rent whne you get it and maintain your plan</h2>
                    </div>
                  )}
                </div>
              </div>
              <div className="font-istok flex flex-col items-center justify-center border-b-2 border-HeadingTextGray pb-6">
                <div className="my-8">
                  <Image
                      src="/chat.png"
                      alt="chat"
                      width={100}
                      height={100}
                  />
                </div>
                <div className=" flex flex-col font-bold text-xl items-center">
                  <h2>You have the right to not be discriminated</h2>
                  <h2>against when renting or applying to rent</h2>
                </div>
                <div className="flex flex-col items-center justify-center font-istok">
                  <button
                    onClick={toggleDetails3}
                    className=" font-bold text-4xl px-3 mt-4 text-HeadingTextGray hover:underline"
                    >
                    {showDetails3 ? "⇱ Unlawful discrimination" : "⇲ Unlawful discrimination"}
                    </button>
                    {showDetails3 && (
                      <div className="p-6 mt-2 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                        <h2>In Victoria, it is&nbsp;
                          <span className=" font-bold">against the law </span>
                          to stop somebody from renting a property because of certain&nbsp;
                          <span className="font-bold">personal characteristics.</span>
                        </h2>
                        <h2>These include:</h2>
                        <h2> ● age</h2>
                        <h2> ● carer status, family responsibilities, parental status</h2>
                        <h2> ● disability</h2>
                        <h2> ● employment</h2>
                        <h2> ● gender identity, lawful sexual activity, sexual orientation (e.g. gay, lesbian, transgender, etc)</h2>
                        <h2> ● marital status</h2>
                        <h2> ● physical features</h2>
                        <h2> ● pregnancy, breastfeeding</h2>
                        <h2> ● profession, trade or occupation, including being a sex worker</h2>
                        <h2> ● race (including colour, nationality, ethnicity and ethnic origin)</h2>
                        <h2> ● religious belief or activity</h2>
                        <h2> ● sex</h2>
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="flex flex-col border-r-4 border-FooterButtonYellow justify-center items-center"></div>
            <div className="font-istok flex flex-col items-center justify-center ml-24">
              <div className="flex flex-col justify-center items-center border-b-2 border-HeadingTextGray">
                <div className="my-8">
                  <Image
                      src="/agreement.png"
                      alt="agreement"
                      width={100}
                      height={100}
                  />
                </div>
                <div className=" flex flex-col font-bold text-xl items-center">
                  <h2>You have the right to live in a property that</h2>
                  <h2>meets minimum rental standards to ensure a</h2>
                  <h2>safe and adequate place to live</h2>
                </div>
                <div className="flex flex-col items-center justify-center font-istok mb-6">
                  <button
                    onClick={toggleDetails2}
                    className=" font-bold text-4xl px-3 mt-4 text-HeadingTextGray hover:underline"
                    >
                    {showDetails2 ? "⇱ Minimum rental standards" : "⇲ Minimum rental standards"}
                    </button>
                    {showDetails2 && (
                      <div className="p-6 mt-2 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl"
                      style={{ maxWidth: "24rem" }}>
                        <h2> 
                          ● A 
                          <span className="font-bold"> doors and windows&nbsp;</span>
                          that access the outside must have
                          <span className="font-bold"> functioning locks</span>
                        </h2>
                        <h2> ● Landlords must provide
                          <span className="font-bold">&nbsp;a general rubbish and recycling bin</span>
                        </h2>
                        <h2> ● There must be a&nbsp;
                          <span className="font-bold">working toilet</span>
                        </h2>
                        <h2> ● The bathroom must have a&nbsp;
                          <span className="font-bold">washbasin </span>
                          (sink) and a&nbsp;
                          <span className="font-bold">shower or bath, </span> 
                          and be connected to hot and cold water.
                        </h2>
                        <h2>
                          ● There must be a kitchen with a&nbsp;
                          <span className="font-bold">dedicated cooking and food preparation </span>
                          area, and a&nbsp;
                          <span className="font-bold">stovetop </span>
                          and&nbsp;
                          <span className="font-bold">sink </span> 
                          in good working order, connected to hot and cold water.
                        </h2>
                        <h2>
                          ● The property must be&nbsp;
                          <span className="font-bold">structurally sound and weatherproof. </span>
                        </h2>
                        <h2>
                          ● All rooms must be&nbsp;
                          <span className="font-bold">free from mould and damp.</span>
                        </h2>
                        <h2>
                          ● There must be a&nbsp;
                          <span className="font-bold">fixed heater </span>
                          (not portable) in good working order in the main living area.
                        </h2>
                        <br></br>
                        <h2 className="font-bold">
                          If the property does not meet minimum standards, the renter can request that the rental provider make repairs or changes before signing the agreement or before they move in.
                        </h2>
                      </div>
                    )}
                </div>
              </div>
              <div className="font-istok flex flex-col items-center justify-center border-b-2 border-HeadingTextGray p-6">
                <div className="my-8">
                  <Image
                      src="/village.png"
                      alt="village"
                      width={100}
                      height={100}
                  />
                </div>
                <div className=" flex flex-col font-bold text-xl items-center">
                  <h2>You have the right to informed when the</h2>
                  <h2>landlord intends to access the property</h2>
                </div>
                <div className="flex flex-col items-center justify-center font-istok">
                  <button
                    onClick={toggleDetails4}
                    className=" font-bold text-4xl px-3 mt-4 text-HeadingTextGray hover:underline"
                    >
                    {showDetails4 ? "⇱ Inspection" : "⇲ Inspection"}
                    </button>
                    {showDetails4 && (
                      <div className="p-6 mt-2 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                        <h2> ● Your landlord can enter the property at a date and time that you have&nbsp;
                          <span className="font-bold">both agreed on.</span>
                        </h2>
                        <h2> ● This agreement&nbsp;
                          <span className="font-bold">must </span>
                          be made&nbsp;
                          <span className="font-bold">within 7 days </span>
                          before they enter.
                        </h2>
                        <h2> ● Unless agreed with you, the rental provider or agent can only enter&nbsp;
                          <span className="font-bold">between 8am and 6pm, </span>
                          and&nbsp;<span className=" font-bold">not on public holidays.</span></h2>
                        <h2> ● If you have agreed, they can enter when you are not home.</h2>
                        <h2> ● A general inspection&nbsp;
                          <span className=" font-bold">may only be made </span>
                          after the&nbsp;
                          <span className=" font-bold">first 3 months </span>of the rental agreement. They can be&nbsp;
                          <span className=" font-bold">done every 6 months </span>at the most.</h2>
                        <h2> ● You are&nbsp;
                          <span className="font-bold">not required to leave </span>
                          if the landlord is doing an inspection or showing the property the prospective buyers.
                        </h2>
                        <br></br>
                        <h2>
                          Reasons for entering your home:
                        </h2>
                        <h2>● General inspection</h2>
                        <h2>● Repairs or other legal responsibilities</h2>
                        <h2>● Showing the property to renters, buyers or lenders</h2>
                        <h2>● Having the property valued</h2>
                        <h2>● Taking photos or videos to advertise the property</h2>
                        <h2>● Renter has not met their obligations </h2>
                        <h2>● Family violence proceedings in VCAT</h2>
                        <br></br>
                        <h2>Each of these has different days notice required. Read more at&nbsp;
                          <span>
                            <a href="https://www.consumer.vic.gov.au/housing/renting/starting-and-changing-rental-agreements
                            /resources-and-guides-for-renters/renters-guide" class="text-ButtonHoverYellow font-semibold hover:underline ">Consumer Affairs Victoria</a>
                          </span>
                        </h2>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between font-istok text-4xl font-bold mt-12 mb-4">
            <h2 style={{marginRight: "28rem"}}>2. Your responsibilities as renters</h2>
            <Image
                src="/alert.gif"
                alt="repair"
                width={100}
                height={100}
            />
          </div>
          <div className="flex mr-7">
            <div className="font-istok flex flex-col items-center justify-center mr-24 border-b-2 border-HeadingTextGray pb-4">
              <div className="my-8">
                <Image
                    src="/house.png"
                    alt="house"
                    width={100}
                    height={100}
                />
              </div>
              <a href="https://www.youtube.com/watch?v=oX6usi7Rgn0" class=" text-HeadingTextGray hover:underline text-center items-center">Condition reports</a>
              <div className=" flex flex-col font-bold text-xl items-center mt-2">
                <h2>You have a responsibility to maintain the</h2>
                <h2>house to a reasonable standard</h2>
              </div>
              <div className="flex flex-col items-center justify-center font-istok">
                <button
                  onClick={toggleDetails5}
                  className=" font-bold text-4xl px-3 mt-4 text-HeadingTextGray hover:underline"
                  >
                  {showDetails5 ? "⇱ Maintenance" : "⇲ Maintenance"}
                  </button>
                  {showDetails5 && (
                    <div className="p-6 mt-2 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                      <h2>It is your job as tenant to maintain the property, and keep it up to a reasonable standard. </h2>
                      <br></br>
                      <h2>This includes:</h2>
                      <h2> ● keeping the premises&nbsp;
                        <span className="font-bold">clean</span></h2>
                      <h2> ● not causing any&nbsp;
                        <span className="font-bold">damage </span>damage 
                        to the property</h2>
                      <h2> ● if damage is caused,&nbsp;
                        <span className="font-bold">notifying the landlord </span>
                        or agent as soon as possible.
                      </h2>
                      <h2> ●&nbsp;
                        <span className="font-bold">obtain consent </span>from the landlord before installing any fixtures, or making any alterations/ renovations, if these were not agreed up-front and included in your written lease.</h2>
                      <h2> ● ensure the property is not used for any&nbsp;
                        <span className="font-bold">illegal purpose.</span></h2>
                    </div>
                  )}
              </div>
            </div>
            <div className="flex flex-col border-r-4 border-FooterButtonYellow justify-center items-center"></div>
            <div className="font-istok flex flex-col items-center justify-center ml-24 border-b-2 border-HeadingTextGray pb-4">
              <div className="my-8">
                <Image
                    src="/home-repair.png"
                    alt="repair"
                    width={100}
                    height={100}
                />
              </div>
              <a href="https://www.youtube.com/watch?v=IJCRr6OYm4U&list=PLyJsWesP-0qmL3r2uf7ddID-LaDIy0Y7F" class=" text-HeadingTextGray hover:underline text-center items-center">Starting and ending a lease</a>
              <div className=" flex flex-col font-bold text-xl items-center mt-2">
                <h2>You have several responsibilities to follow</h2>
                <h2>when ending your tenancy agreement</h2>
              </div>
              <div className="flex flex-col items-center justify-center font-istok">
                <button
                  onClick={toggleDetails6}
                  className=" font-bold text-4xl px-3 mt-4 text-HeadingTextGray hover:underline"
                  >
                  {showDetails6 ? "⇱ End of your lease" : "⇲ End of your lease"}
                  </button>
                  {showDetails6 && (
                    <div className="p-6 mt-2 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                      <h2 className="font-bold">There are three main ways to end a tenancy:  </h2>
                      <h2> 1. All the parties can agree to end the tenancy. </h2>
                      <h2> 2. Your landlord or agent gives you a valid &apos;Notice to Vacate&apos;. </h2>
                      <h2> 3. You give valid notice to your landlord or agent that you intend to vacate.</h2>
                      <br></br>
                      <h2> When ending your lease, make sure you:</h2>
                      <h2> ●&nbsp;
                        <span className="font-bold">give adequate notice </span>
                        when planning to leave; the notice period will depend on your reason for leaving </h2>
                      <h2> ● pay any&nbsp;
                        <span className="font-bold">outstanding rent</span></h2>
                      <h2> ●&nbsp;
                        <span className="font-bold">clean </span>
                        the property</h2>
                      <h2> ● consider taking&nbsp;
                        <span className="font-bold">photos </span>
                        after you move your furniture out to&nbsp;
                        <span className="font-bold">show the condition </span>of the property </h2>
                      <h2> ● take all your&nbsp;
                        <span className="font-bold">belongings </span>with you</h2>
                      <h2> ●&nbsp;
                        <span className="font-bold">keep the &apos;Condition Report&apos; </span>
                        in case of a dispute</h2>
                      <h2> ● try to agree with your landlord or agent on the&nbsp;
                        <span className="font-bold">return of the bond</span></h2>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                  src="/chat_bubble_rights2.png"
                  alt="chatb2"
                  width={450}
                  height={450}
              />
              <a href="https://www.consumer.vic.gov.au/housing/renting/starting-and-changing-rental-agreements
              /resources-and-guides-for-renters/renters-guide" class="text-ButtonHoverYellow text-2xl font-semibold hover:underline ">▶ Consumer Affairs Victoria</a>
            </div>
            <div className="mt-48 mr-32">
              <Image
                  src="/woman.gif"
                  alt="woman"
                  width={200}
                  height={200}
              />
            </div>
            <div>
              <Link href="/">
                <button className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button">
                  Return Home
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 pb-12">
          <h1 className="index-page-section-heading pt-6 pb-6">
            Other Resources
          </h1>
          <div className="yqa-cross-section-container">
            <ResourceSection
              id="or-section-1"
              imageSrc="/or-plan-melb-picture.jpeg"
              altText="or-plan-melb-picture"
              link="https://www.planning.vic.gov.au/guides-and-resources/strategies-and-initiatives/plan-melbourne"
            />
            <ResourceSection
              id="or-section-2"
              imageSrc="/or-unsdg-picture.jpeg"
              altText="or-unsdg-picture"
              link="https://sdgs.un.org/goals/goal11"
            />
            <ResourceSection
              id="or-section-3"
              imageSrc="/or-crt-logo.jpeg"
              altText="or-crt-picture"
              link="https://www.rentingcommissioner.vic.gov.au/"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center font-istok text-HeadingTextGray bg-white px-8 pb-6">
          <h2 className="font-semibold text-lg">Credits</h2>
          <div className="flex">
            <div className="flex flex-col">
              <a href="https://www.flaticon.com/free-icon/agreement_2838110?term=agreement&page=1&position=3&origin=search&related_id=2838110 " class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/agreement_2838110?term=agreement&page=1&position=3&origin=search&related_id=2838110 </a>
              <a href="https://www.flaticon.com/free-icon/interior-design_2400629?term=interior+design&related_id=2400629 " class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/interior-design_2400629?term=interior+design&related_id=2400629 </a>
              <a href="https://www.flaticon.com/free-icon/chat_3286051?term=tell&related_id=3286051" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/chat_3286051?term=tell&related_id=3286051</a>
              <a href="https://www.flaticon.com/free-icon/village_1648590?term=neighborhood&page=1&position=4&origin=search&related_id=1648590" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/village_1648590?term=neighborhood&page=1&position=4&origin=search&related_id=1648590</a>
              <a href="https://www.flaticon.com/free-icon/house_2954870?related_id=2946601&origin=search" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/house_2954870?related_id=2946601&origin=search</a>
              <a href="https://www.flaticon.com/free-icon/home-repair_3084918?term=house+repair&related_id=3084918" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/home-repair_3084918?term=house+repair&related_id=3084918</a>
            </div>
            <div className="flex flex-col"></div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
