import { useState, useRef } from "react";
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

    const inputRef = useRef<HTMLInputElement>(null);
    inputRef.current?.focus();
    
    const [inputValue, setInputValue] = useState('');

    const handleKeyboardAction = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();

      if (!inputRef?.current) return;

      
      const target = e.target as HTMLButtonElement;

      console.log(`clicked the ${target.value} button`);

      let targetValue = target.value;

      switch (target.value) {
        case "Backspace": 
          if (inputRef.current.value !== '') {
            targetValue = inputRef.current.value.slice(0, -1);
            setInputValue(targetValue);
          }
          break;
        default:
          setInputValue(inputRef.current.value + targetValue);
          break
      }
    }
    
    
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      console.log('handleInput');
      e.preventDefault();
      setInputValue(e.target.value);
    }

    return (
        <main>
            <h1>Virtual Keyboard</h1>

            <ul className="keyboard" style={{}}>
              {extendedKeyboardAMC.map((row) => (
                row.map((btn, index) => (
                  <li style={{width:'100%'}} key={`${btn}-${index}`}>
                    <button
                      onClick={handleKeyboardAction}
                      style={{width:'inherit',overflow:'hidden'}}
                      className="text-blue-600"
                      value={btn}
                      // tabIndex={-1}
                    >
                      {btn}
                    </button>
                  </li>
                ))
              ))}
            </ul>
            <section style={{display:"flex",justifyContent:"center"}}>
              <input type="text" value={inputValue} ref={inputRef} onChange={handleInput} />
            </section>
        </main>
    )
}

