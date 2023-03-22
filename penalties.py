import keyboard


class Penalty:

	penalty = 0
	
	while True:
		keyboard.read_key()
		if keyboard.is_pressed("esc"):
			print("The total score is: " , score)
			break
		elif keyboard.is_pressed("space"):
			penalty += 1

	def getScore(self):
		return penalty
