import React from 'react';
import { useTranslation } from 'react-i18next';
import { t, i18n } from "i18next";
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';


const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const [languageModalOpen, setLanguageModalOpen] = useState(false);
    // const [ENFlagCaption, setENFlagCaption] = useState(false);
    // const [HIFlagCaption, setHIFlagCaption] = useState(false);
    // const [MSFlagCaption, setMSFlagCaption] = useState(false);
    // const [ZHFlagCaption, setZHFlagCaption] = useState(false);

    const onChangeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div id="language_selector_wrapper">
            <button className="flex justify-between items-center mt-1 mr-8 rounded-lg hover:border-2 duration-150" onClick={() => setLanguageModalOpen(true)}>
                <Image src="/translate_icon.svg" width={20} height={20} />
                <div className="text-HeadingTextGray text-center">{router.locale.toUpperCase()}</div>
            </button>
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-80 bg-LongContentGray z-50"
                style={{
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: languageModalOpen ? "1" : "0",
                    visibility: languageModalOpen ? "visible" : "hidden"
                }}>


                <div className="px-12 py-8 mb-4 text-left font-istok bg-white shadow-sm shadow-yellow-400 rounded-xl space-y-4 h-1/2"
                    style={{ width: "38%" }}>
                    <div className="relative flex flex-col justify-center items-center space-y-4 space-x-4 w-full h-full">
                        <div className=" text-center font-bold text-4xl font-istok text-HeadingTextGray border-b-2 border-MainButtonYellow -mt-1 p-2 pb-4 mb-4">
                            Choose your language
                        </div>
                        <div className="flex justify-between">


                            <div className="flex flex-col bg-black items-center justify-center pt-2 px-4 mr-4 rounded-md hover:shadow-md hover:bg-MainButtonYellow/10 duration-150">
                                <button onClick={() => {
                                    router.push(
                                        {
                                            pathname: router.pathname,
                                            query: router.query,
                                        },
                                        null,
                                        { locale: "en" }
                                    );
                                    setLanguageModalOpen(false);
                                }}>
                                    <Image src="/en_flag.svg" alt="EN flag" height={100} width={100} />
                                    <div className="text-HeadingTextGray font-istok font-semibold"
                                    >
                                        en | English
                                    </div>
                                </button>
                            </div>


                            <div className="flex flex-col bg-black items-center justify-center pt-2 px-4 ml-4 rounded-md hover:shadow-md hover:bg-MainButtonYellow/10 duration-150">
                                <button onClick={() => {
                                    router.push(
                                        {
                                            pathname: router.pathname,
                                            query: router.query,
                                        },
                                        null,
                                        { locale: "hi" }
                                    );
                                    setLanguageModalOpen(false);
                                }}>
                                    <Image src="/hi_flag.svg" alt="HI flag" height={100} width={100} />
                                    <div className="text-HeadingTextGray font-istok font-semibold"
                                    >
                                        hi | हिंदी
                                    </div>
                                </button>
                            </div>


                        </div>
                        <div className="flex justify-between space-7">
                            <div className="flex flex-col bg-black items-center justify-center pt-2 px-4 mr-4 rounded-md hover:shadow-md hover:bg-MainButtonYellow/10 duration-150">
                                <button onClick={() => {
                                    router.push(
                                        {
                                            pathname: router.pathname,
                                            query: router.query,
                                        },
                                        null,
                                        { locale: "ms" }
                                    );
                                    setLanguageModalOpen(false);
                                }}>
                                    <Image src="/ms_flag.svg" alt="MS flag" height={100} width={100} />
                                    <div className="text-HeadingTextGray font-istok font-semibold"
                                    >
                                        ms | Melayu
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-col bg-black items-center justify-center pt-2 px-4 ml-4 rounded-md hover:shadow-md hover:bg-MainButtonYellow/10 duration-150">
                                <button onClick={() => {
                                    router.push(
                                        {
                                            pathname: router.pathname,
                                            query: router.query,
                                        },
                                        null,
                                        { locale: "zh" }
                                    );
                                    setLanguageModalOpen(false);
                                }}>
                                    <Image src="/zh_flag.svg" alt="MS flag" height={100} width={100} />
                                    <div className="text-HeadingTextGray font-istok font-semibold"
                                    >
                                        zh | 中国人
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                <button onClick={() => setLanguageModalOpen(false)}>
                    <Image
                        src="/close.svg"
                        alt="close"
                        width={80}
                        height={80}
                        className=" hover:opacity-70 transition duration-1000 ease-in-out"
                    />
                </button>
            </div>
        </div >
    )
    // return (
    //     <div className="border-yellow border-2">
    //         <select onChange={(e) =>
    //             router.push(
    //                 {
    //                     pathname: router.pathname,
    //                     query: router.query,
    //                 },
    //                 null,
    //                 { locale: e.target.value }
    //             )
    //         }>
    //             {(router.locale === "en" || router.locale === "") && (<option selected value="en">
    //                 <button className="button special big">EN | English</button>
    //             </option>)}
    //             {(router.locale !== "en" && router.locale !== "") && (<option value="en">
    //                 <button className="button special big">EN | English</button>
    //             </option>)}
    //             {(router.locale === "hi") && (<option selected value="hi">
    //                 <button className="button special big">HI | हिंदी</button>
    //             </option>)}
    //             {(router.locale !== "hi") && (<option value="hi">
    //                 <button className="button special big">HI | हिंदी</button>
    //             </option>)}
    //             {(router.locale === "ms") && (<option selected value="ms">
    //                 <button className="button special big">MS | Melayu</button>
    //             </option>)}
    //             {(router.locale !== "ms") && (<option value="ms">
    //                 <button className="button special big">MS | Melayu</button>
    //             </option>)}
    //             {(router.locale === "zh") && (<option selected value="zh">
    //                 <button className="button special big">ZH | 中国人</button>
    //             </option>)}
    //             {(router.locale !== "zh") && (<option value="zh">
    //                 <button className="button special big">ZH | 中国人</button>
    //             </option>)}

    //         </select>
    //     </div>
    // );
};

export default LanguageSelector;