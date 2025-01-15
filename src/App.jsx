import { useState } from 'react'
import './style/App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './webpages/Homepage.jsx';
import ResponsePage from './webpages/Responsepage.jsx';

function App() {

  const [hasImage, setHasImage] = useState(false); 
  const [responseMessage, setResponseMessage] = useState(''); 

  const image_responses = [
    "Yes, everything is a sandwich. ", 
    "Yes, even your imagination is a sandwich. ", 
    "Yes, the universe is just a giant sandwich. ", 
    "Yes, but only on Tuesdays. ", 
    "Yes, but is it a gOoD sandwich? ", 
    "Yes, it’s sandwich enough for me!", 
    "Yes, you genius sandwich identifier, you nailed it.", 
    
    "No, nothing is a sandwich. ", 
    "No, and I’m offended you even asked. ", 
    "No, but nice try. ", 
    "No, sandwiches are a myth. ", 
    "No, sandwiches are lies. It doesn’t exist.  ", 
    "No, not in this dimension. ", 
    "No, I’m sorry, but that’s just embarrassing. ", 
    "No, but it could aspire to be one. ", 
    "No, that’s the furthest thing from a sandwich I’ve ever seen. ", 
    "No, this couldn’t be a sandwich even if it wanted to. ", 
    "No, I’ve seen sandwiches in my dreams. This isn’t one.", 

    "Who cares? ", 
    "As if I care. ", 
    "As if you care. ", 
    "It is either a sandwich or not a sandwich. ", 
    "It is both a sandwich and not a sandwich. ", 
    "It is neither a sandwich nor not a sandwich. ", 
    "Maybe. But what even is a sandwich? ", 
    "It can be, if you believe hard enough. ", 
    "It might be. ", 
    "Just let it be. Life is short. ", 
    "I have no idea what that is but it’s not a sandwich. ", 
    "Who am I to define sandwiches for you? ", 
    "Sandwiches are relative. This could be one on Jupiter. ", 
    "I don’t know. Do you feel it’s a sandwich? ", 
    "Why are you even asking me this? ", 
    "This sandwich is sandwiching. ", 
    "This sandwich is not sandwiching. ", 
    "Why would you even try to use this website? ", 
    "Did you just Google “sandwich” images? ", 
    "Sandwiches have dignity, unlike this. ", 
    "Are you okay?", 
    "It’s a burrito’s cousin. ", 
    "That’s a taco in denial. ", 
    "Looks like a ravioli pretending to be a sandwich. "
  ]; 

  const no_image_responses = [
    "Is nothing a sandwich? ", 
    "Yes, NOTHING is a sandwich. ", 
    "No, NOTHING is not a sandwich. ", 
    "If nothing’s a sandwich, then everything’s a sandwich. Think about it. ", 
    "Please upload something. Anything. A sandwich would be ideal. ", 
    "Sandwiches can’t upload themselves, you know."
  ];

  const generateResponse = () => {
    if (hasImage) {
      return image_responses[Math.floor(Math.random() * image_responses.length)];
    }
    else {
      return no_image_responses[Math.floor(Math.random() * no_image_responses.length)];
    }
  }


  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSubmit={() => setResponseMessage(generateResponse())}
              />
            }
          />
          <Route
            path="/response"
            element={<ResponsePage message={responseMessage} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App
