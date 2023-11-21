'use client';

import { useState, useEffect } from 'react';
import './arcade.css';

export default function Arcade() {
  const [goBack, setGoBack] = useState(false);

  const [inputFields, setInputFields] = useState({
    relative: null,
    celebrity: null,
    bodyPart: null,
    verb: null,
    verb2: null,
    spookyThing: null,
    animal: null,
    badGuy: null,
    verb3: null,
    largeNumber: null,
    verb4: null,
    verb5: null,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    const errorMessage = "please fill this value!"
    if (!inputValues.relative) {
      errors.relative = errorMessage
    }
    if (!inputValues.celebrity) {
      errors.celebrity = errorMessage
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
    if (!inputValues.spookyThing) {
      errors.spookyThing = errorMessage
    }
    if (!inputValues.animal) {
      errors.animal = errorMessage
    }
    if (!inputValues.badGuy) {
      errors.badGuy = errorMessage
    }
    if (!inputValues.verb3) {
      errors.verb3 = errorMessage
    }
    if (!inputValues.largeNumber) {
      errors.largeNumber = errorMessage
    }
    if (!inputValues.verb4) {
      errors.verb4 = errorMessage
    }
    if (!inputValues.verb5) {
      errors.verb5 = errorMessage
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
                The Arcade is so fun. That is where <b>{inputFields.relative}</b> and I were going. The host, <b>{inputFields.celebrity}</b>, asked me: <em>“Would you like to come with me? It would be very <b>{inputFields.verb}</b>.”</em> I decided to go along, so I got in their car which started to go at <b>{inputFields.largeNumber}</b> miles per hour. We drove right into the <b>{inputFields.spookyThing}</b> tunnel. 

                I realized my driver was <b>{inputFields.badGuy}</b>! My only chance was to <b>{inputFields.verb2}</b> out of the car. I <b>{inputFields.verb3}</b> out, but a <b>{inputFields.animal} {inputFields.verb4}</b> me. I didn&apos;t know what I should do, so I <b>{inputFields.verb5} {inputFields.badGuy}</b> in their <b>{inputFields.bodyPart}</b> and ran out of the tunnel. What can I say but, <em>“job well done!”</em>
              </p>
            </div>
            ) : (
              <div className='inputs'>
                <p>
                  To read the Arcade story, <br />fill in the blanks.
                </p>
                <div className={errors.relative ? "error" : ""}>Name of relative: {errors.relative ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='relative' type='text' value={inputFields.relative} onChange={handleChange}/>
                </div>

                <div className={errors.celebrity ? "error" : ""}>Name of Celebrity: {errors.celebrity ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='celebrity' type='text' value={inputFields.celebrity} onChange={handleChange}/>
                </div>

                <div className={errors.spookyThing ? "error" : ""}>spookyThing: {errors.spookyThing ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='spookyThing' type='text' value={inputFields.spookyThing} onChange={handleChange}/>
                </div>

                <div className={errors.verb ? "error" : ""}>Adjective: {errors.verb ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb' type='text' value={inputFields.verb} onChange={handleChange}/>
                </div>

                <div className={errors.verb3 ? "error" : ""}>Past tense verb: {errors.verb3 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb3' type='text' value={inputFields.verb3} onChange={handleChange}/>
                </div>
                
                <div className={errors.bodyPart ? "error" : ""}>Body part: {errors.bodyPart ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='bodyPart' type='text' value={inputFields.bodyPart} onChange={handleChange}/>
                </div>

                <div className={errors.verb2 ? "error" : ""}>Past tense verb: {errors.verb2 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb2' type='text' value={inputFields.verb2} onChange={handleChange}/>
                </div>

                <div className={errors.verb5 ? "error" : ""}>another past tense verb: {errors.verb5 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb5' type='text' value={inputFields.verb5} onChange={handleChange}/>
                </div>

                <div className={errors.animal ? "error" : ""}>Animal: {errors.animal ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='animal' type='text' value={inputFields.animal} onChange={handleChange}/>
                </div>

                <div className={errors.badGuy ? "error" : ""}>A Bad Guy: {errors.badGuy ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='badGuy' type='text' value={inputFields.badGuy} onChange={handleChange}/>
                </div>

                <div className={errors.largeNumber ? "error" : ""}>Large Number: {errors.largeNumber ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='largeNumber' type='text' value={inputFields.largeNumber} onChange={handleChange}/>
                </div>

                <div className={errors.verb4 ? "error" : ""}>Past tense verb: {errors.verb4 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb4' type='text' value={inputFields.verb4} onChange={handleChange}/>
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
