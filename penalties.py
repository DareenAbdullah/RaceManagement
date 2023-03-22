import keyboard
import time 


class Penalty:
	
	def time_convert(sec):
	mins = sec // 60
	sec = sec % 60
	hours = mins // 60
	mins = mins % 60
	print("Time Lapsed = {0}:{1}:{2}".format(int(hours),int(mins),sec))
	
	
	input("Press Enter to start")
	start_time = time.time()
	input("Press Enter to stop")
	end_time = time.time()
	time_lapsed = end_time - start_time
	time_convert(time_lapsed)

	penalty = 0
	
	while True:
		keyboard.read_key()
		if keyboard.is_pressed("esc"):
			print("The total score is: " , score)
			break
		elif keyboard.is_pressed("1"):
			penalty += 1
		elif keyboard.is_pressed("2"):
			penalty += 2
		elif keyboard.is_pressed("space"):
			penalty += 0.5
			
	sec = sec + penalty
	
	def getScore(self):
		return penalty
