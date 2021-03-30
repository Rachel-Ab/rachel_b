# ************************************************************
# Sequel Ace SQL dump
# Version 3024
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 8.0.23)
# Database: portfolio
# Generation Time: 2021-03-29 12:06:03 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table competences
# ------------------------------------------------------------

DROP TABLE IF EXISTS `competences`;

CREATE TABLE `competences` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `img` varchar(50) DEFAULT NULL,
  `rang` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `competences` WRITE;
/*!40000 ALTER TABLE `competences` DISABLE KEYS */;

INSERT INTO `competences` (`id`, `title`, `img`, `rang`)
VALUES
	(1,'JS',NULL,6),
	(2,'ReactJS',NULL,5),
	(3,'NodeJS',NULL,4),
	(4,'MySQL',NULL,4);

/*!40000 ALTER TABLE `competences` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table contact
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contact`;

CREATE TABLE `contact` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `link` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;

INSERT INTO `contact` (`id`, `title`, `link`)
VALUES
	(1,'Linkedin','https://www.linkedin.com/in/rachelabenzoar/'),
	(2,'Github','https://github.com/Rachel-Ab'),
	(3,'Mail','rachel.abenzoar@gmail.com');

/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table credits
# ------------------------------------------------------------

DROP TABLE IF EXISTS `credits`;

CREATE TABLE `credits` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `credits` WRITE;
/*!40000 ALTER TABLE `credits` DISABLE KEYS */;

INSERT INTO `credits` (`id`, `text`)
VALUES
	(1,'Site fait par Abenzoar Rachel\nInspiré de :\n                      XBOX ONE (editeur microsoft)\n                      LES SIMS4  (editeur Electronic Arts)\n                      GTA V (editeur Rockstar Games)\n                      MINECRAFT (Mojang Studios)\nGithub de réference pour la page des crédits : https://github.com/Anemolo/FoldingDOM\nGifs de GIPHY');

/*!40000 ALTER TABLE `credits` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table hobbies
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hobbies`;

CREATE TABLE `hobbies` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `gif` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `hobbies` WRITE;
/*!40000 ALTER TABLE `hobbies` DISABLE KEYS */;

INSERT INTO `hobbies` (`id`, `title`, `gif`)
VALUES
	(1,'Jeux vidéo','<iframe src=\"https://giphy.com/embed/901ojwtVHZAze\" width=\"480\" height=\"161\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/video-game-fast-901ojwtVHZAze\">via GIPHY</a></p>'),
	(2,'Musique','<iframe src=\"https://giphy.com/embed/ccW8StTbuyuHyicgCT\" width=\"480\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/desiigner-ccW8StTbuyuHyicgCT\">via GIPHY</a></p>'),
	(3,'Sports','<iframe src=\"https://giphy.com/embed/WsjvRxj8RRxYZgIzzI\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/chancetherapper-chance-the-rapper-hot-shower-WsjvRxj8RRxYZgIzzI\">via GIP'),
	(4,'Voyages','<iframe src=\"https://giphy.com/embed/lXC2gmHf2ypUs\" width=\"480\" height=\"255\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/lXC2gmHf2ypUs\">via GIPHY</a></p>'),
	(5,'Cinéma','<iframe src=\"https://giphy.com/embed/3XCqTTqPhQWDvPQPK6\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/charliechaplinofficial-charlie-chaplin-charlot-3XCqTTqPhQWDvPQPK6\">via G');

/*!40000 ALTER TABLE `hobbies` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table homepage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `homepage`;

CREATE TABLE `homepage` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
  `points` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `homepage` WRITE;
/*!40000 ALTER TABLE `homepage` DISABLE KEYS */;

INSERT INTO `homepage` (`id`, `pseudo`, `points`)
VALUES
	(1,'Rachou',504202);

/*!40000 ALTER TABLE `homepage` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table parcours
# ------------------------------------------------------------

DROP TABLE IF EXISTS `parcours`;

CREATE TABLE `parcours` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `date` varchar(100) DEFAULT NULL,
  `text` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `parcours` WRITE;
/*!40000 ALTER TABLE `parcours` DISABLE KEYS */;

INSERT INTO `parcours` (`id`, `date`, `text`)
VALUES
	(1,'Novembre 2020-Avril 2021','WILD CODE SCHOOL'),
	(2,'Août 2020','PISCINE ECOLE 42'),
	(3,'2014-2019','AUTODIDACTE');

/*!40000 ALTER TABLE `parcours` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table projet
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projet`;

CREATE TABLE `projet` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `logo` varchar(200) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL,
  `text` varchar(250) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `projet` WRITE;
/*!40000 ALTER TABLE `projet` DISABLE KEYS */;

INSERT INTO `projet` (`id`, `logo`, `link`, `text`)
VALUES
	(1,NULL,'https://rachel-ab.github.io/','Play Again'),
	(2,NULL,'https://green-solution.netlify.app/','Green Solution'),
	(3,NULL,NULL,'HighCube'),
	(4,NULL,NULL,'Alabmodeling');

/*!40000 ALTER TABLE `projet` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
