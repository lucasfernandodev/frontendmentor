import { useEffect, useRef, useState } from "react";


interface SlipObject {
  id: number,
  advice: string,
}

const App = () => {
  const API_URL = "https://api.adviceslip.com/advice";
  const [phrase, setPhrase] = useState<SlipObject>({} as SlipObject);
  const [refreshPhrase, setRefreshPhrase] = useState<number>(1);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetch(API_URL).then(response => response.json()).then(data => setPhrase(data.slip));

  }, [refreshPhrase]);

  function generateNewPhrase(){
    buttonRef !== null ? buttonRef.current?.classList.add('isActiveBtn') : null;
    setTimeout(() => {
      buttonRef.current?.classList.remove('isActiveBtn');
    }, 1000)
    setRefreshPhrase(refreshPhrase + 1);
  }



  return (
    <main className="main">
      <section className="content">

        <div className="phrase-id">
          Advice <span>#{phrase && phrase.id}</span>
        </div>

        <div className="phrase-presentation">
          <h1 className="phrase">
            {phrase && phrase.advice}
          </h1>
        </div>
        <div className="phrase-divider">
            <img src="./public/imagens/pattern-divider-desktop.svg" alt="separations"/>
          </div>
        <div className="phrase-next-button">
          <button ref={buttonRef} className="btn" onClick={event => generateNewPhrase()}>
            <img src="./public/imagens/icon-dice.svg" alt="run advice"/>
          </button>
        </div>
      </section>
    </main>
  )
};

export default App;