import flask
from flask_cors import CORS
#Python 2.x program to transcribe an Audio file 
import speech_recognition as sr 
  
AUDIO_FILE = ("news.wav") 
  
# use the audio file as the audio source 
  
r = sr.Recognizer() 
  
with sr.AudioFile(AUDIO_FILE) as source: 
    #reads the audio file. Here we use record instead of 
    #listen 
    audio = r.record(source)   
  
try: 
    text=r.recognize_google(audio)
  
except sr.UnknownValueError: 
    text="Google Speech Recognition could not understand audio"
  
except sr.RequestError as e: 
    text="Could not request results from Google Speech Recognition service; {0}".format(e) 


app = flask.Flask("__main__")
CORS(app)

@app.route("/")
def my_index():
    return flask.render_template("index.html",token=text)

app.run(debug=True)
