-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: gameedukasi
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `idAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'arminsaleh','arminsaleh1970','2023-07-18','2023-07-18');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `idSoal` int(100) NOT NULL AUTO_INCREMENT,
  `questions` varchar(999) NOT NULL,
  `a1` varchar(100) NOT NULL,
  `a2` varchar(100) NOT NULL,
  `a3` varchar(100) NOT NULL,
  `a4` varchar(100) NOT NULL,
  `correct` varchar(100) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idSoal`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Teacher : “Siti please prepare your best for the\r\ncompetition, will you? ......... Good luck!”\r\nSiti : “I hope so too, Ma’am. Yes, I’ll do my\r\nbest”','of course','I hope you don\'t join the competition','Thanks',' I hope you win the first prize too',' I hope you win the first prize too','2023-07-05','2023-07-05'),(2,'I ………. a song very well','To sing','Singing','Sing','Sings','Sing','2023-07-05','2023-07-05'),(3,'…… there some books in your bag ?','Are','Is','Were','Was','Is','2023-07-05','2023-07-05'),(4,'There ……. a white board in my class.','Are','Is','Were','Was','Was','2023-07-05','2023-07-05'),(5,'There ……. any birds on that tree (-)','Are not','Is not','Weren’t','Wasn’t','Wasn’t','2023-07-05','2023-07-05'),(6,'I have ……. Grafes in refrigerator','Any','Some','Much','a little','Some','2023-07-05','2023-07-05'),(7,'Hurry up ! we have not got …. time.','Any','Some','Much','a little','Any','2023-07-05','2023-07-05'),(9,'tiga kurang dua','satu','dua','tiga','empat','satu','2023-07-05','2023-07-05'),(10,'Amanda …….. to eat apples.','Like','Likes','to like','Liked','Likes','2023-07-05','2023-07-05');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `siswa`
--

DROP TABLE IF EXISTS `siswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `siswa` (
  `idSiswa` int(11) NOT NULL AUTO_INCREMENT,
  `namaSiswa` varchar(255) NOT NULL,
  `score` int(100) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idSiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `siswa`
--

LOCK TABLES `siswa` WRITE;
/*!40000 ALTER TABLE `siswa` DISABLE KEYS */;
INSERT INTO `siswa` VALUES (1,'isnan',10,'2023-07-05','2023-07-05'),(2,'Kamil',5,'2023-07-05','2023-07-05'),(3,'-',6,'2023-07-06','2023-07-06'),(4,'-',4,'2023-07-06','2023-07-06'),(5,'-',0,'2023-07-06','2023-07-06'),(6,'-',9,'2023-07-06','2023-07-06'),(7,'amang',4,'2023-07-07','2023-07-07'),(8,'fadhil',0,'2023-07-07','2023-07-07'),(9,'inu',0,'2023-07-07','2023-07-07'),(10,'gege',0,'2023-07-07','2023-07-07'),(11,'tes1',0,'2023-07-08','2023-07-08'),(12,'tes2',5,'2023-07-08','2023-07-08'),(13,'kamil',4,'2023-07-09','2023-07-09'),(14,'Isnan',0,'2023-07-17','2023-07-17'),(15,'Isnan',8,'2023-07-17','2023-07-17'),(16,'Malik',6,'2023-07-19','2023-07-19');
/*!40000 ALTER TABLE `siswa` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-20 21:56:43
