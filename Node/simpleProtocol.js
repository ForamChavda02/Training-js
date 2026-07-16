const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');
  
  let buffer = '';
  
  socket.on('data', (data) => {
    buffer += data.toString();
    
    let boundary = buffer.indexOf('\n');
    while (boundary !== -1) {
      const message = buffer.substring(0, boundary);
      buffer = buffer.substring(boundary + 1);

      try {
        const parsedMessage = JSON.parse(message);
        console.log('Received message:', parsedMessage);
        
        switch (parsedMessage.type) {
          case 'greeting':
            socket.write(JSON.stringify({
              type: 'welcome',
              message: `Hello, ${parsedMessage.name}!`,
              timestamp: Date.now()
            }) + '\n');
            break;
            
          case 'query':
            socket.write(JSON.stringify({
              type: 'response',
              queryId: parsedMessage.queryId,
              result: handleQuery(parsedMessage.query),
              timestamp: Date.now()
            }) + '\n');
            break;
            
          default:
            socket.write(JSON.stringify({
              type: 'error',
              message: 'Unknown message type',
              timestamp: Date.now()
            }) + '\n');
        }
      } catch (err) {
        console.error('Error processing message:', err);
        socket.write(JSON.stringify({
          type: 'error',
          message: 'Invalid JSON format',
          timestamp: Date.now()
        }) + '\n');
      }
      
      boundary = buffer.indexOf('\n');
    }
  });
  
  socket.on('end', () => {
    console.log('Client disconnected');
  });
  
  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

function handleQuery(query) {
  if (query === 'time') {
    return { time: new Date().toISOString() };
  } else if (query === 'stats') {
    return {
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      platform: process.platform
    };
  } else {
    return { error: 'Unknown query' };
  }
}

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`JSON protocol server running on port ${PORT}`);
});