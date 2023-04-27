# client test run

import socket, pickle, struct 
import cv2

# create socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host_ip = '192.168.8.185'
port = 5500
client_socket.connect((host_ip, port))

while True:
    if key == ord('q'):
       	client_socket.close()
