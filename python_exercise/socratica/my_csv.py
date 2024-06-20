#!/usr/bin/env python3
"""
    Module implementing use of csv module in sanitizing data

"""
import csv
from datetime import datetime

path = "google_stock_data.csv"
file = open(path, newline='')
reader = csv.reader(file)

header = next(reader)

data = []

print(header)
for row in reader:
    # row = [Date, Open, High, Low, Close, Volume, Adj.Close]

    date = datetime.strptime(row[0], '%m/%d/%Y')
    open_price = float(row[1])
    high = float(row[2])
    low = float(row[3])
    close = float(row[4])
    volume = int(row[5])
    adj_close = float(row[6])

    data.append([date, open_price, high, low, close, volume, adj_close])


for i in range(5):
    print(data[i])
