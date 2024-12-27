import moviepy.editor as mp 
import speech_recognition as sr 

# Load the video 
video = mp.VideoFileClip("video.mp4") 

# Extract the audio from the video 
audio_file = video.audio 
audio_file.write_audiofile("geeksforgeeks.wav") 

# Initialize recognizer 
r = sr.Recognizer() 

# Load the audio file 
with sr.AudioFile("geeksforgeeks.wav") as source: 
	data = r.record(source) 

# Convert speech to text 
text = r.recognize_google(data)

# print(text) 





import google.generativeai as genai

genai.configure(api_key="AIzaSyBY3BA6Z1n7bcb9pqWIlfV3ucOjiW-pkac")
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content(f" {text}. create a small insgram reel caption with hash tags and emojis")
print(response.text)


