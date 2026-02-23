body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 20px;
}

@keyframes gradientBG {
    0% {background-position:0% 50%;}
    50% {background-position:100% 50%;}
    100% {background-position:0% 50%;}
}

h1 {
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}

.chat-container {
    width: 100%;
    max-width: 500px;
    height: 400px;
    background: rgba(255,255,255,0.9);
    border-radius: 20px;
    padding: 15px;
    overflow-y: auto;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    margin-bottom: 15px;
}

.message {
    display: flex;
    margin: 5px 0;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from {opacity:0; transform: translateY(10px);}
    to {opacity:1; transform: translateY(0);}
}

.message.you { justify-content: flex-end; }
.message.friend { justify-content: flex-start; }

.message .bubble {
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 20px;
    position: relative;
    color: white;
    font-weight: 500;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.message.you .bubble {
    background: linear-gradient(135deg, #6a11cb, #2575fc);
}

.message.friend .bubble {
    background: linear-gradient(135deg, #ff416c, #ff4b2b);
}

.message img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 0 7px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.input-container {
    display: flex;
    width: 100%;
    max-width: 500px;
}

#messageInput {
    flex: 1;
    padding: 10px 15px;
    border-radius: 25px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 15px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    background: linear-gradient(135deg, #f7971e, #ffd200);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
