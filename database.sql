/*
    Create a database called react_gallery
*/

CREATE TABLE "photos" (
   id  SERIAL PRIMARY KEY,
   path varchar(255) not null,
   description varchar(255) not null,
   likes Integer not null
);

INSERT INTO "photos" ("path", "description", "likes")
		VALUES('images/jose_youtube.jpg', 'Drawing made by sister art teacher which I digitalized and colored', 0),
			('https://scontent-msp1-1.xx.fbcdn.net/v/t31.18172-8/12068812_10207156067596839_1093354693409777857_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=qmF6BTPSW88AX-NOWnb&_nc_ht=scontent-msp1-1.xx&oh=d6dccddf22cfd42bb49ad6c209262bf3&oe=60EE6609', 'Only photo where everyone in my family looks great. But my Dad is the one missing. Dammit', 0),
			('https://scontent-msp1-1.xx.fbcdn.net/v/t1.18169-9/10570553_332794436871569_5326430698028217306_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=6TZu88QPi1YAX-OAdne&_nc_ht=scontent-msp1-1.xx&oh=d75e602593a8cd47d067a1dcbcb4b80d&oe=60F03EDE', 'My wife and her handmade MarioBros that she gifted me on my 20th birthday', 0);