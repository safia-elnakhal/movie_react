import React, { useContext } from "react";
import LanguageContext from "../../context/language";
export default function ContextLanguageSwitcher() {
  const { contextLang, setContextLang } = useContext(LanguageContext)
  const changeAppLanguage = () => {
    setContextLang(contextLang === 'ar' ? 'en' : 'ar')
  };

  return (
    <div>
      <h3>
        Context language is : <span className="text-success">{contextLang}</span>
      </h3>
      <button className="btn btn-info" onClick={() => changeAppLanguage()}>
         Change language
      </button>
    </div>
  );
}
