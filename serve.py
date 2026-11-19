import http.server
import socketserver
import os
import mimetypes

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('image/png', '.png')
mimetypes.add_type('image/jpeg', '.jpg')

DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'dist')
PORT = 5173

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # If file doesn't exist, serve index.html for SPA client-side routing
        path = self.translate_path(self.path)
        if not os.path.exists(path) and not self.path.startswith('/assets/'):
            self.path = '/index.html'
        return super().do_GET()

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

# Allow fast port reuse
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('127.0.0.1', PORT), SPAHandler) as httpd:
    print(f'Server listening at http://127.0.0.1:{PORT}')
    httpd.serve_forever()
