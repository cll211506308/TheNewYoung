-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`body`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`body` (
  `userid` INT NULL,
  `time` DATETIME NULL,
  `bodyid` INT NOT NULL AUTO_INCREMENT,
  `bodyclass` VARCHAR(5000) NULL,
  `userheight` DOUBLE NULL,
  `userweight` DOUBLE NULL,
  PRIMARY KEY (`bodyid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `headpic` VARCHAR(45) NULL,
  `username` VARCHAR(45) NULL,
  `userpassword` VARCHAR(45) NULL,
  `telphone` VARCHAR(45) NULL,
  `autograph` VARCHAR(100) NULL,
  `sex` CHAR(10) NULL,
  `birthday` DATETIME NULL,
  `registertime` DATETIME NULL,
  `isexpert` CHAR NULL,
  PRIMARY KEY (`userid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`artical`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`artical` (
  `articalid` INT NOT NULL AUTO_INCREMENT,
  `articallabel` VARCHAR(45) NULL,
  `coverpic` VARCHAR(45) NULL,
  `content` BLOB NULL,
  `contentpic1` VARCHAR(45) NULL,
  `contentpic2` VARCHAR(45) NULL,
  `contentpic3` VARCHAR(45) NULL,
  `contentpic4` VARCHAR(45) NULL,
  `contentpic5` VARCHAR(45) NULL,
  `status` VARCHAR(10) NULL,
  `userid` INT NULL,
  `pageviews` INT NULL,
  `title` VARCHAR(1000) NULL,
  `articalClassification` VARCHAR(45) NULL,
  PRIMARY KEY (`articalid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`attentions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`attentions` (
  `userid` INT NOT NULL,
  `attentioneduserid` INT NULL,
  `time` DATETIME NULL,
  `attentionsid` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`attentionsid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`collections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`collections` (
  `userid` INT NULL,
  `articalid` INT NULL,
  `time` DATETIME NULL,
  `collectionsid` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`collectionsid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`suggestions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`suggestions` (
  `userid` INT NOT NULL,
  `bigsuggestionsid` INT NULL,
  `time` DATETIME NULL,
  `suggestionsid` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`suggestionsid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Bigsuggestions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Bigsuggestions` (
  `bigsuggestionsid` INT NOT NULL AUTO_INCREMENT,
  `sugcontent` BLOB NULL,
  `bodyclassified` CHAR(45) NULL,
  PRIMARY KEY (`bigsuggestionsid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comments` (
  `commentsid` INT NOT NULL AUTO_INCREMENT,
  `postid` INT NULL,
  `username` VARCHAR(45) NULL,
  `comcontent` BLOB NULL,
  `time` DATETIME NULL,
  PRIMARY KEY (`commentsid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`userlike`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`userlike` (
  `likeid` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NULL,
  `time` DATETIME NULL,
  PRIMARY KEY (`likeid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`administrators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`administrators` (
  `adminid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `admpassword` INT NULL,
  PRIMARY KEY (`adminid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`post` (
  `postid` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NULL,
  `title` VARCHAR(100) NULL,
  `postabel` VARCHAR(10) NULL,
  `time` DATETIME NULL,
  `pageviews` INT NULL,
  `postcontent` BLOB NULL,
  `postpic1` VARCHAR(100) NULL,
  `postpic2` VARCHAR(100) NULL,
  `postpic3` VARCHAR(100) NULL,
  `postClassification` VARCHAR(45) NULL,
  PRIMARY KEY (`postid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users_has_attentions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users_has_attentions` (
  `users_userid` INT NOT NULL,
  `attentions_attentionsid` INT NOT NULL,
  PRIMARY KEY (`users_userid`, `attentions_attentionsid`),
  INDEX `fk_users_has_attentions_attentions1_idx` (`attentions_attentionsid` ASC) VISIBLE,
  INDEX `fk_users_has_attentions_users1_idx` (`users_userid` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_attentions_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_attentions_attentions1`
    FOREIGN KEY (`attentions_attentionsid`)
    REFERENCES `mydb`.`attentions` (`attentionsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users_has_collections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users_has_collections` (
  `users_userid` INT NOT NULL,
  `collections_collectionsid` INT NOT NULL,
  PRIMARY KEY (`users_userid`, `collections_collectionsid`),
  INDEX `fk_users_has_collections_collections1_idx` (`collections_collectionsid` ASC) VISIBLE,
  INDEX `fk_users_has_collections_users1_idx` (`users_userid` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_collections_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_collections_collections1`
    FOREIGN KEY (`collections_collectionsid`)
    REFERENCES `mydb`.`collections` (`collectionsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users_has_suggestions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users_has_suggestions` (
  `users_userid` INT NOT NULL,
  `suggestions_suggestionsid` INT NOT NULL,
  PRIMARY KEY (`users_userid`, `suggestions_suggestionsid`),
  INDEX `fk_users_has_suggestions_suggestions1_idx` (`suggestions_suggestionsid` ASC) VISIBLE,
  INDEX `fk_users_has_suggestions_users1_idx` (`users_userid` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_suggestions_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_suggestions_suggestions1`
    FOREIGN KEY (`suggestions_suggestionsid`)
    REFERENCES `mydb`.`suggestions` (`suggestionsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`suggestions_has_Bigsuggestions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`suggestions_has_Bigsuggestions` (
  `suggestions_suggestionsid` INT NOT NULL,
  `Bigsuggestions_suggestionsid` INT NOT NULL,
  PRIMARY KEY (`suggestions_suggestionsid`, `Bigsuggestions_suggestionsid`),
  INDEX `fk_suggestions_has_Bigsuggestions_Bigsuggestions1_idx` (`Bigsuggestions_suggestionsid` ASC) VISIBLE,
  INDEX `fk_suggestions_has_Bigsuggestions_suggestions1_idx` (`suggestions_suggestionsid` ASC) VISIBLE,
  CONSTRAINT `fk_suggestions_has_Bigsuggestions_suggestions1`
    FOREIGN KEY (`suggestions_suggestionsid`)
    REFERENCES `mydb`.`suggestions` (`suggestionsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_suggestions_has_Bigsuggestions_Bigsuggestions1`
    FOREIGN KEY (`Bigsuggestions_suggestionsid`)
    REFERENCES `mydb`.`Bigsuggestions` (`bigsuggestionsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`artical_has_collections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`artical_has_collections` (
  `artical_articalid` INT NOT NULL,
  `collections_collectionsid` INT NOT NULL,
  PRIMARY KEY (`artical_articalid`, `collections_collectionsid`),
  INDEX `fk_artical_has_collections_collections1_idx` (`collections_collectionsid` ASC) VISIBLE,
  INDEX `fk_artical_has_collections_artical1_idx` (`artical_articalid` ASC) VISIBLE,
  CONSTRAINT `fk_artical_has_collections_artical1`
    FOREIGN KEY (`artical_articalid`)
    REFERENCES `mydb`.`artical` (`articalid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_artical_has_collections_collections1`
    FOREIGN KEY (`collections_collectionsid`)
    REFERENCES `mydb`.`collections` (`collectionsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comments_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comments_has_users` (
  `comments_commentsid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`comments_commentsid`, `users_userid`),
  INDEX `fk_comments_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_comments_has_users_comments1_idx` (`comments_commentsid` ASC) VISIBLE,
  CONSTRAINT `fk_comments_has_users_comments1`
    FOREIGN KEY (`comments_commentsid`)
    REFERENCES `mydb`.`comments` (`commentsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`like_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`like_has_users` (
  `like_postid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`like_postid`, `users_userid`),
  INDEX `fk_like_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_like_has_users_like1_idx` (`like_postid` ASC) VISIBLE,
  CONSTRAINT `fk_like_has_users_like1`
    FOREIGN KEY (`like_postid`)
    REFERENCES `mydb`.`userlike` (`likeid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_like_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`post_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`post_has_users` (
  `post_postid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`post_postid`, `users_userid`),
  INDEX `fk_post_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_post_has_users_post1_idx` (`post_postid` ASC) VISIBLE,
  CONSTRAINT `fk_post_has_users_post1`
    FOREIGN KEY (`post_postid`)
    REFERENCES `mydb`.`post` (`postid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`administrators_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`administrators_has_users` (
  `administrators_adminid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`administrators_adminid`, `users_userid`),
  INDEX `fk_administrators_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_administrators_has_users_administrators1_idx` (`administrators_adminid` ASC) VISIBLE,
  CONSTRAINT `fk_administrators_has_users_administrators1`
    FOREIGN KEY (`administrators_adminid`)
    REFERENCES `mydb`.`administrators` (`adminid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_administrators_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`administrators_has_artical`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`administrators_has_artical` (
  `administrators_adminid` INT NOT NULL,
  `artical_articalid` INT NOT NULL,
  PRIMARY KEY (`administrators_adminid`, `artical_articalid`),
  INDEX `fk_administrators_has_artical_artical1_idx` (`artical_articalid` ASC) VISIBLE,
  INDEX `fk_administrators_has_artical_administrators1_idx` (`administrators_adminid` ASC) VISIBLE,
  CONSTRAINT `fk_administrators_has_artical_administrators1`
    FOREIGN KEY (`administrators_adminid`)
    REFERENCES `mydb`.`administrators` (`adminid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_administrators_has_artical_artical1`
    FOREIGN KEY (`artical_articalid`)
    REFERENCES `mydb`.`artical` (`articalid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`body_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`body_has_users` (
  `body_bodyid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`body_bodyid`, `users_userid`),
  INDEX `fk_body_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_body_has_users_body1_idx` (`body_bodyid` ASC) VISIBLE,
  CONSTRAINT `fk_body_has_users_body1`
    FOREIGN KEY (`body_bodyid`)
    REFERENCES `mydb`.`body` (`bodyid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_body_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
