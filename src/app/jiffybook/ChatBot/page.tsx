// pages/index.js
'use client'
import { useState, useEffect } from 'react';
import {auth,db,model } from '../../../../firestore';
import styles from './Home.module.css';

export default function Home() {

    type Message = {
        role: string;
        content: string;
      };


  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]); // Explicitly set the type here





  // const fetchBookingStatusFromFirestoretesting = async (userId) => {
  //   try {
  //     // Reference the 'bookings' collection
  //     const bookingsRef = db.collection('bookings'); // Adjust collection name as needed
  
  //     // Query Firestore for documents with the specified userId
  //     const querySnapshot = await bookingsRef.where('userId', '==', userId).get();
  
  //     if (!querySnapshot.empty) {
  //       const bookingStatusList = [];
        
  //       // Loop through all matching documents to retrieve booking statuses
  //       querySnapshot.forEach((doc) => {
  //         const data = doc.data();
  //         console.log(`Booking ID: ${doc.id}, Status: ${data.status}`);
  //         bookingStatusList.push({
  //           bookingId: doc.id,
  //           status: data.status,
  //           ...data, // Add other fields if needed
  //         });
  //       });
  
  //       // Return the list of booking statuses
  //       return bookingStatusList;
  //     } else {
  //       console.log('No bookings found for this user.');
  //       return null; // Return null if no bookings found
  //     }
  //   } catch (error) {
  //     console.error('Error fetching booking status:', error);
  //     throw error;
  //   }
  // };
  


  // const handleChattesting = async (userInput, history) => {
  //   // Check for booking status based on user ID input
  //   if (userInput.toLowerCase().includes('booking status')) {
  //     const userId = 'YOUR_USER_ID_HERE'; // Replace with actual user ID retrieval logic
  //     const bookingStatus = await fetchBookingStatusFromFirestore(userId);
  
  //     if (bookingStatus) {
  //       return bookingStatus.map(status => `Booking ID: ${status.bookingId}, Status: ${status.status}`).join('\n');
  //     } else {
  //       return 'No booking found for the given user.';
  //     }
  //   }
  
  //   // Existing Firestore response fetch logic
  //   const firestoreResponse = await fetchResponseFromFirestore(userInput);
  
  //   if (firestoreResponse) {
  //     return firestoreResponse;
  //   }
  
  //   // Format the history correctly
  //   const formattedHistory = history.map(message => ({
  //     role: message.role,
  //     parts: [{ text: message.content }],
  //   }));
  
  //   // Ensure the last message is from the model
  //   if (history.length > 0 && history[history.length - 1].role === 'user') {
  //     formattedHistory.push({
  //       role: 'model',
  //       parts: [{ text: ' ' }], // Placeholder for the model response
  //     });
  //   }
  
  //   const chat = model.startChat({
  //     history: formattedHistory,
  //     generationConfig: {
  //       maxOutputTokens: 100,
  //     },
  //   });
  
  //   const result = await chat.sendMessageStream(userInput);
  //   let modelResponse = '';
  
  //   for await (const chunk of result.stream) {
  //     const chunkText = chunk.text();
  //     modelResponse += chunkText;
  //   }
  
  //   return modelResponse;
  // };
  


  // const handleSubmittesting = async (e) => {
  //   e.preventDefault();
  //   if (!userInput) return;
  
  //   const newMessages = [...messages, { role: 'user', content: userInput }];
  //   setMessages(newMessages);
  //   setLoading(true);
  //   setUserInput('');
  
  //   try {
  //     const response = await handleChat(userInput, newMessages);
  //     setMessages((prev) => [
  //       ...prev,
  //       { role: 'model', content: response },
  //     ]);
  //   } catch (error) {
  //     console.error('Error handling chat:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  







  const fetchResponseFromFirestore = async (input) => {
    // Query Firestore for a response based on user input
    const responseRef = db.collection('dbAI'); // Adjust collection name as needed
    const querySnapshot = await responseRef.where('Name', '==', input).get();
console.log("querySnapshot",querySnapshot)

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]; // Get the first match
      return doc.data().strCname; // Assuming each document has an 'answer' field
    } else {
      return null; // No response found
    }
  };

  const handleChat = async (userInput, history) => {
    // Fetch response from Firestore
    const firestoreResponse = await fetchResponseFromFirestore(userInput);

    if (firestoreResponse) {
      return firestoreResponse;
    }

    // Format the history correctly
    const formattedHistory = history.map(message => ({
      role: message.role,
      parts: [{ text: message.content }],
    }));

    // Ensure the last message is from the model
    if (history.length > 0 && history[history.length - 1].role === 'user') {
      formattedHistory.push({
        role: 'model',
        parts: [{ text: ' ' }], // Placeholder for the model response
      });
    }

    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 100,
      },
    });

    const result = await chat.sendMessageStream(userInput);
    let modelResponse = '';

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      modelResponse += chunkText;
    }

    return modelResponse;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput) return;

    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setLoading(true);
    setUserInput('');

    try {
      const response = await handleChat(userInput, newMessages);
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: response },
      ]);
    } catch (error) {
      console.error('Error handling chat:', error);
    } finally {
      setLoading(false);
    }
  };




  


  return (
    <div className={styles.container}>
      <h1>Chat with AI</h1>
    
      
        <div>
  
          <div className={styles.chatContainer}>
            <div className={styles.messages}>
              {messages.map((msg, index) => (
                <div key={index} className={msg.role === 'user' ? styles.userMessage : styles.modelMessage}>
                  <strong>{msg.role === 'user' ? 'You: ' : 'AI: '}</strong>
                  {msg.content}
                </div>
              ))}
              {loading && <div className={styles.loading}>AI is typing...</div>}
            </div>
            <form onSubmit={handleSubmit} className={styles.inputForm}>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className={styles.input}
              />
              <button type="submit" className={styles.button}>Send</button>
            </form>
          </div>
        </div>
     
    </div>
  );
}
