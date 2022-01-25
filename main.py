from flask import Flask, render_template, request,jsonify
import flask
import requests
import time
from datetime import datetime, date
import datetime as dt
import ciso8601
import csv
from babel.dates import format_date, format_datetime, format_time



file = open('out.csv')
csvreader = csv.reader(file)
rows = []
for row in csvreader:
    rows.append(row)
file.close()


now = datetime.now()
today =('%04d-%02d-%02d' %(now.year, now.month, now.day))

def historical(coin,day):
    ts = ciso8601.parse_datetime(day)
    unix = time.mktime(ts.timetuple())
    coin = coin.upper()
    url_2 = "https://min-api.cryptocompare.com/data/pricehistorical?fsym={!s}&tsyms=USD&ts={!s}&api_key=****".format(coin,unix) # API key hidden
    response_2 = requests.request("GET", url_2)
    json_2 = response_2.json()
    return json_2[coin]["USD"]

def current(coin):
    coin = coin.upper()
    url_1 = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms={!s}&tsyms=USD&api_key=****".format(coin) # API key hidden
    response_1 = requests.request("GET", url_1)
    json_1 = response_1.json()
    return json_1['RAW'][coin]['USD']['PRICE']

def updown(now,past):
    return ((now - past) / past) * 100

def gains(number,up):
    number =  round(number + number * (up * 0.01),2)
    return '{:,}'.format(number).replace(',', ' ')

def coin_ammount(number,price):
    zeros = str(number).count('0')
    ammount =  number/price
    return round(ammount, zeros+2)

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def start():

    if flask.request.method == 'POST':
        
        date_given = request.form['date']
        choice = request.form['coin']
        number = request.form['number']

        if number.isnumeric() == False:
            return render_template('page.html', out="number")

        elif date_given == "":
            return render_template('page.html', out="bad")

        elif choice == "":
            return render_template('page.html', out="choice")

        else:

            choice_lower = choice.lower()

            answer = "none"
            f = 0
            while f < len(rows):
                if rows[f][0] == choice_lower:
                    answer = rows[f-1][0]
                f += 1


            hist_price = historical(answer,date_given)
            now_price = current(answer)
            if hist_price == 0:
                return render_template('page.html',today=today,out="zero")
            up = round(updown(now_price,hist_price),2)
            gain = gains(float(number),up)
            ammount = coin_ammount(float(number),hist_price)

            datems = dt.datetime.strptime(str(date_given), "%Y-%m-%d")
            d = date(datems.year, datems.month, datems.day)
            date_words = format_date(d, locale='en')

            if up > 0:
                change = "increased"
            else:
                change = "decreased"

            return render_template(
                'page.html',
                today=today,
                date=date_given,
                hist_price=hist_price,
                now_price=now_price,
                up=up,
                gain=gain,
                out="good",
                choice=choice,
                answer=answer.upper(),
                change=change,
                ammount=ammount,
                number=number,
                date_words=date_words
                )

    return render_template('page.html', today=today)




if __name__ == '__main__':
    app.run(debug=True)
