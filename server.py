import flask
import discord

wh = discord.SyncWebhook.from_url("wh_url")

app = flask.Flask(__name__)

@app.route("/")
@app.route("/index")
@app.route("/index.html")
def serve_index():
    return open("index.html","r",encoding="utf-8").read()

@app.route("/contact", methods=["POST"])
def send_message():
    request = flask.request

    print(request.args)

    name = request.args.get("name", None)
    email = request.args.get("email", None)
    message = request.args.get("message", None)

    if not (name == None or email == None or message == None):
        ...
    else:
        response = flask.make_response('400: Bad Request')
        response.status_code = 400

        return response


app.run("0.0.0.0", 7878, debug=True)