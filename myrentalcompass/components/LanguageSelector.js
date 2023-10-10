import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';

const LanguageSelector = ({ text }) => {
    const { i18n } = useTranslation();
    const router = useRouter();
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setLanguageDropdownOpen(false); // Close the dropdown when a language is selected
    };

    return (
        <div id="language_selector_wrapper" className="relative">
            <button
                className="flex justify-between items-center mr-8 rounded-lg hover:border-2 duration-150"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            >
                <Image src="/translate_icon.svg" width={25} height={25} />
                <div className="text-LongContentGray text-center">{router.locale.toUpperCase()}</div>
            </button>
            {languageDropdownOpen && (
                <div
                    className="absolute top-12 flex flex-col justify-center items-center bg-MapNavGray shadow-lg shadow-MainButtonYellow rounded-xl space-y-2 py-4 px-2"
                    style={{
                        transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                        minWidth: "10rem",
                        top: "calc(100% + 16px)",
                        left: "-80%",
                        zIndex: "50"
                    }}
                >
                    <button onClick={() => {
                        router.push(
                            {
                                pathname: router.pathname,
                                query: router.query,
                            },
                            null,
                            { locale: "en" }
                        );
                        setLanguageDropdownOpen(false);
                    }} className="text-HeadingTextGray font-istok font-semibold text-xl p-2 rounded-lg hover:bg-MainButtonYellow/10 hover:shadow-md duration-150">
                        EN | English
                    </button>
                    <button onClick={() => {
                        router.push(
                            {
                                pathname: router.pathname,
                                query: router.query,
                            },
                            null,
                            { locale: "hi" }
                        );
                        setLanguageDropdownOpen(false);
                    }} className="text-HeadingTextGray font-istok font-semibold text-xl p-2 rounded-lg hover:bg-MainButtonYellow/10 hover:shadow-md duration-150">
                        HI | हिंदी
                    </button>
                    <button onClick={() => {
                        router.push(
                            {
                                pathname: router.pathname,
                                query: router.query,
                            },
                            null,
                            { locale: "ms" }
                        );
                        setLanguageDropdownOpen(false);
                    }} className="text-HeadingTextGray font-istok font-semibold text-xl p-2 rounded-lg hover:bg-MainButtonYellow/10 hover:shadow-md duration-150">
                        MS | Melayu
                    </button>
                    <button onClick={() => {
                        router.push(
                            {
                                pathname: router.pathname,
                                query: router.query,
                            },
                            null,
                            { locale: "zh" }
                        );
                        setLanguageDropdownOpen(false);
                    }} className="text-HeadingTextGray font-istok font-semibold text-xl p-2 rounded-lg hover:bg-MainButtonYellow/10 hover:shadow-md duration-150">
                        ZH | 中文
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
