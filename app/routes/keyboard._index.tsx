import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";

export const extendedKeyboardAMC = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Backspace'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', '.'],
    ['Cancel', 'Space', 'OK']
];

// export const loader = async () => {
//   return json({
//     posts: [
//       {
//         slug: "my-first-post",
//         title: "My First Post",
//       },
//       {
//         slug: "90s-mixtape",
//         title: "A Mixtape I Made Just For You",
//       },
//     ],
//   });
// };

export default function Keyboard() {
    // const { posts } = useLoaderData<typeof loader>();

    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const [inputValue, setInputValue] = useState('');

    const getBtnLabel = (btnLabel: React.FC | Element | string) => {
      switch (btnLabel) {
        case 'Backspace':
          btnLabel = <FontAwesomeIcon icon={faXmark} />
          break;
        default:
          break;
      }

      return btnLabel;
    }

    const handleKeyboardAction = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();

      if (!inputRef?.current) return;

      
      const target = e.target as HTMLButtonElement;

      console.log(`clicked the ${target.value} button`);

      let inputValue = target.value;

      switch (target.value) {
        case "Backspace": 
          if (inputRef.current.value !== '') {
            inputValue = inputRef.current.value.slice(0, -1);
          }
          break;
        case "Space": 
          if (inputRef.current.value !== '') {
            inputValue = inputRef.current.value + " ";
          }
          break;
        default:
          inputValue = inputRef.current.value + inputValue;
          break
      }

      inputRef.current.value = inputValue;
      handleSubmit();
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | Event | void): void => {
      e?.preventDefault();
      inputRef.current?.focus();
    }
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      console.log('handleInput');
      e.preventDefault();
      setInputValue(e.target.value);
    }


    useEffect(() => {
      inputRef.current?.focus();
      document.body.addEventListener('submit', handleSubmit);

      return () => document.body.removeEventListener('submit', handleSubmit);
    }, [inputValue])

    return (
        <main>
            <h1 className="page-title text-center">Virtual Keyboard</h1>

            {/* UNCONTROLLED
            <section style={{display:"flex",justifyContent:"center"}}>
              <input type="text" value={inputValue} ref={inputRef} onChange={handleInput} />
            </section> */}

            {/* CONTROLLED */}
            <section style={{display:"flex",justifyContent:"center"}}>
              <form name="vkForm" ref={formRef} onSubmit={handleSubmit}>
                <input type="text" value={inputValue} ref={inputRef} onChange={handleInput} />
              </form>
            </section>

            <ul className="keyboard">
              {extendedKeyboardAMC.map((row) => {
                return (
                  row.map((btn, index) => {let btnLabel = getBtnLabel(btn);return (
                    <li style={{width:'100%'}} key={`${btn}-${index}`}>
                      <button
                        onClick={handleKeyboardAction}
                        style={{width:'inherit',overflow:'hidden'}}
                        className="text-blue-600"
                        value={btn}
                        // tabIndex={-1}
                      >
                        {btnLabel}
                      </button>
                    </li>
                  )})
                )}
              )}
            </ul>
        </main>
    )
}

