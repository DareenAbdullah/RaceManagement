# client test run

import socket, pickle, struct 
import cv2

# create socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host_ip = '10.0.0.26'
port = 5500
client_socket.connect((host_ip, port))

data =b""
payload_size = struct.calcsize("Q")
while True:
    vid = cv2.VideoCapture(0)
    while (vid.isOpened()):
        img,frame = vid.read()
        a = pickle.dumps(frame)
        message = struct.pack("Q",len(a)) + a
        client_socket.sendall(message)
        cv2.imshow('TRANSMITTING VIDEO', frame)
        key = cv2.waitKey(1) & 0xFF
        if key == ord('q'):
            client_socket.close()

