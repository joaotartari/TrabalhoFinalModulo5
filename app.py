from flask import Flask,  jsonify, render_template, request, redirect, url_for, flash
app = Flask(__name__)




@app.route('/jogoDaVelha')
def jogoDaVelha():
    return render_template('index.html')





@app.route('/startGame', methods=['POST'])
def startGame():
    jogador1 = request.form['jogador1']
    jogador2 = request.form['jogador2']
    return redirect(url_for('gameBoard', jogador1=jogador1, jogador2=jogador2))


@app.route('/gameBoard')
def gameBoard():
    jogador1 = request.args.get('jogador1')
    jogador2 = request.args.get('jogador2')
    return render_template('gameboard.html', jogador1=jogador1, jogador2=jogador2)

if __name__ == '__main__':
    app.run(debug=True)