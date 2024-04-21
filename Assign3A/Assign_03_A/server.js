const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000; // Set port from environment variable or default to 3000
const PUBLIC_DIR = path.join(__dirname, 'public'); // Assuming your static files are in a 'public' directory

const server = http.createServer((req, res) => {
    // Get the file path requested by the client
    const filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url);
    
    // Check if the requested file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        // Read the file and serve its content
        fs.readFile(filePath, (err, data) => {
            if (err) {
                // Error reading file
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
                return;
            }

            // Determine content type based on file extension
            const contentType = getContentType(filePath);

            // Set appropriate content type header
            res.writeHead(200, { 'Content-Type': contentType });

            // Send the file content to the client
            res.end(data);
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Function to determine content type based on file extension
function getContentType(filePath) {
    const extname = path.extname(filePath).toLowerCase();
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.json':
            return 'application/json';
        case '.png':
            return 'image/png';
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.gif':
            return 'image/gif';
        default:
            return 'application/octet-stream';
    }
}
