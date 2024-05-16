'use client';

import { useState, useEffect } from 'react';
import './museum.css';

export default function Museum() {
  const [goBack, setGoBack] = useState(false);

  const [inputFields, setInputFields] = useState({
    verb1: null,
    verb2: null,
    verb3: null,
    verb4: null,
    noise1: null,
    noise2: null,
    noun1: null,
    noun2: null,
    noun3: null,
    noun4: null,
    animal1: null,
    animal2: null,
    myth: null,
    color: null,
    number: null,
    scared: null
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    const errorMessage = "please fill this value!"
    if (!inputValues.verb1) {
      errors.verb1 = errorMessage
    }
    if (!inputValues.verb2) {
      errors.verb2 = errorMessage
    }
    if (!inputValues.verb3) {
      errors.verb3 = errorMessage
    }
    if (!inputValues.verb4) {
      errors.verb4 = errorMessage
    }
    if (!inputValues.noise1) {
      errors.noise1 = errorMessage
    }
    if (!inputValues.noise2) {
      errors.noise2 = errorMessage
    }
    if (!inputValues.noun1) {
      errors.noun1 = errorMessage
    }
    if (!inputValues.noun2) {
      errors.noun2 = errorMessage
    }
    if (!inputValues.noun3) {
      errors.noun3 = errorMessage
    }
    if (!inputValues.noun4) {
      errors.noun4 = errorMessage
    }
    if (!inputValues.animal1) {
      errors.animal1 = errorMessage
    }
    if (!inputValues.animal2) {
      errors.animal2 = errorMessage
    }
    if (!inputValues.myth) {
      errors.myth = errorMessage
    }
    if (!inputValues.color) {
      errors.color = errorMessage
    }
    if (!inputValues.number) {
      errors.number = errorMessage
    }
    if (!inputValues.scared) {
      errors.scared = errorMessage
    }
    return errors
  }

  const handleChange = (e) => {
    setInputFields({...inputFields , [e.target.name]: e.target.value });
    console.log(inputFields)
  };

  const handleSubmit = (event) => {
    console.log(`This is the event value ${event.target.className}`);
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  }

  const finishSubmit = () => {
    if (!goBack) setGoBack(true)
    else {
      setSubmitting(false)
      setGoBack(false)
      setInputFields({
        verb1: null,
        verb2: null,
        verb3: null,
        verb4: null,
        noise1: null,
        noise2: null,
        noun1: null,
        noun2: null,
        noun3: null,
        noun4: null,
        animal1: null,
        animal2: null,
        myth: null,
        color: null,
        number: null,
        scared: null
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
      // setGoBack(true)
    }
  }, [errors]);

  const See = () => {
          return (
          <>
            <button 
              className={(!goBack) ? 'btn-toggle' : 'btn-toggle-back'} 
              onClick={handleSubmit}
              >
              {!goBack ? "See the story" : "Start again" }
            </button>
          </>
      ) 
  }

  
  return (
    
    <div className="App">
      <div className='cards'>
        { (Object.keys(errors).length === 0 && submitting) ? (
            <div className='contentTheatre'>
              <p>
                I was going to go to the <b>{inputFields.noun4}</b> Museum. I had been <b>{inputFields.verb3}</b> for <b>{inputFields.number}</b> weeks! Our guide, Mr. <b>{inputFields.noun2}</b>, was leading me and my friend, Flora <b>{inputFields.animal2}</b> through the <b>{inputFields.myth}</b> section, when a <b>{inputFields.noun1}</b> <b>{inputFields.verb1}</b> inside the glass! <em>&quot;<b>{inputFields.scared}</b>!&quot;</em> cried a lady, and <b>{inputFields.verb4}</b> <b>{inputFields.noise2}</b> down the <b>{inputFields.noun3}</b>. The glass <b>{inputFields.verb2}</b> open to reveal a small <b>{inputFields.color}</b> <b>{inputFields.animal1}</b>. So much for all that <b>{inputFields.noise1}</b>!
              </p>
            </div>
            ) : (
              <div className='inputsTheatre'>
                <p>
                  To learn about some mischief, <br /> fill in the blanks:
                </p>
                <div className={errors.verb1 ? "error" : ""}>
                  Past tense verb, ending in &apos;ed&apos;: 
                  {errors.verb1 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='verb1' type='text' 
                  value={inputFields.verb1} onChange={handleChange}/>
                </div>

                <div className={errors.noise1 ? "error" : ""}>
                  Noise, ending with &apos;ing&apos;: 
                  {errors.noise1 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='noise1' type='text' 
                  value={inputFields.noise1} onChange={handleChange}/>
                </div>
                

                <div className={errors.noun1 ? "error" : ""}>
                  Noun: 
                  {errors.noun1 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='noun1' type='text' 
                  value={inputFields.noun1} onChange={handleChange}/>
                </div>

                <div className={errors.animal1 ? "error" : ""}>
                  Animal: 
                  {errors.animal1 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='animal1' type='text' 
                  value={inputFields.animal1} onChange={handleChange}/>
                </div>

                <div className={errors.myth ? "error" : ""}>
                  Mythical creature: 
                  {errors.myth ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='myth' type='text' 
                  value={inputFields.myth} onChange={handleChange}/>
                </div>

                <div className={errors.color ? "error" : ""}>
                  Favorite color: 
                  {errors.color ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='color' type='text' 
                  value={inputFields.color} onChange={handleChange}/>
                </div>

                <div className={errors.animal2 ? "error" : ""}>
                  Another animal: 
                  {errors.animal2 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='animal2' type='text' 
                  value={inputFields.animal2} onChange={handleChange}/>
                </div>

                <div className={errors.verb2 ? "error" : ""}>
                  Past tense verb, ending in &apos;ed&apos;: 
                  {errors.verb2 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='verb2' type='text' 
                  value={inputFields.verb2} onChange={handleChange}/>
                </div>

                <div className={errors.noun3 ? "error" : ""}>
                  Animal: (Make it epic) 
                  {errors.noun3 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='noun3' type='text' 
                  value={inputFields.noun3} onChange={handleChange}/>
                </div>

                <div className={errors.noun2 ? "error" : ""}>
                  Noun: 
                  {errors.noun2 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='noun2' type='text' 
                  value={inputFields.noun2} onChange={handleChange}/>
                </div>

                <div className={errors.number ? "error" : ""}>
                  Number: 
                  {errors.number ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='number' type='text' 
                  value={inputFields.number} onChange={handleChange}/>
                </div>

                <div className={errors.noise2 ? "error" : ""}>
                  Weird noise, ending in &apos;ing&apos;: 
                  {errors.noise2 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='noise2' type='text' 
                  value={inputFields.noise2} onChange={handleChange}/>
                </div>

                <div className={errors.verb3 ? "error" : ""}>
                  Verb, ending with &apos;ing&apos; 
                  {errors.verb3 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='verb3' type='text' 
                  value={inputFields.verb3} onChange={handleChange}/>
                </div>

                <div className={errors.verb4 ? "error" : ""}>
                  Past tense verb: 
                  {errors.verb4 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='verb4' type='text' 
                  value={inputFields.verb4} onChange={handleChange}/>
                </div>

                <div className={errors.noun4 ? "error" : ""}>
                  One more noun: 
                  {errors.noun4 ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='noun4' type='text' 
                  value={inputFields.noun4} onChange={handleChange}/>
                </div>

                <div className={errors.scared ? "error" : ""}>
                  Scared expression: 
                  {errors.scared ? <em className='error'>*required</em> : null}
                  <br />
                  <input className='input' size="30" 
                  name='scared' type='text' 
                  value={inputFields.scared} onChange={handleChange}/>
                </div>
              </div>
            )
        }
      </div>
      <div>
        <See />
      </div>
    </div>
  );
}
