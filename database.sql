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
		VALUES('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0 ),
			('images/jose_youtube.jpg', 'Drawing made by sister art teacher which I digitalized and colored', 0);