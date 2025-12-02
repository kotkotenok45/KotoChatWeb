const SERVER_URL = 'wss://kotochat-server.onrender.com';
const socket = new WebSocket(SERVER_URL);

// Логика мессенджера для десктопа
socket.onopen = () => {
    console.log('Connected to WebSocket server');
    document.getElementById('status').textContent = '● Онлайн';
};

// Отправка сообщения
function sendMessage() {
    const text = document.getElementById('messageInput').value;
    socket.send(JSON.stringify({
        type: 'message',
        text: text,
        sender: currentUser,
        timestamp: new Date().toISOString()
    }));
}