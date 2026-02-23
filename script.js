const chatContainer = document.getElementById('chatContainer');
const messageInput = document.getElementById('messageInput');

let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

function renderMessages() {
    chatContainer.innerHTML = '';
    messages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', msg.sender);

        const avatar = document.createElement('img');
        avatar.src = msg.sender === 'you' ? 'https://i.pravatar.cc/35?img=5' : 'https://i.pravatar.cc/35?img=12';
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

function sendMessage() {
    const text = messageInput.value.trim();
    if(!text) return;

    const newMsg = { sender: 'you', text };
    messages.push(newMsg);

    // Auto-reply from "friend"
    const replyMsg = { sender: 'friend', text: Echo: ${text} };
    messages.push(replyMsg);

    localStorage.setItem('chatMessages', JSON.stringify(messages));
    renderMessages();
    messageInput.value = '';
}

renderMessages();
