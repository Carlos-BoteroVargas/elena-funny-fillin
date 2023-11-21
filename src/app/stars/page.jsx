'use client';

import { useState, useEffect } from 'react';
import './stars.css';

export default function Stars() {
  const [goBack, setGoBack] = useState(false);

  const [inputFields, setInputFields] = useState({
    place: null,
    noun: null,
    noun2: null,
    verb: null,
    verb2: null,
    adverb: null,
    animal: null,
    exclamation: null,
    measure: null,
    poison: null,
    largeNumber: null,
    smallNumber: null,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    const errorMessage = "please fill this value!"
    if (!inputValues.place) {
      errors.place = errorMessage
    }
    if (!inputValues.noun) {
      errors.noun = errorMessage
    }
    if (!inputValues.noun2) {
      errors.noun2 = errorMessage
    }
    if (!inputValues.verb) {
      errors.verb = errorMessage
    }
    if (!inputValues.verb2) {
      errors.verb2 = errorMessage
    }
    if (!inputValues.adverb) {
      errors.adverb = errorMessage
    }
    if (!inputValues.animal) {
      errors.animal = errorMessage
    }
    if (!inputValues.exclamation) {
      errors.exclamation = errorMessage
    }
    if (!inputValues.measure) {
      errors.measure = errorMessage
    }
    if (!inputValues.poison) {
      errors.poison = errorMessage
    }
    if (!inputValues.largeNumber) {
      errors.largeNumber = errorMessage
    }
    if (!inputValues.smallNumber) {
      errors.smallNumber = errorMessage
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
        place: null,
        noun: null,
        noun2: null,
        verb: null,
        verb2: null,
        adverb: null,
        animal: null,
        exclamation: null,
        measure: null,
        poison: null,
        largeNumber: null,
        smallNumber: null,
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
            <div className='content'>
              <p>
              I was going to <b>{inputFields.place}</b>, when I saw a star. <em>“What?!“</em>, I said, <em>“That can&apos;t be a star!”</em>. I made a wish on the star, and a <b>{inputFields.animal}</b> started to talk: <em>“<b>{inputFields.exclamation}</b>, I can talk!”</em> But then it started to laugh <b>{inputFields.adverb}</b>. I ran away, but suddenly <b>{inputFields.largeNumber} {inputFields.animal}s</b> started to follow me. My <b>{inputFields.noun}</b> was <b>{inputFields.smallNumber} {inputFields.measure}</b> away, so I <b>{inputFields.verb}</b> to it, grabbed the <b>{inputFields.poison}</b> and put it all over the <b>{inputFields.noun2}</b>. When they tried to attack, the army <b>{inputFields.verb2}</b> in. I AM SAVED!!
              </p>
            </div>
            ) : (
              <div className='inputs'>
                <p>
                  To read this story, fill in the blanks.
                </p>
                <div className={errors.place ? "error" : ""}>Famous place: {errors.place ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='place' type='text' value={inputFields.place} onChange={handleChange}/>
                </div>

                <div className={errors.noun ? "error" : ""}>Noun, used to store things: {errors.noun ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='noun' type='text' value={inputFields.noun} onChange={handleChange}/>
                </div>

                <div className={errors.measure ? "error" : ""}>Unit of length, plural: {errors.measure ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='measure' type='text' value={inputFields.measure} onChange={handleChange}/>
                </div>

                <div className={errors.poison ? "error" : ""}>Poison: {errors.poison ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='poison' type='text' value={inputFields.poison} onChange={handleChange}/>
                </div>

                <div className={errors.verb ? "error" : ""}>Past tense verb: {errors.verb ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb' type='text' value={inputFields.verb} onChange={handleChange}/>
                </div>

                <div className={errors.smallNumber ? "error" : ""}>Small number: {errors.smallNumber ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='smallNumber' type='text' value={inputFields.smallNumber} onChange={handleChange}/>
                </div>
                
                <div className={errors.exclamation ? "error" : ""}>Silly exclamation: {errors.exclamation ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='exclamation' type='text' value={inputFields.exclamation} onChange={handleChange}/>
                </div>

                <div className={errors.verb2 ? "error" : ""}>Past tense verb: {errors.verb2 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb2' type='text' value={inputFields.verb2} onChange={handleChange}/>
                </div>

                <div className={errors.adverb ? "error" : ""}>Adverb, ending in &apos;ly&apos;: {errors.adverb ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='adverb' type='text' value={inputFields.adverb} onChange={handleChange}/>
                </div>

                <div className={errors.animal ? "error" : ""}>Big animal: {errors.animal ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='animal' type='text' value={inputFields.animal} onChange={handleChange}/>
                </div>

                <div className={errors.noun2 ? "error" : ""}>Noun, plural: {errors.noun2 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='noun2' type='text' value={inputFields.noun2} onChange={handleChange}/>
                </div>

                <div className={errors.largeNumber ? "error" : ""}>Large Number: {errors.largeNumber ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='largeNumber' type='text' value={inputFields.largeNumber} onChange={handleChange}/>
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
