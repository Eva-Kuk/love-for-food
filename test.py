# from datetime import time
# [('12:00 AM', '12:00 AM), ('12:30 AM', '12:30 AM')....('11:30 PM', '11:30 PM')]
# h=hour, m=minute

# for h in range(0, 24):
#     for m in(0, 30):
#         print(time(h, m).strftime('%I:%M %p'))

# t = [(time(h, m).strftime('%I:%M %p'), time(h, m).strftime('%I:%M %p')) for h in range(0, 24) for m in(0, 30)]
# print(t)