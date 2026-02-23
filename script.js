const chatContainer = document.getElementById('chatContainer');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

// Render all messages
function renderMessages() {
    chatContainer.innerHTML = '';
    messages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', msg.sender);

        const avatar = document.createElement('img');
        avatar.src = msg.sender === 'you' 
            ? 'https://i.pravatar.cc/35?img=5' 
            : 'https://i.pravatar.cc/35?img=12';
        avatar.alt = 'avatar';

        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.innerText = msg.text;

        if(msg.sender === 'you') {
            msgDiv.appendChild(bubble);
            msgDiv.appendChild(avatar);
        } else {
            msgDiv.appendChild(avatar);
            msgDiv.appendChild(bubble);
        }

        chatContainer.appendChild(msgDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    });
}

// Send message function
function sendMessage() {
    const text = messageInput.value.trim();
    if(!text) return;

    // Add your message
    const newMsg = { sender: 'you', text };
    messages.push(newMsg);

    // Auto-reply (optional)
    const replyMsg = { sender: 'friend', text: `Echo: ${text}` };
    messages.push(replyMsg);

    // Save and render
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    renderMessages();

    // Clear input
    messageInput.value = '';
}

// Attach click and enter key
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') sendMessage();
});

// Initial render
renderMessages();
