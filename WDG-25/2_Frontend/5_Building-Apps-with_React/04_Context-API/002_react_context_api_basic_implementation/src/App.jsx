import './index.css';

import { createContext, use, useState } from 'react';

// Create a Context for the localization
const LocalizationContext = createContext();

// LocalizationProvider component to provide localization data to its children
const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: 'Discover the Art of Coffee',
      text: 'Savor the rich flavors and aromas of the finest coffee beans from around the world. Join us in celebrating the timeless tradition of coffee making.',
    },
    de: {
      title: 'Entdecken Sie die Kunst des Kaffees',
      text: 'Genießen Sie die reichen Aromen und Geschmacksrichtungen der besten Kaffeebohnen aus aller Welt. Feiern Sie mit uns die zeitlose Tradition der Kaffeezubereitung.',
    },
    fr: {
      title: "Découvrez l'Art du Café",
      text: 'Savourez les riches saveurs et arômes des meilleurs grains de café du monde entier. Rejoignez-nous pour célébrer la tradition intemporelle de la préparation du café.',
    },
  };

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LocalizationContext value={{ language, switchLanguage, translations }}>
      {children}
    </LocalizationContext>
  );
};

// LocalizedText component to consume and display localized text
const LocalizedText = () => {
  const { language, translations } = use(LocalizationContext);
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold">{translations[language].title}</h1>
      <p>{translations[language].text}</p>
    </div>
  );
};

// LanguageSwitcher component to change the language
const LanguageSwitcher = () => {
  const { switchLanguage } = use(LocalizationContext);
  return (
    <div className="flex justify-center space-x-4 p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => switchLanguage('en')}
      >
        English
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => switchLanguage('de')}
      >
        Deutsch
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => switchLanguage('fr')}
      >
        Français
      </button>
    </div>
  );
};

// Parent component to nest children
const GeneralLayout = () => {
  return (
    <div className="min-h-screenbg-gray-100">
      <LanguageSwitcher />
      <LocalizedText />
    </div>
  );
};

// App component where LocalizationProvider wraps the component tree
const App = () => {
  return (
    <LocalizationProvider>
      <GeneralLayout />
    </LocalizationProvider>
  );
};

export default App;
