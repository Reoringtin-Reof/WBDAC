import React from 'react';

    const Piano = () => {
      const pianoKeys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

      return (
        &lt;div className="piano"&gt;
          {pianoKeys.map((key, index) => (
            &lt;div key={index} className="key" onClick={() => console.log(`You pressed ${key}`)}&gt;
              {key}
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      );
    };

    export default Piano;
