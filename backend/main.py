from flask import Flask
from flask_socketio import SocketIO
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!' #This will have to be a hashed secret
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on("connection")
def idk():
    print("I just wnat to run this to see what is going on")
    socketio.emit("message", "sup")
    pass

@socketio.on("my event")
def handle_event(string):
    print("This is my string " + str(string))

if __name__ == "__main__":
    print("What")
    socketio.run(app, port="6500")
 