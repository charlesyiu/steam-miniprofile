this a fork of [this](https://github.com/gamer2810/steam-miniprofile/) repository.  
--
the fork embeds these css files directly into the html:
- https://steamcommunity-a.akamaihd.net/public/shared/css/shared_global.css?v=8auqH9wO7vE-&l=english
- chrome://global/skin/media/videocontrols.css
  
and removes unnecessary trackers and libraries:
- https://www.googletagmanager.com/gtag/js?id=UA-172121567-2
- https://code.jquery.com/jquery-3.5.1.min.js

usage
--
either embed a script that creates a frame for you
```html
<script src="https://smb.yiu.ch/embed.min.js" data-id="1201116503"></script>
```
or do it yourself with an iframe like the one below.
```html
<iframe src="https://smb.yiu.ch/index.min.html<steamid>"
    style="border: none;"
    name="my steam profile"
    scrolling="no"
    frameborder="1"
    marginheight="0px"
    marginwidth="0px"
    height="265px"
    width="325px"
    allowfullscreen>
</iframe>
```
please note that instead of putting your steam id as a search parameter (`?accountId=<steamid>`) you put it in the hash (`#<steamid>`)

urls
--
if https://smb.yiu.ch does not load, please replace the hostname to:
- https://charlesyiu.github.io/steam-miniprofile/<file>
- https://steam-miniprofile.pages.dev/<file>
