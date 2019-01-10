from app import app

HOST = "localhost"
PORT = 5000
DEBUG = True

if __name__ == '__main__':
    app.run(host=HOST, port=PORT, debug=DEBUG)
