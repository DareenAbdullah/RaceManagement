import keyboard


class Penalty:

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
			
	def getScore(self):
		return penalty
