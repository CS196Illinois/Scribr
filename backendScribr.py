from flask import Flask
from flask_cors import CORS
import os
import speech_recognition as sr
app = Flask(__name__)
CORS(app)
@app.route('/magic', methods = ['POST'])
def save():
    if request.method == 'POST':
        f = request.files['file']  
        f.save(f.filename)
        command2mp3 = "ffmpeg -i f f.mp3"
        command2wav = "ffmpeg -i f.mp3 f.wav"

        os.system(command2mp3)
        os.system(command2wav)

        r = sr.Recognizer()
        with sr.AudioFile('realEstate.wav') as source:
            audio = r.record(source, duration = 100)
            try:
                text = r.recognize_google(audio)
                print(text)
            except:
                print('Sorry..run again..')
                  

if __name__ == '__main__':
    app.run(debug = True)

flask_cors.CORS(app, expose_headers='Authorization')
