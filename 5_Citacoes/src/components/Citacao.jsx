import { useState, useEffect } from "react";

function Citacao({ texto, autor }) {
  const [traducao, setTraducao] = useState('');
  const [lang, setLang] = useState('pt');

  const langs = {
    'Português': 'pt',
    'Inglês': 'en',
    'Espanhol': 'es',
    'Francês': 'fr',
    'Alemão': 'de',
    'Italiano': 'it',
    'Russo': 'ru',
    'Chinês': 'zh',
    'Japonês': 'ja',
    'Coreano': 'ko',
    'Holandês': 'nl',
    'Árabe': 'ar',
    'Hindi': 'hi',
    'Turco': 'tr',
    'Grego': 'el',
    'Sueco': 'sv',
    'Norueguês': 'no',
    'Dinamarquês': 'da',
    'Finlandês': 'fi',
    'Polonês': 'pl',
    'Tcheco': 'cs',
    'Romeno': 'ro',
    'Húngaro': 'hu',
    'Vietnamita': 'vi',
    'Tailandês': 'th',
    'Indonésio': 'id',
    'Malaio': 'ms',
    'Filipino': 'tl',
    'Ucraniano': 'uk',
    'Hebraico': 'he',
    'Persa': 'fa'
  };

  useEffect(() => {
    setTraducao('');
    setLang('pt');
  }, [texto]);

  const traduzirCitacao = async (idioma) => {
    if (idioma === 'pt') {
      setTraducao(texto);
      setLang('pt');
      return;
    }

    try {
      const resposta = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=pt|${idioma}`
      );
      const data = await resposta.json();
      setTraducao(data.responseData.translatedText);
      setLang(idioma);
    } catch (error) {
      console.error('Erro ao traduzir: ', error);
    }
  };

  return (
    <>
    <div className="d-flex flex-column ai-center align-items-center justify-content-center bg-secondary text-white p-5 rounded-4 w-100 h-75">
      <select
        value={lang}
        onChange={(e) => traduzirCitacao(e.target.value)}
        className="form-select border-0 text-center w-25 bg-dark text-white fw-bold"
    >
        {Object.entries(langs).map(([name, code]) => (
          <option key={code} value={code} disabled={lang === code}>
            {name}
          </option>
        ))}
      </select>
    </div>
    
    <div className="text-center text-white p-5">
      <blockquote className="blockquote h-75">
        <p>{traducao ? traducao : texto}</p>
        <footer className="blockquote-footer text-dark">{autor}</footer>
      </blockquote>
    </div>
    </>
  );
}

export default Citacao;
