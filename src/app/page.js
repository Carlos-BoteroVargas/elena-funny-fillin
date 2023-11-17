'use client';

import { useState, useEffect } from 'react';
import './App.css';

export default function Home() {
  const [goBack, setGoBack] = useState(false);

  const [inputFields, setInputFields] = useState({
    friend: null,
    relative: null,
    relation: null,
    verb: null,
    verb2: null,
    adverb: null,
    animal: null,
    exclamation: null,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    const errorMessage = "please fill this value!"
    if (!inputValues.friend) {
      errors.friend = errorMessage
    }
    if (!inputValues.relative) {
      errors.relative = errorMessage
    }
    if (!inputValues.relation) {
      errors.relation = errorMessage
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
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
      // setGoBack(true)
    }
  }, [errors]);

  
  const Header = () => {
    return (
      <header className="App-header">
        <h2>
          Elena&apos;s Funny Fill-In
        </h2>
      </header>
    )
  }

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
      <div className='App-header'>
        <Header />
      </div>
      <div className='cards'>
        { (Object.keys(errors).length === 0 && submitting) ? (
            <div className='content'>
              <p>
                <b>{inputFields.friend}</b> and I were going to he theatre, when we met <b>{inputFields.relative}</b>. <em>&quot;Hello, Sunny! Wtacha doin? <b>{inputFields.verb}</b>?&quot;, he said.</em> I didn&apos;t know what to do, so I said <b>{inputFields.adverb}</b> <em>&quot;Kick your butt, <b>{inputFields.animal}</b>!&quot;</em>.
                Then my <b>{inputFields.relation}</b> showed up, and in a loud voice said <em>&quot;<b>{inputFields.exclamation}</b>!&quot;</em> I <b>{inputFields.verb2}</b> to the nearest bus stop, and so did <b>{inputFields.friend}</b>. Now that was some crazy day!
              </p>
            </div>
            ) : (
              <div className='inputs'>
                <h3>
                  Fill in the blanks:
                </h3>
                <div className={errors.friend ? "error" : ""}>Friend&apos;s Name: {errors.friend ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='friend' type='text' value={inputFields.friend} onChange={handleChange}/>
                </div>
                <div className={errors.relative ? "error" : ""}>Relative&apos;s name: {errors.relative ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='relative' type='text' value={inputFields.relative} onChange={handleChange}/>
                </div>
                <div className={errors.relation ? "error" : ""}>His/her relation to you: {errors.relation ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='relation' type='text' value={inputFields.relation} onChange={handleChange}/>
                </div>
                <div className={errors.verb ? "error" : ""}>Verb, ending in &apos;ing&apos;: {errors.verb ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb' type='text' value={inputFields.verb} onChange={handleChange}/>
                </div>
                <div className={errors.verb2 ? "error" : ""}>Past tense verb: {errors.verb2 ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='verb2' type='text' value={inputFields.verb2} onChange={handleChange}/>
                </div>
                <div className={errors.adverb ? "error" : ""}>Adverb, ending in &apos;ly&apos;: {errors.adverb ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='adverb' type='text' value={inputFields.adverb} onChange={handleChange}/>
                </div>
                <div className={errors.animal ? "error" : ""}>Scary animal: {errors.animal ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='animal' type='text' value={inputFields.animal} onChange={handleChange}/>
                </div>
                <div className={errors.exclamation ? "error" : ""}>Silly exclamation: {errors.exclamation ? <em className='error'>*required</em> : null}<br />
                  <input className='input' size="30" name='exclamation' type='text' value={inputFields.exclamation} onChange={handleChange}/>
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
