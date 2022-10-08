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
you can use an iframe like the one below or load it in a `div` with jquery or javascript.
```html
<iframe src="https://smb.yiu.ch/#<steamid>"
    style="border:0px #ffffff none;"
    name="my steam profile"
    scrolling="no"
    frameborder="1"
    marginheight="0px"
    marginwidth="0px"
    height="400px"
    width="600px"
    allowfullscreen>
</iframe>
```
please note that instead of putting your steam id as a search parameter (`?accountId=<steamid>`) you put it in the hash (`#<steamid>`)