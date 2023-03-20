## Server for monitoring Steam Community Market

# Cloudrun contains main server
 cron job set to execute script every 5 seconds. Script requests Steam's itemordersactivity API, checking for newly listed items on market. After which runs Cloud function through HTTPS requests.

# Functions contains Cloud functions
 1000 are deployed for multiple IP adresses, as Steam likes to throw 429 constantly. Function requests Steam's itemlisting API, where it checks for price, listingid, special link which used to gain additional item characteristics via Csgofloat API. Items then get filtered, and send to Telegram Channel