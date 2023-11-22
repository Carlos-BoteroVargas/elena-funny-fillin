'use client';

import { useState, useEffect } from 'react';
import './mixup.css';

export default function Arcade() {
  const [goBack, setGoBack] = useState(false);

  const [inputFields, setInputFields] = useState({
    relative: null,
    place: null,
    bodyPart: null,
    food: null,
    verb: null,
    verb2: null,
    verb3: null,
    verb4: null,
    verb5: null,
    verb6: null,
    verb7: null,
    culture: null,
    exclamation: null,
    noun: null,
    noun2: null,
    noun3: null,
    noun4: null,
    noun5: null,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    const errorMessage = "please fill this value!"
    if (!inputValues.relative) {
      errors.relative = errorMessage
    }
    if (!inputValues.place) {
      errors.place = errorMessage
    }
    if (!inputValues.bodyPart) {
      errors.bodyPart = errorMessage
    }
    if (!inputValues.verb) {
      errors.verb = errorMessage
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
    if (!inputValues.verb5) {
      errors.verb5 = errorMessage
    }
    if (!inputValues.verb6) {
      errors.verb6 = errorMessage
    }
    if (!inputValues.verb7) {
      errors.verb7 = errorMessage
    }
    if (!inputValues.culture) {
      errors.culture = errorMessage
    }
    if (!inputValues.exclamation) {
      errors.exclamation = errorMessage
    }
    if (!inputValues.food) {
      errors.food = errorMessage
    }
    if (!inputValues.noun) {
      errors.noun = errorMessage
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
    if (!inputValues.noun5) {
      errors.noun5 = errorMessage
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
        relative: null,
        place: null,
        bodyPart: null,
        food: null,
        verb: null,
        verb2: null,
        verb3: null,
        verb4: null,
        verb5: null,
        verb6: null,
        verb7: null,
        culture: null,
        exclamation: null,
        noun: null,
        noun2: null,
        noun3: null,
        noun4: null,
        noun5: null,
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
            <div className='contentMixup'>
              <p>
                Once, I was taking a walk in my <b>{inputFields.place}</b>. I saw something that amazed me! A <b>{inputFields.noun}</b>, and it was <b>{inputFields.verb}</b>. I couldn&apos;t believe my <b>{inputFields.bodyPart}</b>!
                I decided to <b>{inputFields.verb2}</b> it, but lost track of it.
                Since I had ran into  a&#40;n&#41; <b>{inputFields.culture}</b> cuisine establishment, I decided to eat. Suddenly, a chunk of <b>{inputFields.food} {inputFields.verb3}</b> across the <b>{inputFields.noun2}</b>. <em>&quot;<b>{inputFields.exclamation}</b>,&quot;</em> said the cook. He dropped the <b>{inputFields.noun3}</b> he was <b>{inputFields.verb4}</b>. Then my <b>{inputFields.relative}</b> came in. After one <b>{inputFields.verb5}</b> at the <b>{inputFields.noun4}</b>, &#40;s&#41;he said: <em>&quot;Never <b>{inputFields.verb6}</b> your <b>{inputFields.noun5}</b> before they <b>{inputFields.verb7}</b>&quot;</em>
              </p>
            </div>
            ) : (
              <div className='inputsMixup'>
                <p>
                  To read the Magic Mix-up story, <br />fill in the blanks.
                </p>
                <div className={errors.relative ? "error" : ""}>Name of relative: {errors.relative ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='relative' type='text' value={inputFields.relative} onChange={handleChange}/>
                </div>
                
                <div className={errors.noun2 ? "error" : ""}>Noun: {errors.noun2 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='noun2' type='text' value={inputFields.noun2} onChange={handleChange}/>
                </div>

                <div className={errors.place ? "error" : ""}>Name of place to live: {errors.place ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='place' type='text' value={inputFields.place} onChange={handleChange}/>
                </div>

                <div className={errors.culture ? "error" : ""}>World culture: {errors.culture ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='culture' type='text' value={inputFields.culture} onChange={handleChange}/>
                </div>

                <div className={errors.verb ? "error" : ""}>Verb, ending in &apos;ing&apos;: {errors.verb ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb' type='text' value={inputFields.verb} onChange={handleChange}/>
                </div>

                <div className={errors.verb3 ? "error" : ""}>Past tense verb: {errors.verb3 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb3' type='text' value={inputFields.verb3} onChange={handleChange}/>
                </div>
                
                <div className={errors.food ? "error" : ""}>Food item: {errors.food ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='food' type='text' value={inputFields.food} onChange={handleChange}/>
                </div>
                
                <div className={errors.noun3 ? "error" : ""}>Noun: {errors.noun3 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='noun3' type='text' value={inputFields.noun3} onChange={handleChange}/>
                </div>

                <div className={errors.bodyPart ? "error" : ""}>Body part: {errors.bodyPart ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='bodyPart' type='text' value={inputFields.bodyPart} onChange={handleChange}/>
                </div>

                <div className={errors.verb2 ? "error" : ""}>Verb: {errors.verb2 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb2' type='text' value={inputFields.verb2} onChange={handleChange}/>
                </div>

                <div className={errors.verb5 ? "error" : ""}>Verb: {errors.verb5 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb5' type='text' value={inputFields.verb5} onChange={handleChange}/>
                </div>

                <div className={errors.exclamation ? "error" : ""}>Exclamation: {errors.exclamation ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='exclamation' type='text' value={inputFields.exclamation} onChange={handleChange}/>
                </div>

                <div className={errors.verb6 ? "error" : ""}>Verb: {errors.verb6 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb6' type='text' value={inputFields.verb6} onChange={handleChange}/>
                </div>
                
                <div className={errors.noun4 ? "error" : ""}>Noun: {errors.noun4 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='noun4' type='text' value={inputFields.noun4} onChange={handleChange}/>
                </div>

                <div className={errors.noun5 ? "error" : ""}>Noun: {errors.noun5 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='noun5' type='text' value={inputFields.noun5} onChange={handleChange}/>
                </div>

                <div className={errors.verb7 ? "error" : ""}>Verb: {errors.verb7 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb7' type='text' value={inputFields.verb7} onChange={handleChange}/>
                </div>

                <div className={errors.verb4 ? "error" : ""}>Verb, ending in &apos;ing&apos;: {errors.verb4 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb4' type='text' value={inputFields.verb4} onChange={handleChange}/>
                </div>

                <div className={errors.noun ? "error" : ""}>Noun: {errors.noun ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='noun' type='text' value={inputFields.noun} onChange={handleChange}/>
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
