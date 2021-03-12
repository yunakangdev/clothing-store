## 📑 PROJECT

A website that shows the brand's latest collection and stockists

####https://yuna-the-label.herokuapp.com/

---

## 📎 PLAN

#### MENU

- [x] Home
- [x] Collection
- [x] About
- [x] Contact
- [x] Stockists
- [x] Privacy policy
- [x] Subscribe

#### OTHERS

- [x] Custom Logo
- [x] Background Music
- [x] Animation
- [x] Mail & Subscribe

---

## 💡 ISSUE

- [ ] 2020/01/05 : Change CSS for Contact / Subscribe Form

- [ ] 2020/01/05 : How to put background music in the header? Handlebar!

- [ ] 2020/01/05 : Apply BEM

- [ ] 2020/01/05 : Change Privacy Policy

- [x] 2020/01/05 : Heroku error H10, H20, H81

  <!-- https://gist.github.com/randallreedjr/aa89e069371d07371882eea2df15fb4d -->

1.  H81: H81 - Blank app  
    No code has been pushed to this application. To get rid of this message you need to do one deploy.

         git commit --allow-empty -m "empty commit"
         git push heroku master
         git push heroku master -f (overwrite this empty deploy on the next push of master)

2.  H10: port issue  
    const port = process.env.PORT || 3000;

3)  H20:  
    Heroku error code H20 indicates that the routing mesh enqueued a request for 75 seconds waiting for your app to boot

    tools.heroku.support/limits/boot_timeout

    add "start": "node server.js" in package.json

    heroku restart
