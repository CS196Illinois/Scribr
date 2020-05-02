import os
from flask import Flask, request, redirect, flash, jsonify
from werkzeug.utils import secure_filename #pass it a filename and it will return a secure version of it. 
import pydub  # change format from mp4 to wav for google API
import glob # screen the files
import speech_recognition as sr  # the google speech recognition API
from flask_cors import CORS # enable cross-origin resources sharing allowed

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = "./"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# You have 50 free calls per day, after that you have to register somewhere
# around here probably https://cloud.google.com/speech-to-text/
# the time limit to transcribe is 150 seconds without subscription


@app.route("/", methods=["GET", "POST"])
def index():
    extra_line = ''
    if request.method == "POST":
        # Check if the post request has the file part.
        if "file" not in request.files:
            flash("No file part")
            return redirect(request.url)
        file = request.files["file"]
        # If user does not select file, browser also
        # submit an empty part without filename.
        if file.filename == "":
            flash("No selected file")
            return redirect(request.url)
        if file:
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            file.save(filepath)

            mp4_files = glob.glob('./*.mp4') # return list of file with the format of mp4
            for mp4_file in mp4_files:  # change mp4 to wav for google speech recognition
                wav_file = os.path.splitext(mp4_file)[0] + '.wav'
                sound = pydub.AudioSegment.from_file(mp4_file)
                sound.export(wav_file, format="wav")
                os.remove(mp4_file)
            # Speech Recognition stuff.
            r = sr.Recognizer()
            audio_file = sr.AudioFile(wav_file)
            with audio_file as source:
                audio = r.record(source, duration = 100) # set the audio and its duration
                try:
                    text = r.recognize_google(audio) # utilize API to transcribe
                except:
                    text = "sorry, there is an error"
            extra_line = f'Your text: "{text}"'
           


    return jsonify(extra_line) # transform the data into JSON format


if __name__ == "__main__":
    app.run(debug=True, threaded=True)
