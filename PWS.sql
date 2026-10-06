CREATE TABLE biodata (
	id SERIAL PRIMARY KEY,
	nama VARCHAR(100) NOT NULL,
	nim VARCHAR(20) NOT NULL,
	kelas VARCHAR(10) NOT NULL
);

INSERT INTO biodata (nama, nim, kelas)
VALUES ('Maulina','20240140221','D')